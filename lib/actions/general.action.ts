"use server";

import Question from "@/databases/question.model";
import { connectToDatabase } from "../mongoose";
import { SearchParams } from "./shared.types";
import User from "@/databases/user.model";
import Answer from "@/databases/answer.model";
import Tag from "@/databases/tag.model";

const SearchableType = ["question", "answer", "user", "tag"];

export async function globalSearch(params: SearchParams) {
  try {
    await connectToDatabase();

    const { query, type } = params;
    const regexQuery = { $regex: query, $options: "i" };

    let results: any = [];

    const modelAndTypes = [
      { model: Question, searchField: "title", type: "question" },
      { model: User, searchField: "name", type: "user" },
      { model: Answer, searchField: "content", type: "answer" },
      { model: Tag, searchField: "name", type: "tag" },
    ];

    const typeLower: string | undefined = type?.toLowerCase();

    console.log("Normalized type:", typeLower);

    const isIncluded = typeLower && SearchableType.includes(typeLower); // Check if typeLower is included in SearchableType
    console.log("Is type included:", isIncluded);

    if (!typeLower || !SearchableType.includes(typeLower)) {
      // seach everything as there is is no specific type  to seach or so type match with the SeachableType
      for (const { model, searchField, type } of modelAndTypes) {
        const queryResults = await model
          .find({ [searchField]: regexQuery })
          .limit(2);

        results.push(
          ...queryResults.map((item) => ({
            title:
              type === "answer"
                ? `Answer containing ${query}`
                : item[searchField],
            type,
            id:
              type === "user"
                ? item.clerkId
                : type === "answer"
                  ? item.question
                  : item._id,
          }))
        );
      }
    } else {
      const modelInfo = modelAndTypes.find((item) => item.type === typeLower);
      console.log(typeLower);
      console.log(modelInfo);
      if (!modelInfo) {
        throw new Error("invalid search type");
      }

      const queryResults = await modelInfo.model
        .find({
          [modelInfo.searchField]: regexQuery,
        })
        .limit(8);

      results = queryResults.map((item) => ({
        title:
          type === "answer"
            ? `Answer containing ${query}`
            : item[modelInfo.searchField],
        type,
        id:
          type === "user"
            ? item.clerkId
            : type === "answer"
              ? item.question
              : item._id,
      }));
    }
    return JSON.stringify(results);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

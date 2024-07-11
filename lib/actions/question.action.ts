"use server";

import Question from "@/databases/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/databases/tag.model";
import { GetQuestionsParams, CreateQuestionParams } from "./shared.types";
import User from "@/databases/user.model";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag }) // populate is use to get all the information of the ref model. as tag key that store in question model only store id of key
      .populate({ path: "author", model: User }); // populate is use to get all the information of the ref model. as User key that store in question model only store id of User

    return { questions };
  } catch (error) {
    console.log(error);
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    connectToDatabase();
    const { title, content, tags, author, path } = params;

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];
    // Create the tags or get them if they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } }, // case insensitive
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });
  } catch (error) {}
}

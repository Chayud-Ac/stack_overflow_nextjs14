import Link from "next/link";
import React from "react";
import Image from "next/image";
import RenderTag from "./RenderTag";
import { getHotQuestions } from "@/lib/actions/question.action";
import { getPopularTags } from "@/lib/actions/tag.actions";

const RightSidebar = async () => {
  const hotQuestionsRaw = await getHotQuestions();

  const hotQuestions = JSON.parse(JSON.stringify(hotQuestionsRaw)); // this one help to convert the complex object into normal object which can be pass to the client component or we can basically read the properties from reponse object more easier
  console.log(hotQuestions);

  const popularTagsRaw = await getPopularTags();
  const popularTags = JSON.parse(JSON.stringify(popularTagsRaw));
  console.log(popularTags);

  return (
    <section
      className="background-light900_dark200 light-border custom-scrollbar 
    sticky right-0 top-0 flex h-screen flex-col overflow-y-auto 
    border-l p-6 pt-36 shadow-light-300 dark:shadow-none w-[350px] max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question: any) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="cheron_right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">
          Popular Tags Questions
        </h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag: any) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.numberOfQuestions}
              showCount={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;

import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilter from "@/components/home/HomeFilter";
import NoResults from "@/components/shared/NoResults";
import QuestionCard from "@/components/cards/QuestionCard";

export default function Home() {
  const questions = [
    {
      _id: "1",
      title: "Cascading Deletes in SQLAlchemy",
      tags: [
        { _id: "1", name: "python" },
        { _id: "2", name: "sql" },
      ],
      author: {
        _id: "1",
        name: "John Doe",
        picture: "https://example.com/picture1.jpg",
      },
      upvotes: 10,
      views: 1000,
      answer: [],
      createAt: new Date("2021-09-01T00:00:00Z"),
    },
    {
      _id: "2",
      title: "How to Use React Hooks",
      tags: [
        { _id: "3", name: "react" },
        { _id: "4", name: "javascript" },
      ],
      author: {
        _id: "3",
        name: "Alice Smith",
        picture: "https://example.com/picture3.jpg",
      },

      upvotes: 25,
      views: 30000,
      answer: [],
      createAt: new Date("2021-09-05T00:00:00Z"),
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      {/* Tags under the search bar for full screen */}
      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {/* looping through question */}
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answer={question.answer}
              createAt={question.createAt}
            />
          ))
        ) : (
          <NoResults
            title="There'no question to show"
            describtion=" Be the first to break the slience! Ask a Question and kickstart the
          discussion.our"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </>
  );
}

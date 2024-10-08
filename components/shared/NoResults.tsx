import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  link: string;
  describtion: string;
  linkTitle: string;
}

const NoResults = ({ title, link, describtion, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="no result illustration"
        width={270}
        height={270}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="no result illustration"
        width={270}
        height={270}
        className="hidden object-contain dark:flex"
      />
      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-wd text-center">
        {describtion}
      </p>
      <Link href={link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:text-light-900">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResults;

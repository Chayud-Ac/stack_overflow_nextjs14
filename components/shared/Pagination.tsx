"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";

interface Props {
  pageNumber: number;
  isNext?: boolean;
}

const Pagination = ({ pageNumber, isNext }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNavigation = (direction: string) => {
    const nextPageNumber =
      direction === "prev" ? pageNumber - 1 : pageNumber + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: nextPageNumber.toString(),
    });
    router.push(newUrl);
  };

  if (!isNext && pageNumber === 1) return null;
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Button
        disabled={pageNumber === 1}
        onClick={() => handleNavigation("prev")}
        className="btn light-border-2 flex min-h-[36px] items-center justify-center gap-2 border"
      >
        <span className="body-medium text-dark200_light800">Prev</span>
      </Button>
      <div className="bg-primary-500 flex justify-center items-center rounded-md px-3.5 py-2">
        <span className="body-semibold text-light-900">{pageNumber}</span>
      </div>

      <Button
        disabled={!isNext}
        onClick={() => handleNavigation("Next")}
        className="btn light-border-2 flex min-h-[36px] items-center justify-center gap-2 border"
      >
        <span className="body-medium text-dark200_light800">Next</span>
      </Button>
    </div>
  );
};

export default Pagination;

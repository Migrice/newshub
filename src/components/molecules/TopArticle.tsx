import Logo from "../atoms/Logo";
import Point from "../atoms/Point";
import { timeAgo } from "../../../utils";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Article } from "../../models";
import React from "react";

type TopArticleProps = {
  article: Article;
};

const TopArticle: React.FC<TopArticleProps> = ({ article }) => {
  return (
    <div className="mx-3 flex flex-col justify-between gap-4 rounded-2xl bg-[#f6f6f6] px-4 py-2 md:w-[50%] lg:absolute lg:top-[50%] lg:left-0 lg:max-w-md lg:-translate-y-[50%] lg:gap-6">
      <div className="flex flex-row items-center gap-[1rem]">
        <Logo />
        <div>{article.source.name}</div>
        <Point />
        <p className="font-bold text-[#d85a5c]">
          {timeAgo(article.publishedAt)}
        </p>
      </div>

      <p className="text-2xl font-semibold lg:text-3xl">{article.title}</p>

      <p className="text-justify leading-[1.7rem] text-[#acacac]">
        {article.content}
      </p>
      <p className="text-right">
        <a
          className="ml-2 font-bold text-black hover:text-blue-600"
          target="blank"
          href={article.url}
        >
          Read More
        </a>
      </p>

      <div className="flex flex-row justify-between">
        <p className="font-bold">{article.author}</p>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <ChevronLeft />
          <ChevronRight color="#d85a5c" />
        </div>
      </div>
    </div>
  );
};

export default TopArticle;

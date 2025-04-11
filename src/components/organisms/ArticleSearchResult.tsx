import React from "react";
import { Article } from "../../models";
import Point from "../atoms/Point";
import { timeAgo } from "../../../utils";

type ArticleItemResultProps = {
  article: Article;
};

const ArticleSearchResult: React.FC<ArticleItemResultProps> = ({ article }) => {
  return (
    <div className="min-h-[200px]">
      <div className="h-52">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
      <div className="mt-2 flex min-h-52 flex-1 flex-col gap-[1rem]">
        <div className="flex flex-row items-center gap-[0.7rem]">
          <span className="text-xm font-bold">{article.source.name}</span>
          <Point />
          <span className="text-sm font-bold text-[#d85a5c]">
            {timeAgo(article.publishedAt)}
          </span>
        </div>

        <span className="text-xl font-medium">
          <a
            target="blank"
            href={article.url}
            className="leading-snug hover:underline"
            rel="noopener noreferrer"
          >
            {article.title}
          </a>
        </span>
        <div className="mt-auto flex flex-row items-center gap-[1rem]">
          <span className="font-bold">{article.author}</span>
          <Point />
          <span> 2 min read</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleSearchResult;

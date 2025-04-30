import React from "react";
import { Article } from "../../models";
import { timeAgo } from "../../../utils";

type ArticleItemResultProps = {
  article: Article;
};

const ArticleSearchResult: React.FC<ArticleItemResultProps> = ({ article }) => {
  return (
    <div className="flex h-full flex-col">
      <div className="h-52">
        <a target="blank" href={article.url} rel="noopener noreferrer">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="h-full w-full rounded-xl object-cover"
          />
        </a>
      </div>
      <div className="mt-2 flex flex-1 flex-col gap-2">
        <div className="flex flex-row items-center justify-between">
          <span className="text-xm font-bold">{article.source.name}</span>
          <span className="text-sm font-bold text-[#d85a5c]">
            {timeAgo(article.publishedAt)}
          </span>
        </div>

        <span className="grow font-medium">
          <a
            target="blank"
            href={article.url}
            className="leading-snug hover:text-indigo-500"
            rel="noopener noreferrer"
          >
            {article.title}
          </a>
        </span>
        {/* <div className="flex flex-row items-center gap-[1rem]">
          {article.author && (
            <>
              <span className="font-bold">{article.author}</span>
              <Point />
            </>
          )}

          <span> 2 min read</span>
        </div> */}
      </div>
    </div>
  );
};

export default ArticleSearchResult;

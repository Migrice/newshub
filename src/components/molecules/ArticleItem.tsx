import React from "react";
import { Article } from "../../models";
import Logo from "../atoms/Logo";
import Point from "../atoms/Point";
import { timeAgo } from "../../../utils";

type ArticleItemProps = {
  article: Article;
};

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  return (
    <div className="flex h-full w-full flex-col gap-5 lg:flex-row">
      <div className="lg:h-full lg:w-[40%]">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      <div className="flex flex-col justify-between lg:w-[60%] lg:justify-around">
        <div className="flex flex-row items-center justify-between lg:gap-1">
          <div className="flex flex-row items-center gap-2">
            <Logo />
            <div>{article.source.name}</div>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            <Point />
            <p className="font-bold text-[#d85a5c]">
              {timeAgo(article.publishedAt)}
            </p>
          </div>
        </div>

        <p className="text-2xl font-semibold lg:text-sm">
          <a className="hover:underline" href={article.url} target="blank">
            {article.title}
          </a>
        </p>

        <div className="flex flex-row items-center gap-[1rem]">
          <p className="font-bold">{article.author}</p>
          <Point />
          <p> 2 min read</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;

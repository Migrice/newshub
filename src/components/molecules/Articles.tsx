import React from "react";
import { Article } from "../../models";
import ArticleItem from "./ArticleItem";

type ArticlesProps = {
  articles: Article[];
};

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <div className="mx-3 mt-5 flex flex-col gap-10 lg:mt-0 lg:h-full lg:justify-between lg:gap-5">
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default Articles;

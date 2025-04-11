import config from "../../../config";
import useCategories from "../../hooks/useCategories";
import useTopHeadLines from "../../hooks/useTopHeadLines";
import ArticleSearchResult from "../organisms/ArticleSearchResult";
import Navbar from "../organisms/NavBar/Navbar";

const NewsFilter = () => {
  const { categories } = useCategories();

  const url = `/top-headlines/?category=science&pageSize=20&page=1&apiKey=${config.NEWSAPIKEY}`;

  const { articles } = useTopHeadLines(url);

  return (
    <>
      <Navbar categories={categories} />

      <div className="mt-20 flex w-full justify-center gap-4">
        <div className="flex flex-1 bg-gray-300">
          <p className="mt-3 w-full text-center text-xl font-bold">
            Filter Section
          </p>
        </div>
        <div className="flex-4">
          <div
            className="grid min-h-[200px] w-full grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[1rem]"
            style={{ flex: 8 }}
          >
            {articles.map((article) => (
              <ArticleSearchResult article={article} />
            ))}
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default NewsFilter;

import useCategories from "../../hooks/useCategories";
import Navbar from "../organisms/NavBar/Navbar";

import ImageBg from "../atoms/ImageBg";
import TopArticle from "../molecules/TopArticle";
import Articles from "../molecules/Articles";
import useTopHeadLines from "../../hooks/useTopHeadLines";
import config from "../../../config";

const Home = () => {
  const { categories } = useCategories();

  const url = `/top-headlines/?category=sports&pageSize=5&page=1&apiKey=${config.NEWSAPIKEY}`;
  const { articles, isLoading } = useTopHeadLines(url);

  console.log("cat", categories);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }
  console.log("articles", articles);

  return (
    <>
      <div className="flex flex-col gap-[3rem]">
        <Navbar categories={categories} />

        <div className="mt-20 w-full lg:flex lg:h-[40rem] lg:flex-row">
          <div className="relative flex w-full flex-col md:flex-row lg:w-[70%] lg:flex-row lg:justify-end">
            <ImageBg article={articles[0]} />
            <TopArticle article={articles[0]} />
          </div>
          <div className="h-full lg:w-[30%]">
            <Articles articles={articles.slice(1)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

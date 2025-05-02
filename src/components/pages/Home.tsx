import Navbar from "../organisms/NavBar/Navbar";

import ImageBg from "../atoms/ImageBg";
import TopArticle from "../molecules/TopArticle";
import Articles from "../molecules/Articles";
import useTopHeadLines from "../../hooks/useTopHeadLines";
import { Params } from "../../models";
import useCategoriesAndSources from "../../hooks/useCategoriesAndSources";
import { useState } from "react";
import Footer from "../organisms/Footer/Footer";
import Copyright from "../organisms/Copyright";

const Home = () => {
  const { categories } = useCategoriesAndSources();
  const [category, setCategory] = useState<string>("general");

  console.log("selected category", category);

  const params: Params = {
    page: 1,
    pageSize: 5,
    category: "general",
  };
  const { articles, isLoading } = useTopHeadLines(params);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col gap-[3rem]">
        <Navbar categories={categories} onCategoryChange={setCategory} />

        <div className="mt-30 w-full lg:flex lg:h-[40rem] lg:flex-row">
          <div className="relative flex w-full flex-col md:flex-row lg:w-[70%] lg:flex-row lg:justify-end">
            <ImageBg article={articles[0]} />
            <TopArticle article={articles[0]} />
          </div>
          <div className="h-full lg:w-[30%]">
            <Articles articles={articles.slice(1)} />
          </div>
        </div>
      </div>
      <div className="mt-20 flex w-full bg-[#f6f6f6]">
        <Footer />
      </div>

      <div className="w-full bg-[#f6f6f6]">
        <Copyright />
      </div>
    </>
  );
};

export default Home;

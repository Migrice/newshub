import { useRef, useState } from "react";
import ArticleSearchResult from "../organisms/ArticleSearchResult";
import FilterSection from "../organisms/FilterSection";
import Navbar from "../organisms/NavBar/Navbar";
import { Params } from "../../models";
import useCategoriesAndSources from "../../hooks/useCategoriesAndSources";
import useSearchEverything from "../../hooks/useSearchEverything";
import ReactPaginate from "react-paginate";
import { Funnel } from "lucide-react";
const NewsFilter = () => {
  const { categories, sources } = useCategoriesAndSources();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);
  // const sources = [
  //   {
  //     id: "bbc-news",
  //     name: "bbc News",
  //     description: "News from BBC",
  //     url: "http://bbc-news.com",
  //     category: "technology",
  //     language: "en",
  //     country: "Cameroun",
  //   },
  //   {
  //     id: "bbc-sport",
  //     name: "bbc Sports",
  //     description: "News from BBC in sport",
  //     url: "http://bbc-news.com",
  //     category: "technology",
  //     language: "en",
  //     country: "Cameroun",
  //   },
  // ];

  // const categories = ["technology", "science", "health", "sports", "general"];

  const [category, setCategory] = useState<string>("general");

  console.log("selected category", category);

  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 30,
    sources: "polygon,google-news,new-scientist",
  });
  // const { articles, isLoading } = useTopHeadLines(params);
  const { articles, totalResults } = useSearchEverything(params);

  // if (isLoading) {
  //   return (
  //     <div className="flex h-screen items-center justify-center">
  //       <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
  //     </div>
  //   );
  // }

  const itemsPerPage = params.pageSize ?? 30;

  const [_, setItemOffset] = useState(0);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * itemsPerPage) % articles.length;

    setItemOffset(newOffset);
    setParams((prev) => ({
      ...prev,
      page: selectedItem.selected,
    }));
  };

  return (
    <>
      <Navbar categories={categories} onCategoryChange={setCategory} />

      <div className="mt-20 flex w-full justify-center lg:mt-30">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed left-0 z-40 ml-2 rounded-lg bg-gray-800 p-2 lg:hidden"
        >
          <Funnel color="white" />
        </button>

        <div
          ref={sidebarRef}
          className={`fixed left-0 z-20 h-screen w-3/4 bg-white lg:block ${isSidebarOpen && "shadow-2xl"} transition-transform duration-300 lg:ml-4 lg:block lg:w-1/6 lg:flex-1 lg:translate-x-0 ${isSidebarOpen && "translate-x-0"} ${isSidebarOpen ? "block" : "hidden"} `}
          // style={{ width: "calc(100% * 1/6)" }}
        >
          <FilterSection
            sources={sources}
            updateParams={setParams}
            handleClose={setIsSidebarOpen}
          />
        </div>

        {/* {isSidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )} */}

        <div className={`w-full lg:ml-[18.666%] lg:w-5/6`}>
          <div className="mx-2 lg:mr-4">
            <div
              className="grid min-h-[200px] w-full grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] items-stretch gap-[1rem]"
              style={{ flex: 8 }}
            >
              {articles.map((article) => (
                <ArticleSearchResult
                  article={article}
                  key={article.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-20 flex w-full flex-row justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          pageRangeDisplayed={5}
          pageCount={totalResults}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          onPageChange={handlePageClick}
          className="flex items-center gap-10 rounded-2xl border border-gray-300 bg-blue-100 p-2"
          activeClassName="border  bg-white p-2"
        />
      </div>
    </>
  );
};

export default NewsFilter;

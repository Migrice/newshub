import { Search, User, AlignJustify } from "lucide-react";
import { useState } from "react";

const Navbar = ({ categories }: { categories: string[] }) => {
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const openOverlay = () => setIsOverlayVisible(true);
  const closeOverlay = () => setIsOverlayVisible(false);

  const handleSetIsCategoriesVisible = () => {
    return setIsCategoriesVisible(!isCategoriesVisible);
  };

  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <div className="fixed top-0 z-10 w-full bg-[#1f1f1f] px-3 py-3 text-white shadow-md">
      <div className="flex flex-row items-center justify-between">
        <h1 className="flex text-2xl font-bold md:flex-1 md:text-3xl">
          <a href="/" className="no-underline">
            NewsHub
          </a>
        </h1>

        <ul className="hidden flex-row justify-between md:flex md:flex-1/4 lg:flex-1/6">
          {categories.map((cat, index) => (
            <a href="">
              <li
                key={cat}
                className={`pl-2 transition-colors duration-300 ${activeCategory === index ? "text-[#d85a5c]" : "text-white"}`}
                onClick={() => setActiveCategory(index)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </li>
            </a>
          ))}
        </ul>

        <div className="flex flex-row gap-5 md:flex-1 md:justify-end">
          <Search size={24} onClick={openOverlay} />
          <User className="hidden md:inline" />

          <AlignJustify
            className="md:hidden"
            onClick={handleSetIsCategoriesVisible}
          />
        </div>
      </div>

      {isCategoriesVisible && (
        <ul className="menu mt-6 flex flex-col items-center gap-2 rounded-2xl border-2 border-gray-500 p-2 hover:text-blue-400">
          {categories.map((cat) => (
            <a href="/">
              <li key={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</li>
            </a>
          ))}
        </ul>
      )}

      {isOverlayVisible && (
        <div
          className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center p-[20rem] contrast-150 backdrop-contrast-[30%] backdrop-filter"
          onClick={closeOverlay}
        >
          <div
            className="relative -mt-[40rem] w-full rounded-2xl bg-[#fff] p-[3rem] text-center shadow-2xs"
            onClick={(e) => e.stopPropagation()}
          >
            <form action="" className="flex flex-row justify-between gap-1">
              <input
                type="text"
                placeholder="Ex: Apple"
                className="flex w-5/6 flex-1 cursor-pointer rounded-xl border border-gray-800 p-[1rem] text-[1rem] text-black"
              />
              <button
                type="submit"
                className="flex w-1/6 cursor-pointer items-center justify-center rounded-xl border-none bg-[#d85a5c] p-[1rem] text-[1rem] text-white"
              >
                Rechercher
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

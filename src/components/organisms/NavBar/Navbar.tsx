import { Search, User, AlignJustify } from "lucide-react";
import { useState } from "react";

const Navbar = ({ categories }: { categories: string[] }) => {
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

  const handleSetIsCategoriesVisible = () => {
    return setIsCategoriesVisible(!isCategoriesVisible);
  };
  return (
    <div className="bg-[#1f1f1f] px-3 py-3 text-white">
      <div className="flex flex-row items-center justify-between">
        <h1 className="flex text-2xl font-bold md:flex-1 md:text-3xl">
          NewsHub
        </h1>

        <ul className="hidden flex-row justify-between md:flex md:flex-1/4 lg:flex-1/6">
          {categories.map((cat) => (
            <a href="/">
              <li key={cat} className="pl-2">
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </li>
            </a>
          ))}
        </ul>

        <div className="flex flex-row gap-5 md:flex-1 md:justify-end">
          <Search size={24} />
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
    </div>
  );
};

export default Navbar;

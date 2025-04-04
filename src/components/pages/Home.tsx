import useCategories from "../../hooks/useCategories";
import Navbar from "../organisms/NavBar/Navbar";

const Home = () => {
  const { categories } = useCategories();

  return (
    <>
      <div>
        <Navbar categories={categories} />
      </div>
    </>
  );
};

export default Home;

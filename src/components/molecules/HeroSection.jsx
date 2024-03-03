import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllRecipe from "../../store/action/getAllRecipeAction";

const HeroSection = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const dispatch = useDispatch();

  const recipeByQueryData = useSelector((state) => state.recipeByQuery.data);
  const recipeByMealData = useSelector((state) => state.recipeByMeal.data);

  console.log(recipeByQueryData, recipeByMealData);
  const handleSearch = (e) => {
    setInputSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllRecipe(inputSearchValue));
  };

  return (
    <section className="w-full bg-blue-gray-50 bg-cover mt-18 p-32">
      <div className="container mx-auto max-w-[90%] flex flex-col justify-center items-center gap-10">
        <h1 className="text-6xl font-serif font-bold text-center">
          What to Cook Today
        </h1>
        <div className="flex items-center justify-center w-full">
          <form onSubmit={handleSubmit}>
            <div className="w-full flex items-center justify-center">
              <input
                type="text"
                placeholder="Cari Resep"
                value={inputSearchValue}
                onChange={handleSearch}
                className="w-full font-lato max-w-md py-2 px-3 border rounded-l-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white/70"
              />
              <button className="py-2 px-3 text-white rounded-r-md shadow-md bg-black">
                <Search />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

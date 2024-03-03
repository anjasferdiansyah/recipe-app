import DetailRecipe from "../atoms/DetailRecipe";
import { useSelector } from "react-redux";

const SingleRecipe = () => {
  const recipeByIdData = useSelector((state) => state.recipeById.data.recipe);

  return (
    <div className="md:flex container mx-auto max-w-[90%]">
      <div
        className={`w-1/2 flex justify-center mx-auto overflow-hidden mt-20 p-8`}
      >
        {recipeByIdData?.image ? (
          <img
            src={recipeByIdData?.image}
            className="w-full object-cover"
            alt=""
          />
        ) : (
          <img
            src="/img/placeholders.png"
            className="w-full object-cover animate-pulse"
            alt="No Image"
          />
        )}
      </div>
      <DetailRecipe />
    </div>
  );
};

export default SingleRecipe;

import { Button } from "@material-tailwind/react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  removeBookmark,
  toogleBookmark,
} from "../../store/reducer/bookmarkSlice";

const DetailRecipe = () => {
  const recipeByIdData = useSelector((state) => state.recipeById?.data.recipe);
  const isBookmarked = useSelector((state) =>
    state.bookmark.data.find((item) => item.uri === recipeByIdData?.uri)
  );

  const dispatch = useDispatch();

  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(recipeByIdData));
      dispatch(toogleBookmark(recipeByIdData));
    } else {
      dispatch(addBookmark(recipeByIdData));
      dispatch(toogleBookmark(recipeByIdData));
    }
  };

  const getTime = (minute) => {
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);

    const time = day || hour || minute;
    const unitIndex = [day, hour, minute].lastIndexOf(time);
    const timeUnit = ["day", "hours", "minutes"][unitIndex];

    return {
      time,
      timeUnit,
    };
  };

  return (
    <div className="md:mt-20">
      <div className="gap-4 flex md:flex-col md:items-start px-4 py-4 justify-between items-center w-full">
        <div className="">
          <h1 className="text-lg font-bold font-serif">
            {recipeByIdData?.label}
          </h1>
          <p>
            By <span>{recipeByIdData?.source}</span>
          </p>
        </div>
        <Button
          size="sm"
          onClick={handleBookmark}
          className="capitalize flex justify-center items-center px-2 py-1"
        >
          {isBookmarked ? (
            <>
              <BookmarkCheck size={20} />
              <span className="text-sm">Saved</span>
            </>
          ) : (
            <>
              <Bookmark size={20} />
              <span className="text-sm">Save</span>
            </>
          )}
        </Button>
      </div>
      <div className="grid grid-cols-3 justify-center w-full">
        <div className="flex flex-col items-center px-4 py-2">
          <h1 className="text-2xl font-semibold">
            {recipeByIdData?.ingredients?.length}
          </h1>
          <p className="text-sm">Ingredients</p>
        </div>
        <div className="flex flex-col items-center px-4 py-2 border-x-2 border-x-gray-200">
          <h1 className="text-2xl font-semibold">
            {getTime(recipeByIdData?.totalTime).time || "< 1"}
          </h1>
          <p className="text-sm">
            {getTime(recipeByIdData?.totalTime).timeUnit}
          </p>
        </div>
        <div className="flex flex-col items-center px-4 py-2">
          <h1 className="text-2xl font-semibold">
            {Math.floor(recipeByIdData?.calories)}
          </h1>
          <p className="text-sm">Calories</p>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full px-8 py-4 flex justify-between border-b-2 border-gray-300">
          <p>Ingredients</p>
          <p>for {recipeByIdData?.yield} servings</p>
        </div>
        <div className="w-full p-4">
          <ul>
            {recipeByIdData?.ingredientLines?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailRecipe;

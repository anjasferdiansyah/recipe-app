import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/layouts/Navigation";
import CustomCard from "../components/atoms/CustomCard";
import {
  addBookmark,
  removeBookmark,
  toogleBookmark,
} from "../store/reducer/bookmarkSlice";

const BookmarkedRecipePage = () => {
  const bookmarked = useSelector((state) => state.bookmark.data);
  const dispatch = useDispatch();

  const handleBookmark = (recipe) => {
    const isBookmarked = bookmarked.find((item) => item.uri === recipe.uri);
    if (isBookmarked) {
      dispatch(removeBookmark(recipe));
      dispatch(toogleBookmark(recipe));
    } else {
      dispatch(addBookmark(recipe));
      dispatch(toogleBookmark(recipe));
    }
  };

  return (
    <>
      <Navigation />
      <div className="w-full mt-20">
        <h1 className="container md:max-w-[90%] mx-auto text-xl font-bold px-8">
          Saved Recipe
        </h1>
        <div className="container md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarked && bookmarked.length !== 0 ? (
            bookmarked.map((data) => (
              <CustomCard
                key={data.id}
                onClick={() => handleBookmark(data)}
                data={data}
              />
            ))
          ) : (
            <h1 className="p-8">No Bookmarked Recipe</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default BookmarkedRecipePage;

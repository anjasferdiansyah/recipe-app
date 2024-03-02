import { useParams } from "react-router-dom";

import Navigation from "../components/layouts/Navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleRecipe from "../components/molecules/SingleRecipe";
import getSingleRecipe from "../store/action/getSingleRecipeAction";

const SingleRecipePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleRecipe(id));
  }, []);

  const recipeData = useSelector((state) => state.recipeById.data);
  console.log(recipeData);

  return (
    <>
      <Navigation />
      <SingleRecipe />
    </>
  );
};

export default SingleRecipePage;

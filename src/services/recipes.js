import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASE_API_URL;
const appId = import.meta.env.VITE_APP_API_ID;
const appKey = import.meta.env.VITE_APP_API_KEY;
const type = "public";

export const getDataRecipe = async (query) => {
  try {
    const res = await axios.get(
      `${baseUrl}?type=${type}&app_id=${appId}&app_key=${appKey}&q=${query}`
    );

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getDataRecipebyMealtype = async (mealType = "breakfast") => {
  try {
    const res = await axios.get(
      `${baseUrl}?type=${type}&app_id=${appId}&app_key=${appKey}&mealType=${mealType}&random=true`
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getDataRecipeById = async (id) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${id}?type=${type}&app_id=${appId}&app_key=${appKey}`
    );

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import CategoryCard from "../atoms/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import getRecipe from "../../store/action/getRecipeAction";
import { PlaceholderCard } from "./PlaceholderCard";

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("breakfast");
  const dispatch = useDispatch();

  const recipeData = useSelector((state) => state.recipeByMeal.data);
  const isLoading = useSelector((state) => state.recipeByMeal.isLoading);

  useEffect(() => {
    dispatch(getRecipe(activeTab));
  }, [activeTab]);

  const skeleton = [...new Array(12)].map((_, i) => (
    <PlaceholderCard key={i} />
  ));
  const data = [
    {
      label: "Breakfast",
      value: "breakfast",
    },
    {
      label: "Lunch",
      value: "lunch",
    },
    {
      label: "Dinner",
      value: "dinner",
    },
    {
      label: "Snack",
      value: "snack",
    },
    {
      label: "Teatime",
      value: "teatime",
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-orange-500 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`font-jost ${
              activeTab === value ? "text-gray-900" : ""
            }`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value }) => (
          <TabPanel
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            key={value}
            value={value}
          >
            {isLoading ? (
              <>{skeleton}</>
            ) : (
              recipeData &&
              recipeData.hits.map((item, i) => (
                <CategoryCard data={item.recipe} key={i} />
              ))
            )}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

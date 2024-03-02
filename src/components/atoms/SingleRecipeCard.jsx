import { Button } from "@material-tailwind/react";
import { Bookmark } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function SingleRecipeCard({ className, data }) {
  return (
    <div className={`w-full mx-auto overflow-hidden ${className} mt-20 p-8`}>
      <div className="w-full object-cover overflow-hidden">
        <img
          src="https://source.unsplash.com/600x600/?food"
          className="w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

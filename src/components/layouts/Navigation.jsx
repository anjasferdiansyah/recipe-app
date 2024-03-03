import { Collapse, IconButton } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Bookmark, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  const navList = (
    <ul className="my-2 flex flex-col justify-center items-center gap-2 lg:mb-0 lg:mt-0 md:flex-row lg:gap-6">
      <li className="text-sm block">
        <Link
          to="/bookmarked"
          className="flex md:hidden gap-2 items-center"
          size="sm"
          variant="outlined"
        >
          <Bookmark />
          <span className="text-sm">Saved Recipes</span>
        </Link>
      </li>
    </ul>
  );

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
    return () => {
      window.removeEventListener("resize", () => setOpenNav(false));
    };
  }, []);

  return (
    <header className="w-full py-4 border-b-[1px] bg-white border-blue-gray-100 fixed top-0 left-0 z-[99]">
      <div className="container flex items-center justify-between mx-auto px-8 lg:max-w-6xl">
        <div className="flex gap-2 justify-center items-center">
          <img src="/img/food-logo.png" className="w-10" alt="" />
          <Link
            to="/"
            className="text-sm md:text-md lg:text-lg font-bold font-serif"
          >
            RecipeApp
          </Link>
        </div>
        <div className=" md:flex justify-center items-center">
          <Link
            to="/bookmarked"
            className="hidden md:flex gap-2 items-center capitalize"
            size="sm"
            variant="outlined"
          >
            <Bookmark />
            <span className="text-sm">Saved Recipes</span>
          </Link>
        </div>
        <IconButton
          variant="text"
          onClick={() => setOpenNav(!openNav)}
          className="md:hidden"
        >
          {openNav ? <X /> : <Menu />}
        </IconButton>
      </div>
      {window.innerWidth < 768 && <Collapse open={openNav}>{navList}</Collapse>}
    </header>
  );
};

export default Navigation;

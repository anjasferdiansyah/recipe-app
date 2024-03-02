import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full bg-blue-gray-50 bg-cover mt-18 p-32">
      <div className="container mx-auto max-w-[90%] flex flex-col justify-center items-center gap-10">
        <h1 className="text-6xl font-serif font-bold text-center">
          What to Cook Today
        </h1>
        <div className="flex items-center justify-center w-full">
          <div className="w-full flex items-center justify-center">
            <input
              type="text"
              placeholder="Cari Resep"
              className="w-full font-lato max-w-md py-2 px-3 border rounded-l-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white/70"
            />
            <button className="py-2 px-3 text-white rounded-r-md shadow-md bg-black">
              <Search />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

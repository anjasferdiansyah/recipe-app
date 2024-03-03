import CustomTabs from "./CustomTabs";

const CategorySection = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="container max-w-[90%] mx-auto md:max-w-[90%]justify-items-center py-8">
        <CustomTabs />
      </div>
    </section>
  );
};

export default CategorySection;

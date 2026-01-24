const CategoryPage = () => {
  return (
    <section className="max-w-6xl mx-auto m-10">
      <div className=" flex gap-5">
        <input type="slider" />
        <p className="bg-gray-200 rounded-full p-2">All (90)</p>
        <p className="bg-gray-200 rounded-full p-2 hover:bg-[#DB4444] hover:text-white cursor-pointer transition-colors-300 ">
          Phone (90)
        </p>
        <p className="bg-gray-200 rounded-full p-2">Computer (90)</p>
        <p className="bg-gray-200 rounded-full p-2">SmartWatch (90)</p>
        <p className="bg-gray-200 rounded-full p-2">Camera (90)</p>
        <p className="bg-gray-200 rounded-full p-2">Headphone (90)</p>
        <p className="bg-gray-200 rounded-full p-2">Gaming (90)</p>
      </div>
    </section>
  );
};

export default CategoryPage;

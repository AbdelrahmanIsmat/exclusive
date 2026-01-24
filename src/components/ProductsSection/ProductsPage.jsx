import { useState } from "react";
import { productsData } from "../../productsData";
<<<<<<< HEAD
import ProductCard from "../ProductsSection/ProductCard";
import Select from "react-select";
import SectionHeader from "../SectionHeader";

const options = [
  { value: "All", label: "All" },
  { value: "Women’s Fashion", label: "Women’s Fashion" },
  { value: "Men’s Fashion", label: "Men’s Fashion" },
  { value: "Electronics", label: "Electronics" },
  { value: "Home & Lifestyle", label: "Home & Lifestyle" },
  { value: "Medicine", label: "Medicine" },
  { value: "Sports & Outdoors", label: "Sports & Outdoors" },
  { value: "Baby & Toys", label: "Baby & Toys" },
  { value: "Groceries & Pets", label: "Groceries & Pets" },
  { value: "Health & Beauty", label: "Health & Beauty" },
];

const ProductsPage = () => {
  const [category, setCategory] = useState("All");

  const filteredProducts = productsData.filter((product) =>
    category === "All" ? true : product.categoryType === category
  );

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6">
          <SectionHeader badge="Categories" title="Products By Category" />
        </div>

        {/* Category Filter */}
        <div className="w-full sm:max-w-xs lg:max-w-sm mx-auto mb-8">
          <Select
            value={options.find((option) => option.value === category)}
            onChange={(selectedOption) => setCategory(selectedOption.value)}
            options={options}
            className="text-sm sm:text-base"
          />
        </div>

        {/* Products */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 mt-10 text-sm sm:text-base">
            No products found
          </p>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
=======
import SearchBar from "../Header/SearchBar";
import ProductCard from "./ProductCard";
import SectionHeader from "../SectionHeader";

const ProductsPage = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Section Header + Search */}
      <SectionHeader badge="Our Products" title="Explore Our Products" />
      <div className="w-full my-10">
        <SearchBar value={search} onChange={setSearch} />
      </div>
      {/* Products */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No products found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
    </div>
  );
};

export default ProductsPage;

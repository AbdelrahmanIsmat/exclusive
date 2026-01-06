import { useState } from "react";
import { productsData } from "../../productsData";
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
    </div>
  );
};

export default ProductsPage;

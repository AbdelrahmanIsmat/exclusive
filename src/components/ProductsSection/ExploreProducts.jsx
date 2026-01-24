import { productsData } from "../../productsData";
import Button from "../common/Button";
import ProductCard from "./ProductCard";
import SectionHeader from "../SectionHeader";
import ArrowsButton from "../common/ArrowsButton";
import { Link } from "react-router-dom";

const ExploreProducts = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col px-4">
      {/* Header */}
      <div className="flex justify-between items-end">
        <SectionHeader badge="Our Products" title="Explore Our Products" />
        <ArrowsButton />
      </div>
<<<<<<< HEAD
=======

>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
      {/* Products Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          mt-8
        "
      >
        {productsData
          .filter((product) => product.category === "Explore Our Products")
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      {/* View All */}
      <Link to="/ProductsPage" className="mx-auto mt-16">
        <Button>View All Products</Button>
      </Link>
    </section>
  );
};

export default ExploreProducts;

import { productsData } from "../../productsData";
import Button from "../common/Button";
import ProductCard from "./ProductCard";
import SectionHeader from "../SectionHeader";
import ArrowsButton from "../common/ArrowsButton";
import { Link } from "react-router-dom";

const ExploreProducts = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col">
      <div className="flex justify-between">
        <SectionHeader badge="Our Products" title="Explore Our Products" />
        <ArrowsButton />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {productsData
          .filter((product) => product.category === "Explore Our Products")
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <Link className="m-auto" to="/ProductsPage">
        <Button className={"m-auto mt-16"} children={"View All Products"} />
      </Link>
    </section>
  );
};
export default ExploreProducts;

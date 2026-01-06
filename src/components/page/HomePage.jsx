// import { useState } from "react";

import { productsData } from "../../productsData";
import Category from "../Category";
import Hero from "../Hero";
import ProductsSection from "../ProductsSection/ProductsSection";
import Services from "../Services";
import MainBanner from "../MainBanner";
import NewArrival from "../NewArrival";
import ExploreProducts from "../ProductsSection/ExploreProducts";

const HomePage = () => {
  return (
    <section className=" ">
      <Hero />
      <ProductsSection
        title="Flash Sales"
        badge="Today’s"
        products={productsData.filter(
          (product) => product.category === "Flash Sales"
        )}
        ButtonName="View All Products"
        showButton="true"
        ArrowsButton
      />
      <hr className="max-w-6xl  text-gray-400 mx-auto hidden sm:flex my-20" />
      <Category />
      <hr className="max-w-6xl text-gray-400 mx-auto hidden sm:flex my-20" />
      <ProductsSection
        title="Browse By Category"
        badge="This Month"
        products={productsData.filter(
          (product) => product.category === "Best Selling Products"
        )}
        ButtonName="View All "
        showButton="true"
        buttonPosition="header"
      />
      <MainBanner />
      <ExploreProducts />
      <NewArrival />
      <Services />
    </section>
  );
};
export default HomePage;

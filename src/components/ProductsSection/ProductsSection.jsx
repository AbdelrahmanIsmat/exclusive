// import { productsData } from "../../productsData";
import SectionHeader from "../SectionHeader";
import ProductsSlider from "./ProductsSlider";
import Button from "../common/Button";
import { Toaster } from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

const ProductsSection = ({
  title,
  badge,
  products,
  ButtonName,
  showButton,
  buttonPosition = "slider", // default
}) => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center flex-wrap mb-8">
        <SectionHeader badge={badge} title={title} />
        {/* {ArrowsButton && <ArrowsButton />} */}

        {showButton && buttonPosition === "header" && (
          <NavLink to="/ProductsPage">
            <Button children={ButtonName} />
          </NavLink>
        )}
      </div>
      <div className=" flex flex-col">
        <ProductsSlider products={products} />
        {showButton && buttonPosition === "slider" && (
          <NavLink to="/ProductsPage" className={"m-auto"}>
            <Button children={ButtonName} />
          </NavLink>
        )}
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        toastOptions={{
          style: {
            width: "250px",
          },
        }}
      />
    </section>
  );
};

export default ProductsSection;

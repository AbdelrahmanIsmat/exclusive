// import { productsData } from "../../productsData";
import SectionHeader from "../SectionHeader";
import ProductsSlider from "./ProductsSlider";
import Button from "../common/Button";
import { Toaster } from "react-hot-toast";
<<<<<<< HEAD
import { Link, NavLink } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4

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
<<<<<<< HEAD
          <Link to="/ProductsPage">
            <Button children={ButtonName} />
          </Link>
=======
          <Button children={ButtonName} />
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
        )}
      </div>
      <div className=" flex flex-col">
        <ProductsSlider products={products} />
        {showButton && buttonPosition === "slider" && (
<<<<<<< HEAD
          <NavLink to="/ProductsPage" className="m-auto mt-16">
            <Button children={ButtonName} />
          </NavLink>
=======
          <Button className={"m-auto mt-16"} children={ButtonName} />
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
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

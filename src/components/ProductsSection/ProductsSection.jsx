// import { productsData } from "../../productsData";
import SectionHeader from "../SectionHeader";
import ProductsSlider from "./ProductsSlider";
import Button from "../common/Button";
import { Toaster } from "react-hot-toast";

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
          <Button children={ButtonName} />
        )}
      </div>
      <div className=" flex flex-col">
        <ProductsSlider products={products} />
        {showButton && buttonPosition === "slider" && (
          <Button className={"m-auto mt-16"} children={ButtonName} />
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

import ProductCard from "./ProductCard";
const ProductsSlider = ({ products }) => {
  return (
    <div className="flex gap-6 pb-4 overflow-x-auto scroll-smooth">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsSlider;

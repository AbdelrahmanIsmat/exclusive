import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "../../Swiper/styles.css";
const ProductsSlider = ({ products }) => {
  return (
    <div className="flex gap-6 pb-4">
      <Swiper slidesPerView={4} className="mySwiper">
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;

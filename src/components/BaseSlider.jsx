import { Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BaseSlider = ({
  children,

  // layout
  slidesPerView = "auto",
  spaceBetween = 16,
  centeredSlides = false,

  // behavior
  loop = false,
  freeMode = false,
  speed = 500,

  // navigation
  navigation = false,
  pagination = false,

  // autoplay
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = true,

  // interaction
  draggable = true,
  keyboard = true,
  mousewheel = false,

  // responsive
  breakpoints = {},

  // styling
  className = "",
}) => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Autoplay,
        FreeMode,
        Keyboard,
        Mousewheel,
      ]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      loop={loop}
      freeMode={freeMode}
      speed={speed}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      autoplay={
        autoplay
          ? {
              delay: autoplayDelay,
              disableOnInteraction: false,
              pauseOnMouseEnter: pauseOnHover,
            }
          : false
      }
      allowTouchMove={draggable}
      keyboard={keyboard}
      mousewheel={mousewheel}
      breakpoints={breakpoints}
      className={`pb-4! ${className}`}
    >
      {children}
    </Swiper>
  );
};

export default BaseSlider;

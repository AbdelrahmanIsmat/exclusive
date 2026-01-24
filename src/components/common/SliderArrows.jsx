const SliderArrows = ({ onPrev, onNext }) => {
  // const swiperRef = useRef(null);

  // <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} />

  // <SliderArrows
  //   onPrev={() => swiperRef.current.slidePrev()}
  //   onNext={() => swiperRef.current.slideNext()}
  // />

  return (
    <div className="flex items-center gap-3">
      {/* Prev */}
      <button
        onClick={onPrev}
        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
      >
        ←
      </button>
      {/* Next */}
      <button
        onClick={onNext}
        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
      >
        →
      </button>
    </div>
  );
};

export default SliderArrows;

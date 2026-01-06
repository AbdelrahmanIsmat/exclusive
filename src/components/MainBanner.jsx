import JBL_BOOMBOX from "../assets/JBL_BOOMBOX.svg";

const MainBanner = () => {
  return (
    <section className="max-w-6xl mx-auto my-20">
      {/* Hero Box */}
      <div
        className="
          relative
          flex items-center
          bg-black w-full 
          max-h-86 
          rounded-lg
          px-6 lg:pl-12
          overflow-hidden    
          min-h-75      /* 📱 موبايل */
          lg:min-h-125   /* 💻 ديسكتوب */"
      >
        {/* Background Image (Mobile only) */}
        <div
          className="
          min-[375px]:block
          md:hidden
          absolute inset-0
          bg-no-repeat bg-right bg-contain
          opacity-30 flex 
          "
          style={{ backgroundImage: `url(${JBL_BOOMBOX})` }}
        />
        {/* Text */}
        <div className=" text-white py-13 z-10 h-full ">
          <p className=" font-Poppins text-[#00FF66]">Categories</p>
          <h2 className="text-2xl lg:text-5xl my-5 font-semibold">
            Enhance Your Music Experience
          </h2>
          <div className="flex my-10 gap-1 md:gap-4 font-Poppins">
            <span className="h-13 w-13 sm:w-16 sm:h-16 bg-white text-black px-3.5 py-2.5 rounded-full flex flex-col items-center">
              <strong className="font-semibold ">23</strong>
              <small className="text-[11px]">Hours</small>
            </span>

            <span className="h-13 w-13 sm:w-16 sm:h-16 bg-white text-black px-3.5 py-2.5 rounded-full flex flex-col items-center">
              <strong className="font-semibold ">05</strong>
              <small className="text-[11px]">Days</small>
            </span>

            <span className="h-13 w-13 sm:w-16 sm:h-16 bg-white text-black px-3.5 py-2.5 rounded-full flex flex-col items-center">
              <strong className="font-semibold ">59</strong>
              <small className="text-[11px]">Minutes</small>
            </span>

            <span className="h-13 w-13 sm:w-16 sm:h-16 bg-white text-black px-3.5 py-2.5 rounded-full flex flex-col items-center">
              <strong className="font-semibold ">36</strong>
              <small className="text-[11px]">Seconds</small>
            </span>
          </div>

          <button className="rounded-sm my-3 py-4 cursor-pointer text-white bg-[#00FF66] px-12 hover:bg-[#66ff99]">
            Shop Now
          </button>
        </div>
        {/* Image (Desktop only) */}
        <div className="hidden md:flex ml-auto items-center justify-center">
          <img
            className="max-h-96 cursor-pointer hover:animate-pulse"
            src={JBL_BOOMBOX}
            alt="hero_endframe"
          />
        </div>
      </div>
    </section>
  );
};
export default MainBanner;

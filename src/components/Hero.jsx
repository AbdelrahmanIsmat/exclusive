import IPhone from "../assets/IPhone.svg";
import appleIcon from "../assets/Apple_gray_logo 1.svg";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex lg:justify-between justify-center max-w-6xl mx-auto mt-10 mb-24 px-2 gap-4">
      {/* Sidebar (Desktop only) */}
      <div className="hidden lg:flex  mr-5">
        <ul className="flex flex-col gap-3 font-Poppins text-sm lg:text-base pr-6">
          <li>Women’s Fashion</li>
          <li>Men’s Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoors</li>
          <li>Baby & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
        <hr className="max-w-6xl rotate-90 text-gray-400 mx-auto hidden sm:flex my-20" />
      </div>
      {/* Hero Box */}
      <div className="relative flex items-center  bg-black w-full max-w-180  max-h-86  rounded-lg px-6  overflow-hidden     min-h-75      /* 📱 موبايل */ sm:min-h-75   /* 📱 كبير */ md:min-h-75   /* 📱 تابلت */ lg:min-h-80   /* 💻 ديسكتوب */">
        {/* Background Image (Mobile only) */}
        <div
          className="min-[375px]:block lg:hidden absolute inset-0 bg-no-repeat bg-center bg-contain opacity-30 flex "
          style={{ backgroundImage: `url(${IPhone})` }}
        />
        {/* Text */}
        <div className="relative z-10 text-white max-w-md ">
          <div className="flex items-center gap-4">
            <img src={appleIcon} alt="Apple Icon image" />
            <p>iPhone 14 Series</p>
          </div>
          <h2 className="text-3xl lg:text-5xl my-5 font-semibold">
            Up to 10% off Voucher
          </h2>
          <div className="flex gap-3 items-center cursor-pointer">
            <NavLink to="/ProductDetails/17" className="border-b">
              Shop Now
            </NavLink>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Image (Desktop only) */}
        <div className="hidden lg:flex ml-auto items-center justify-center">
          <img
            className="max-h-96 cursor-pointer hover:animate-pulse"
            src={IPhone}
            alt="hero_endframe"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

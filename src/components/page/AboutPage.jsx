import iconShop from "../../assets/AboutIcon/icon_shop.svg";
import iconSale from "../../assets/AboutIcon/Icon-Sale.svg";
import iconShoppingBag from "../../assets/AboutIcon/Icon-ShoppingBag.svg";
import iconMoneybag from "../../assets/AboutIcon/Icon-Moneybag.svg";
import TomCruise from "../../assets/AboutIcon/TomCruise.svg";
import EmmaWatson from "../../assets/AboutIcon/EmmaWatson.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import Linkedin from "../../assets/Linkedin.svg";

import Services from "../Services";

const statsData = [
  {
    id: 1,
    icon: iconShop,
    value: "10.5K",
    label: "Sellers active on our site",
  },
  {
    id: 2,
    icon: iconSale,
    value: "33K",
    label: "Monthly Product Sales",
  },
  {
    id: 3,
    icon: iconShoppingBag,
    value: "45.5K",
    label: "Customers active on our site",
  },
  {
    id: 4,
    icon: iconMoneybag,
    value: "25K",
    label: "Annual Gross Sales",
  },
];
const AboutPage = () => {
  return (
    <div className=" max-w-6xl mx-auto px-4">
      <section className="flex flex-row gap-12 items-center">
        {/* Text */}
        <div className="lg:max-w-131.25 relative">
          <h1 className="text-4xl md:text-[54px] font-Inter font-semibold mb-8">
            Our Story
          </h1>
          <p className="font-Poppins font-normal mb-6 text-gray-700 leading-relaxed">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>

          <p className="font-Poppins font-normal text-gray-700 leading-relaxed">
            Exclusive has more than 1 million products to offer and is growing
            very fast. It offers a diverse assortment of categories ranging from
            consumer goods to lifestyle products.
          </p>
        </div>
        {/* Image / Box */}
        <div className="hidden md:block w-190 h-150 bg-[#EB7EA8] rounded overflow-visible z-100"></div>
      </section>
      <section className="flex flex-wrap justify-center md:justify-between gap-6  my-10 md:my-40  font-Poppins">
        {statsData.map((service) => (
          <div
            key={service.id}
            className="
            group cursor-pointer
            flex flex-col items-center 
            w-63 h-60 p-6
            border border-gray-400 rounded-sm
            transition duration-300
            hover:bg-[#DB4444] hover:shadow hover:border-none
          "
          >
            {/* Icon wrapper */}
            <div
              className="
              bg-gray-300 rounded-full p-3 mb-4
              transition duration-300
            "
            >
              <img
                src={service.icon}
                alt={`${service.label} icon`}
                className="
                w-14 h-14 p-2 rounded-full
                bg-black
                transition duration-300
                    invert-0 group-hover:invert
              "
              />
            </div>

            {/* Number */}
            <h3
              className="
              text-[32px] mb-2 font-semibold
              transition duration-300
              group-hover:text-white
            "
            >
              {service.value}
            </h3>
            {/* Label */}
            <p
              className="
              text-[14px]
              transition duration-300
              group-hover:text-white
            "
            >
              {service.label}
            </p>
          </div>
        ))}
      </section>
      <section className="flex flex-wrap justify-center lg:justify-between gap-12 my-10 ">
        <div className="w-full sm:w-75 md:w-85">
          {/* Image box */}
          <div className="relative h-107.5 bg-[#F5F5F5] mb-6 overflow-hidden">
            <img
              src={TomCruise}
              alt="Tom Cruise"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-55 md:w-62.5"
            />
          </div>
          {/* Name */}
          <h2 className="font-Inter text-2xl md:text-3xl font-semibold mb-1 ">
            Tom Cruise
          </h2>
          {/* Role */}
          <p className="font-Poppins font-normal text-gray-600 mb-4 ">
            Founder & Chairman
          </p>
          {/* Social icons */}
          <div className="flex gap-4 items-center ">
            <img
              src={Twitter}
              alt="Twitter icon"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src={Instagram}
              alt="Instagram icon"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src={Linkedin}
              alt="LinkedIn icon"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full sm:w-75 md:w-85">
          {/* Image box */}
          <div className="relative h-107.5 bg-[#F5F5F5] mb-6 overflow-hidden">
            <img
              src={EmmaWatson}
              alt="Emma Watson "
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-55 md:w-62.5"
            />
          </div>
          {/* Name */}
          <h2 className="font-Inter text-2xl md:text-3xl font-semibold mb-1 ">
            Emma Watson
          </h2>
          {/* Role */}
          <p className="font-Poppins font-normal text-gray-600 mb-4 ">
            Managing Director
          </p>
          {/* Social icons */}
          <div className="flex gap-4 items-center ">
            <img
              src={Twitter}
              alt="Twitter"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src={Instagram}
              alt="Instagram"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src={Linkedin}
              alt="LinkedIn"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full sm:w-75 md:w-85">
          {/* Image box */}
          <div className="relative h-107.5 bg-[#F5F5F5] mb-6 overflow-hidden">
            <img
              src={EmmaWatson}
              alt="Tom Cruise"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-55 md:w-62.5"
            />
          </div>
          {/* Name */}
          <h2 className="font-Inter text-2xl md:text-3xl font-semibold mb-1 ">
            Will Smith
          </h2>
          {/* Role */}
          <p className="font-Poppins font-normal text-gray-600 mb-4 ">
            Product Designer
          </p>
          {/* Social icons */}
          <div className="flex gap-4 items-center ">
            <img
              src={Twitter}
              alt="Twitter"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src={Instagram}
              alt="Instagram"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src={Linkedin}
              alt="LinkedIn"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      </section>
      <Services className={"my-10"} />
    </div>
  );
};

export default AboutPage;

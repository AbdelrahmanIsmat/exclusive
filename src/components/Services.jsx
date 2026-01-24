import Delivery from "../assets/icon-delivery.svg";
import CustomerService from "../assets/Icon-Customer service.svg";
import Secure from "../assets/Icon-secure.svg";
<<<<<<< HEAD
=======

>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
const servicesData = [
  {
    id: 1,
    icon: Delivery,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: CustomerService,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: Secure,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto my-40 px-4 font-Poppins">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center p-6 rounded-2xl text-center "
          >
            <div className=" bg-gray-300 rounded-full p-3 mb-4">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="bg-black rounded-full  p-2 w-14 h-14  animate-pulse"
              />
            </div>
            <h3 className=" text-xl mb-2 font-semibold">{service.title}</h3>
            <p className="font-normal text-[14px] ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

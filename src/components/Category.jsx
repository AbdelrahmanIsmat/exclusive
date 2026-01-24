import CategoryPhone from "../assets/Category/Category-Phone.svg";
import CategoryComputer from "../assets/Category/Category-Computer.svg";
import CategoryCamera from "../assets/Category/Category-Camera.svg";
import CategoryGaming from "../assets/Category/Category-Gaming.svg";
import CategorySmartWatch from "../assets/Category/Category-SmartWatch.svg";
import CategoryHeadphone from "../assets/Category/Category-Headphone.svg";
import SectionHeader from "./SectionHeader";
import ArrowsButton from "./common/ArrowsButton";
const categoriesData = [
  { id: 1, icon: CategoryPhone, alt: "Category Phone icon", name: "Phone" },
  {
    id: 2,
    icon: CategoryComputer,
    alt: "Category Computer icon",
    name: "Computer",
  },
  {
    id: 3,
    icon: CategorySmartWatch,
    alt: "Category SmartWatch icon",
    name: "Smart Watch",
  },
  { id: 4, icon: CategoryCamera, alt: "Category Camera icon", name: "Camera" },
  {
    id: 5,
    icon: CategoryHeadphone,
    alt: "Category Headphone icon",
    name: "Headphone",
  },
  { id: 6, icon: CategoryGaming, alt: "Category Gaming icon", name: "Gaming" },
];
const Category = () => {
<<<<<<< HEAD
  // const [categories, setCategories] = useState(categoriesData);

=======
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
  return (
    <div className="max-w-6xl mx-auto m-10">
      <div className="flex justify-between mb-8">
        <SectionHeader badge="Categories" title="Browse By Category" />
        <ArrowsButton />
      </div>
      <div className="mb-16 overflow-x-auto scroll-smooth">
        <div className="flex gap-6 ">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer rounded-sm hover:bg-[#DB4444] hover:shadow-md
                transition duration-300 sm:min-w-40 min-w-35"
            >
              <img
                src={category.icon}
                alt={category.alt}
                className=" transition duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

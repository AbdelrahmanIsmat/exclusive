import CategoryRectangle from "../assets/CategoryRectangle.svg";

const SectionHeader = ({ badge, title }) => {
  return (
    <div className="max-w-6xl">
      <div className="flex items-end justify-between  max-w-xl">
        {/* Left */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <img src={CategoryRectangle} alt="section icon" />
            <p className="font-Poppins  font-semibold text-[#DB4444]">
              {badge}
            </p>
          </div>
          {title && (
            <h3 className="my-5 text-2xl md:text-[36px] font-Inter font-semibold">
              {title}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;

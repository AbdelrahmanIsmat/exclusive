import Perfume from "../assets/Perfume.svg";
import PlayStation from "../assets/ps5-slim.svg";
import Speakers from "../assets/Speakers.svg";

const NewArrival = () => {
  return (
    <section
      className="
    max-w-6xl mx-auto my-20
    grid gap-7
    h-auto md:h-150
    grid-cols-1 md:grid-cols-4
    md:grid-rows-2
  "
    >
      {/* PlayStation */}
      <div className="relative rounded-sm md:col-span-2 md:row-span-2 bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{ backgroundImage: `url(${PlayStation})` }}
        />
        <div className="relative flex flex-col justify-end h-full p-7 max-w-xs">
          <h3 className="text-xl font-semibold">PlayStation 5</h3>
          <p className="text-sm my-2">
            Black and White version of the PS5 coming out on sale.
          </p>
          <button className="underline w-fit">Shop Now</button>
        </div>
      </div>

      {/* Women */}
      <div className="relative md:col-span-2 bg-black text-white overflow-hidden">
        <div className="relative flex flex-col justify-end h-full p-7 max-w-xs">
          <h3 className="text-lg font-semibold">Women’s Collections</h3>
          <p className="text-sm my-2">
            Featured woman collections that give you another vibe.
          </p>
          <button className="flex items-start underline">Shop Now</button>
        </div>
      </div>

      {/* Speakers */}
      <div className="relative bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{ backgroundImage: `url(${Speakers})` }}
        />
        <div className="relative flex flex-col justify-end h-full p-7">
          <h3 className="text-lg font-semibold">Speakers</h3>
          <p className="text-sm my-2">Amazon wireless speakers</p>
          <button className="flex items-start underline">Shop Now</button>
        </div>
      </div>

      {/* Perfume */}
      <div className="relative bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{ backgroundImage: `url(${Perfume})` }}
        />
        <div className="relative flex flex-col justify-end h-full p-7">
          <h3 className="text-lg font-semibold">Perfume</h3>
          <p className="text-sm my-2">GUCCI INTENSE OUD EDP</p>
          <button className="flex items-start underline">Shop Now</button>
        </div>
      </div>
    </section>
  );
};
export default NewArrival;

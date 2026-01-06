// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

const TopHeader = () => {
  return (
    <div className=" flex items-center bg-black w-full h-12 font-Poppins text-white">
      <div className="max-w-6xl mx-auto text-center flex items-center justify-between w-full px-4">
        <p className="text-[10px] md:text-sm font-normal">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="ml-4 border-b text-sm font-semibold">Shop Now</span>
        </p>
        {/* <Select>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}
      </div>
    </div>
  );
};
export default TopHeader;

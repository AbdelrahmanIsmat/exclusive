import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import HeaderActions from "../Header/HeaderActions";
import ProfileMenu from "./ProfileMenu";
import TopHeader from "./TopHeader";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" bg-white mb-6 md:mb-12 border-b border-gray-400">
      <TopHeader />
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(!open)}
              className="min-[900px]:hidden text-2xl"
            >
              ☰
            </button>
            <Logo />
          </div>
          {/* Desktop Nav */}
          <div className="hidden min-[900px]:block">
            <Nav />
          </div>
          {/* Right */}
          <div className="flex items-center gap-4">
            {/* Search يظهر من 900px */}
            <div className="hidden min-[900px]:block">
              <SearchBar />
            </div>
            {/* Actions تختفي من الهيدر لما ≤ 300px */}
            <HeaderActions />
            <div className="hidden min-[900px]:block">
              <ProfileMenu />
            </div>
          </div>
        </div>
        {/* Search */}
        <div className="min-[900px]:hidden mb-4 flex justify-center">
          <SearchBar />
        </div>
        {/* Mobile Menu */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}

        <aside
          className={`
          fixed lg:static top-0 left-0 h-full lg:h-auto w-64 bg-white z-50
          shadow-lg lg:shadow-none p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
        >
          {/* زر إغلاق */}
          <button
            onClick={() => setOpen(false)}
            className="w-full text-right lg:hidden"
          >
            ❌
          </button>
          {/* <Logo /> */}
          <div className="flex flex-col gap-4 items-start max-w-40 min-[900px]:hidden">
            <div className="flex justify-center gap-10 my-2.5 max-[300px]:flex">
              {/* <HeaderActions /> */}
              <ProfileMenu />
            </div>
            {/* Nav */}
            <div className="flex justify-center">
              <Nav mobile />
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;

// {open && (
//   <div className="flex flex-col items-start max-w-40 min-[900px]:hidden mt-4 pt-4">
//     {/* Actions تظهر فقط ≤ 300px داخل المينيو */}
//     <div className="min-[900px]:hidden">
//       <ProfileMenu />
//     </div>
//     <div className="flex justify-center gap-10 my-2.5 max-[300px]:flex">
//       <HeaderActions />
//     </div>
//     {/* Nav */}
//     <div className="flex justify-center">
//       <Nav mobile />
//     </div>
//   </div>
// )}

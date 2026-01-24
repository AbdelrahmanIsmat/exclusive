import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import Logo from "./Logo";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import HeaderActions from "../Header/HeaderActions";
import ProfileMenu from "./ProfileMenu";
import TopHeader from "./TopHeader";

import { IoMdCall, IoMdHome, IoMdMan } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TbAlertCircle } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BsCart3, BsHeart } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="bg-white mb-6 md:mb-12 border-b border-gray-400">
      <TopHeader />

      <div className="max-w-6xl mx-auto px-4">
        {/* Main Header */}
        <div className="flex h-20 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="min-[900px]:hidden text-2xl"
            >
              <HiMenuAlt3 />
            </button>
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden min-[900px]:block">
            <Nav />
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="hidden min-[900px]:block">
              <SearchBar />
            </div>
            <div className="hidden min-[900px]:block">
              <HeaderActions />
            </div>
            <ProfileMenu />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="min-[900px]:hidden mb-4 flex justify-center">
          <SearchBar />
        </div>

        {/* Overlay */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}

        {/* Mobile Menu */}
        <aside
          className={`
            fixed top-0 left-0 h-full w-64 bg-white z-50
            shadow-lg min-[900px]:hidden
            transition-all duration-300 ease-in-out
            ${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }
          `}
        >
          {/* Header */}
          <div className="bg-black text-white px-4 h-20 flex items-center">
            <Logo />
            <button onClick={() => setOpen(false)} className="text-2xl ml-auto">
              <IoCloseCircleOutline />
            </button>
          </div>

          {/* Navigation */}
          <p className="uppercase bg-gray-50 px-4 py-2 text-lg font-semibold">
            Navigation
          </p>
          <nav>
            <ul className="font-Poppins flex flex-col">
              {/* Home */}
              <NavLink
                to="/HomePage"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-2 p-4 transition
                  ${isActive ? "bg-red-100" : "hover:bg-red-100"}`
                }
              >
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#DB4444] group-hover:text-white transition">
                  <IoMdHome />
                </div>
                <span className="text-black">Home</span>
              </NavLink>

              {/* Contact */}
              <NavLink
                to="/ContactPage"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-2 p-4 transition
                  ${isActive ? "bg-red-100" : "hover:bg-red-100"}`
                }
              >
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#DB4444] group-hover:text-white transition">
                  <IoMdCall />
                </div>
                <span className="text-black">Contact</span>
              </NavLink>

              {/* About */}
              <NavLink
                to="/AboutPage"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-2 p-4 transition
                  ${isActive ? "bg-red-100" : "hover:bg-red-100"}`
                }
              >
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#DB4444] group-hover:text-white transition">
                  <TbAlertCircle />
                </div>
                <span className="text-black">About</span>
              </NavLink>

              {/* Sign Up */}
              <NavLink
                to="/SignUpPage"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-2 p-4 transition
                  ${isActive ? "bg-red-100" : "hover:bg-red-100"}`
                }
              >
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#DB4444] group-hover:text-white transition">
                  <CgProfile />
                </div>
                <span className="text-black">Sign Up</span>
              </NavLink>
            </ul>
          </nav>

          {/* Bottom Icons */}
          <div className="flex gap-8 m-4">
            <Link
              to="/CartPage"
              onClick={() => setOpen(false)}
              className="p-2 bg-gray-100 rounded-lg hover:bg-[#DB4444] hover:text-white transition"
            >
              <BsCart3 />
            </Link>

            <Link
              to="/WishlistPage"
              onClick={() => setOpen(false)}
              className="p-2 bg-gray-100 rounded-lg hover:bg-[#DB4444] hover:text-white transition"
            >
              <BsHeart />
            </Link>
          </div>

          <nav>
            <ul className="font-Poppins flex flex-col">
              <p className="uppercase bg-gray-50 px-4 py-2 text-lg font-semibold">
                Categories
              </p>
              <NavLink
                to="/ProductsPage"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 p-4 transition hover:bg-red-100"
              >
                <span className="text-black">Women’s Fashion</span>
              </NavLink>
              <NavLink
                to="/ProductsPage"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 p-4 transition hover:bg-red-100"
              >
                <span className="text-black">Men’s Fashion</span>
              </NavLink>
              <NavLink
                to="/ProductsPage"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 p-4 transition hover:bg-red-100"
              >
                <span className="text-black">Electronics</span>
              </NavLink>
              <NavLink
                to="/ProductsPage"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 p-4 transition hover:bg-red-100"
              >
                <span className="text-black">Home & Lifestyle</span>
              </NavLink>
              <NavLink
                to="/ProductsPage"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 p-4 transition hover:bg-red-100"
              >
                <span className="text-black">Medicine</span>
              </NavLink>
              <NavLink
                to="/ProductsPage"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 p-4 transition hover:bg-red-100"
              >
                <span className="text-black">Sports & Outdoors</span>
              </NavLink>
              <NavLink
                to="/ProductsPage"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 p-4 transition hover:bg-red-100"
              >
                <span className="text-black">Baby & Toys</span>
              </NavLink>
              <NavLink
                to="/ProductsPage"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 p-4 transition hover:bg-red-100"
              >
                <span className="text-black">Groceries & Pets</span>
              </NavLink>
              <NavLink
                to="/ProductsPage"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 p-4 transition hover:bg-red-100"
              >
                <span className="text-black">Health & Beauty</span>
              </NavLink>
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Header;

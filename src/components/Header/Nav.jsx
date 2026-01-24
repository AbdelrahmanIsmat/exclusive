<<<<<<< HEAD
import { NavLink } from "react-router-dom";

const Nav = ({ mobile }) => {
  const baseClass = "cursor-pointer hover:text-[#DB4444]";
  const activeClass = "underline underline-offset-8 ";

=======
import { Link } from "react-router-dom";

const Nav = ({ mobile }) => {
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
  return (
    <nav>
      <ul
        className={`font-Poppins ${
          mobile ? "flex flex-col gap-4" : "flex gap-12"
        }`}
      >
<<<<<<< HEAD
        <NavLink
          to="/HomePage"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/ContactPage"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/AboutPage"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/SignUpPage"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Sign Up
        </NavLink>
=======
        <Link to="/HomePage" className="cursor-pointer hover:text-[#DB4444]">
          Home
        </Link>
        <Link to="/ContactPage" className="cursor-pointer hover:text-[#DB4444]">
          Contact
        </Link>
        <Link to="/AboutPage" className="cursor-pointer hover:text-[#DB4444]">
          About
        </Link>
        <Link to="/SignUpPage" className="cursor-pointer hover:text-[#DB4444]">
          Sign Up
        </Link>
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
      </ul>
    </nav>
  );
};

export default Nav;

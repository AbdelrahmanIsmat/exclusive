import { NavLink } from "react-router-dom";

const Nav = ({ mobile }) => {
  const baseClass = "cursor-pointer hover:text-[#DB4444]";
  const activeClass = "underline underline-offset-8 ";

  return (
    <nav>
      <ul
        className={`font-Poppins ${
          mobile ? "flex flex-col gap-4" : "flex gap-12"
        }`}
      >
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
      </ul>
    </nav>
  );
};

export default Nav;

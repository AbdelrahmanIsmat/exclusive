import { Link } from "react-router-dom";

const Nav = ({ mobile }) => {
  return (
    <nav>
      <ul
        className={`font-Poppins ${
          mobile ? "flex flex-col gap-4" : "flex gap-12"
        }`}
      >
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
      </ul>
    </nav>
  );
};

export default Nav;

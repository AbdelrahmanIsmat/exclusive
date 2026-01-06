import { NavLink } from "react-router-dom";

const AccountSidebar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#DB4444] font-semibold"
      : "text-gray-600 hover:text-black";
  return (
    <div className="">
      <h2 className="font-semibold ">Manage My Account</h2>
      <nav className="flex flex-col gap-2 pl-3 my-3">
        <NavLink to="myProfile" className={linkClass}>
          My Profile
        </NavLink>
        <NavLink to="paymentOptions" className={linkClass}>
          Payment Options
        </NavLink>
      </nav>
      <nav className="flex flex-col gap-2 pl-3">
        <NavLink to="MyOrders" className={linkClass}>
          My Orders
        </NavLink>
      </nav>
      <NavLink to="/WishlistPage" className={linkClass}>
        <h2 className="font-semibold mt-6 mb-3">Wishlist</h2>
      </NavLink>
    </div>
  );
};

export default AccountSidebar;

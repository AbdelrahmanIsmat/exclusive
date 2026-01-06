import { useState } from "react";
import User from "../../assets/user.svg";
import AccountUser from "../../assets/Account/AccountUser.svg";
import mallbag from "../../assets/Account/icon-mallbag.svg";
import cancel from "../../assets/Account/icon-cancel.svg";
import Reviews from "../../assets/Account/Icon-Reviews.svg";
import logout from "../../assets/Account/Icon-logout.svg";

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";

const ProfileMenu = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (loading) return null;

  const handleLogout = async () => {
    alert("You have been logged out successfully.");
    await supabase.auth.signOut();
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* User Icon */}
      {user ? (
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#DB4444] cursor-pointer rounded-full w-8 h-8 flex items-center justify-center hover:scale-110 transition"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          >
            <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" />
            <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" />
          </svg>
        </button>
      ) : (
        <button onClick={() => navigate("/LoginPage")}>
          <img src={User} alt="login" className="w-6 h-6 hover:scale-110" />
        </button>
      )}

      {/* Dropdown */}
      {open && user && (
        <div className="absolute  hidden min-[900px]:block -right-2 mt-3 w-56 rounded bg-linear-to-br from-[#8B6B92] to-[#311639] text-white shadow-lg p-4 z-50">
          <ul className="flex flex-col gap-4 text-sm">
            <li
              onClick={() => navigate("/AccountLayout")}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80"
            >
              <img src={AccountUser} alt="Account User icon" />
              Manage My Account
            </li>

            <li
              onClick={() => navigate("MyOrders")}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80"
            >
              <img src={mallbag} alt="mallbag icon" />
              My Order
            </li>

            <li className="flex items-center gap-3 cursor-pointer hover:opacity-80">
              <img src={cancel} alt="cancel icon" />
              My Cancellations
            </li>

            <li className="flex items-center gap-3 cursor-pointer hover:opacity-80">
              <img src={Reviews} alt="Reviews icon" />
              My Reviews
            </li>
            <li
              onClick={handleLogout}
              className="flex items-center gap-3 cursor-pointer hover:text-red-300"
            >
              <img src={logout} alt="logout icon" />
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;

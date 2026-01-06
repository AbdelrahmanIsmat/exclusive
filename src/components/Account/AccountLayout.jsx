import { Outlet } from "react-router-dom";
import AccountSidebar from "./AccountSidebar";

const AccountLayout = () => {
  return (
    <div className="max-w-6xl mx-auto font-Poppins py-8 px-4">
      <div className="flex flex-col sm:flex-row gap-6 ">
        {/* Sidebar */}
        <AccountSidebar />
        {/* Content */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;

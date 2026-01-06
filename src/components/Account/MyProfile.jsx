import Button from "../common/Button";

const input =
  "w-full py-3 px-4 bg-gray-100 text-sm rounded outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-70";

const MyProfile = () => {
  return (
    <div className="max-w-217.5 mx-auto font-Poppins ">
      <div className="bg-white rounded shadow-md py-8 px-4 sm:px-8 md:px-16">
        <h2 className="text-xl text-[#DB4444] mb-6">Edit Your Profile</h2>
        {/* Profile Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="text-sm">First Name</label>
            <input type="text" placeholder="John" disabled className={input} />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <input type="text" placeholder="Doe" disabled className={input} />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="john@email.com"
              disabled
              className={input}
            />
          </div>
          <div>
            <label className="text-sm">Address</label>
            <input
              type="text"
              placeholder="Cairo, Egypt"
              disabled
              className={input}
            />
          </div>
        </div>
        {/* Password */}
        <div>
          <label className="text-sm font-medium">Password Changes</label>
          <div className="flex flex-col gap-4 mt-3">
            <input
              type="password"
              placeholder="Current Password"
              className={input}
            />
            <input
              type="password"
              placeholder="New Password"
              className={input}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className={input}
            />
          </div>
        </div>
        <div className="flex justify-end my-10">
          <Button variant={"secondary"} className="mr-4">
            Cancel
          </Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

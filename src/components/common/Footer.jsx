import Qrcode from "../../assets/Qrcode.svg";
import Appstore from "../../assets/appstore.svg";
import AppStoreAndroid from "../../assets/app-store-android-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-7">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-inter">Exclusive</h2>
            <p className="text-xl">Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white rounded px-4 py-2 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email subscription"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                aria-label="Submit email"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Support</h3>
            <address className="not-italic space-y-2 text-sm">
              <p>111 Bijoy sarani, Dhaka,</p>
              <p>DH 1515, Bangladesh.</p>
              <p>
                <a
                  href="mailto:exclusive@gmail.com"
                  className="hover:underline"
                >
                  exclusive@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+8801588889999" className="hover:underline">
                  +88015-88888-9999
                </a>
              </p>
            </address>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Account</h3>
            <nav>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Login / Register
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shop
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Link</h3>
            <nav>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Download App</h3>
            <p className="text-xs text-gray-400">
              Save $3 with App New User Only
            </p>
            {/* QR Code and App Store Buttons */}
            <div className="flex gap-4 items-center">
              {/* QR Code Placeholder */}
              <div className="w-20 h-20  rounded flex items-center justify-center text-black text-xs">
                <img src={Qrcode} alt="Qrcode icon" />
              </div>
              {/* App Store Buttons */}
              <div className="space-y-2">
                <a href="#" className="block">
                  <div className=" border-white rounded px-3 py-1 text-xs ">
                    <img src={AppStoreAndroid} alt=" App store android icon" />
                  </div>
                </a>
                <a href="#" className="block">
                  <div className=" border-white rounded px-3 py-1 text-xs ">
                    <img src={Appstore} alt="App store icon" />
                  </div>
                </a>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex justify-start gap-6 py-6 ">
              <a
                href="#"
                className="hover:text-gray-400 transition"
                aria-label="Facebook"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 10h4.5l-.5 2h-4v9h-2v-9H7v-2h4V8.128c0-1.783.186-2.43.534-3.082A3.635 3.635 0 0113.046 3.534C13.698 3.186 14.345 3 16.128 3c.522 0 .98.05 1.372.15V5h-1.372c-1.324 0-1.727.078-2.138.298A1.765 1.765 0 0013 5.99c-.22.411-.298.814-.298 2.138V10z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition"
                aria-label="Twitter"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition"
                aria-label="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Exclusive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

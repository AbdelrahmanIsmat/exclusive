import Button from "../common/Button";
import paymentIcon from "../../assets/paymentMethod.svg";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
// import { supabase } from "../../supabase";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const inputClass =
  "w-full py-3 px-4 bg-gray-100 text-sm rounded outline-none focus:ring-2 focus:ring-red-500";

const CheckOutPage = () => {
  const { tatalAmount, cartProducts, freeShipping, tatalPrice } = useCart();
  const { user, loading } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState("");

  if (loading) return null;

  const toastSuccess = () =>
    toast.success(
      <div className="flex flex-col items-center gap-3 ">
        {
          <Link
            to="/LoginPage"
            className="text-[13px] rounded-full bg-[#DB4444] text-white px-10 py-3  "
          >
            LoginPage
          </Link>
        }
      </div>,
      { duration: 3000 }
    );

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!user) {
      toastSuccess();
      return;
    }
    if (paymentMethod === "bank") {
      toast("You will be redirected to bank payment");
      setTimeout(() => {
        <Navigator to="/LoginPage" />;
      }, 1000);
    } else {
      toast.success("Order placed successfully");
    }
  };

  return (
    <form className=" max-w-6xl mx-auto px-5 my-20">
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        toastOptions={{
          style: {
            width: "250px",
          },
        }}
      />
      <div className="flex flex-col justify-between lg:flex-row gap-16">
        {/*  Billing Details  */}
        <div className="flex flex-col justify-center gap-5  ">
          <h2 className="font-Inter text-2xl md:text-4xl">Billing Details</h2>
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm text-gray-400 mb-1"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input id="firstName" type="text" required className={inputClass} />
          </div>
          {/* Company */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm text-gray-400 mb-1"
            >
              Company Name
            </label>
            <input id="companyName" type="text" className={inputClass} />
          </div>
          {/* Address */}
          <div>
            <label
              htmlFor="streetAddress"
              className="block text-sm text-gray-400 mb-1"
            >
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              id="streetAddress"
              type="text"
              required
              className={inputClass}
            />
          </div>
          {/* Apartment */}
          <div>
            <label
              htmlFor="apartment"
              className="block text-sm text-gray-400 mb-1"
            >
              Apartment, floor, etc. (optional)
            </label>
            <input id="apartment" type="text" className={inputClass} />
          </div>
          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm text-gray-400 mb-1">
              Town / City <span className="text-red-500">*</span>
            </label>
            <input id="city" type="text" required className={inputClass} />
          </div>
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input id="phone" type="tel" required className={inputClass} />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input id="email" type="email" required className={inputClass} />
          </div>
          {/* Save info */}
          <label className="flex items-center gap-2 text-sm cursor-pointer mt-2">
            <input type="checkbox" className="accent-red-500 w-4 h-4" />
            Save this information for faster check-out next time
          </label>
        </div>
        {/*Order Summary*/}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white  p-6 space-y-4">
            <div className="flex flex-col justify-between w-full mb-10">
              {cartProducts.map((item) => (
                <div
                  className="flex  items-center justify-between gap-4 my-2 "
                  key={item.id}
                >
                  <div className="flex justify-between items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                    <p>{item.title}</p>
                  </div>

                  <p>${item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p>${tatalAmount}</p>
            </div>
            <div className="flex justify-between">
              <h3 className="text-gray-600">Shipping</h3>
              <p>${freeShipping === 0 ? "Free" : freeShipping}</p>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>${tatalPrice}</p>
            </div>

            {/* Payment */}
            <div className="space-y-3 mt-4">
              <label className="flex items-center gap-3 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                  className="accent-black w-4 h-4"
                />
                <span>Bank</span>
                <img
                  className="hidden sm:block ml-auto max-w-30"
                  src={paymentIcon}
                  alt="Payment methods"
                />
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                  className="accent-black w-4 h-4"
                />
                Cash on delivery
              </label>
            </div>
            {paymentMethod === "bank" && (
              <div className="mt-4 p-4 border rounded bg-gray-50 space-y-3">
                <p className="font-semibold text-sm">Bank Transfer Details</p>
                <input
                  type="text"
                  placeholder="Bank Name"
                  required
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder="Account Number"
                  required
                  className={inputClass}
                />
              </div>
            )}

            {/* Coupon */}
            <div className="flex flex-col  sm:flex-row gap-3 mt-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="h-10 sm:h-14 border rounded px-4 outline-none focus:border-black"
              />
              <Button type="button">Apply Coupon</Button>
            </div>
            <div className="flex justify-between md:justify-between mt-15">
              <Link to="/CartPage">
                <Button type="button">Back to Cart</Button>
              </Link>

              <Button
                type="submit"
                onClick={handleCheckout}
                disabled={!paymentMethod}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckOutPage;

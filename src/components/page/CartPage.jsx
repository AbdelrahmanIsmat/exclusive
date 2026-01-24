import { Link } from "react-router-dom";
import Button from "../common/Button";
import Gamepad from "../../assets/items/Gamepad.svg";
import { useState } from "react";
import { useCart } from "../context/CartContext";
<<<<<<< HEAD
// import { productsData } from "../../productsData";

const CartPage = () => {
  const {
    freeShipping,
    tatalPrice,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    tatalAmount,
    cartProducts,
  } = useCart();

  const [animate, setAnimate] = useState({}); // Animation لكل منتج

=======
import { productsData } from "../../productsData";

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const [animate, setAnimate] = useState({}); // Animation لكل منتج

  // ربط IDs بالمنتجات الكاملة
  const cartProducts = cartItems.map((item) => {
    const product = productsData.find((p) => p.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  // حساب Subtotal
  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
  // Animation
  const resetAnimation = (id) => {
    setTimeout(() => {
      setAnimate((prev) => ({ ...prev, [id]: "" }));
    }, 150);
  };
<<<<<<< HEAD
=======

>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
  const handleIncrease = (id) => {
    setAnimate((prev) => ({ ...prev, [id]: "up" }));
    increaseQuantity(id);
    resetAnimation(id);
  };
<<<<<<< HEAD
=======

>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
  const handleDecrease = (id) => {
    const product = cartItems.find((item) => item.id === id);
    if (!product) return;

    if (product.quantity <= 1) {
      const confirmDelete = window.confirm(
        `Do you want to remove "${product.name}" from your cart?`
      );
      if (confirmDelete) {
        removeFromCart(id); // حذف المنتج من الكارت
      }
      return; // نوقف الدالة بعد السؤال
    }

    setAnimate((prev) => ({ ...prev, [id]: "down" }));
    decreaseQuantity(id);
    resetAnimation(id);
  };

  return (
    <section className="max-w-6xl mx-auto px-2.5 mb-20 font-Poppins">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center text-[9px] md:text-[16px] shadow rounded-b-sm px-1 sm:px-10 h-18 font-normal">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {cartProducts.map((product) => (
          <div
            key={product.id}
            className="flex text-[9px] md:text-[16px] justify-between items-center shadow rounded-b-sm px-1 sm:px-10 font-normal"
          >
            {/* الصورة */}
            <img
              className="w-14 h-14"
              src={product.image || Gamepad}
              alt={product.name}
            />

            {/* السعر الفردي */}
            <p>${product.price}</p>

            {/* الكمية */}
            <div className="flex items-center border rounded-md overflow-hidden w-fit">
              {/* الرقم */}
              <span
                className={`px-4 py-2 font-semibold min-w-10 text-center transition-all duration-150 ${
                  animate[product.id] === "up"
                    ? "scale-110 text-[#DB4444]"
                    : animate[product.id] === "down"
                    ? "scale-90 text-gray-600"
                    : ""
                }`}
              >
                {String(product.quantity).padStart(2, "0")}
              </span>

              {/* أزرار الزيادة والنقصان */}
              <div className="flex flex-col">
                <button
                  onClick={() => handleIncrease(product.id)}
                  className="px-3 cursor-pointer -rotate-90 hover:bg-gray-100 transition"
                >
                  &gt;
                </button>

                <button
                  onClick={() => handleDecrease(product.id)}
                  className="px-3 cursor-pointer rotate-90 hover:bg-gray-100 transition"
                >
                  &gt;
                </button>
              </div>
            </div>

            {/* Subtotal لكل منتج */}
            <p>${product.price * product.quantity}</p>
          </div>
        ))}
      </div>

      {/* أزرار إضافية */}
      <div className="flex justify-between flex-wrap mt-6">
        <Button variant="secondary" children="Return To Shop" />
        <Button variant="secondary" children="Update Cart" />
      </div>

      {/* Cart Summary */}
      <div className="flex flex-wrap justify-center lg:justify-between mt-20">
<<<<<<< HEAD
        <div className="flex flex-col justify-center sm:items-start sm:flex-row gap-3 my-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="h-10 sm:h-12 border rounded px-4 outline-none focus:border-black"
=======
        <div className="flex flex-col items-start sm:flex-row gap-3 my-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="h-12 border rounded px-4 outline-none focus:border-black"
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
          />
          <Button>Apply Coupon</Button>
        </div>

        <div className="border-[1.5px] w-117.5 py-8 px-4 font-normal">
          <p className="text-[20px] font-medium mb-6">Cart Total</p>

          <div className="flex justify-between">
            <p>Subtotal:</p>
<<<<<<< HEAD
            <p>${tatalAmount}</p>
=======
            <p>${subtotal}</p>
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
          </div>
          <hr className="my-4 text-gray-500" />

          <div className="flex justify-between">
            <p>Shipping:</p>
<<<<<<< HEAD
            <p>${freeShipping === 0 ? "Free" : freeShipping}</p>
=======
            <p>Free</p>
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
          </div>
          <hr className="my-4 text-gray-500" />

          <div className="flex justify-between">
            <p>Total:</p>
<<<<<<< HEAD
            <p>${tatalPrice}</p>
          </div>

          <div className="mt-6 flex justify-center">
            {tatalPrice === 50 ? null : (
              <Link to="/CheckOutPage">
                <Button children="Proceed to checkout" />
              </Link>
            )}
=======
            <p>${subtotal}</p>
          </div>

          <div className="mt-6 flex justify-center">
            <Link to="/CheckOutPage">
              <Button children="Proceed to checkout" />
            </Link>
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;

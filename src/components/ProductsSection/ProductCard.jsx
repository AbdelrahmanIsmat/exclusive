import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesProvider";
import { useCart } from "../context/CartContext";
import toast, { Toaster } from "react-hot-toast";
const ProductCard = ({ product, fromWishlist = false }) => {
  const { addToFavorites, isFavorite, removeFromFavorites } = useFavorites();
  const { toggleCart, addOneToCart, isInCart } = useCart();
  // const toastError = () => {
  //   toast.error(
  //     <div className="flex flex-col items-center gap-3 ">
  //       {<img className="h-15" src={product.image} alt={product.title} />}
  //       {!isInCart(product.id) ? "Removed from Cart" : "Added to Cart"}
  //       {
  //         <Link
  //           to="/CartPage"
  //           className="text-[13px] rounded-full bg-[#DB4444] text-white px-10 py-3  "
  //         >
  //           Go to Cart
  //         </Link>
  //       }
  //     </div>
  //   ),
  //     { duration: 3000 };
  // };
  const toastSuccess = () =>
    toast.success(
      <div className="flex flex-col items-center gap-3 ">
        {<img className="h-15" src={product.image} alt={product.title} />}
        {isInCart(product.id) ? "Removed from Cart" : "Added to Cart"}
        {
          <Link
            to="/CartPage"
            className="text-[13px] rounded-full bg-[#DB4444] text-white px-10 py-3  "
          >
            Go to Cart
          </Link>
        }
      </div>,
      { duration: 3000 }
    );
  const handleCartClick = () => {
    if (fromWishlist) {
      addOneToCart(product);
    } else {
      toggleCart(product);
      // toastError();
      toastSuccess();
    }
  };

  return (
    <div className="min-w-67.5">
      {/* Card */}
      <div className="relative h-62.5 bg-[#F5F5F5] flex flex-col items-center justify-center rounded overflow-hidden group">
        {/* Discount */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-sm px-3 py-1 rounded-sm">
            {product.discount}
          </span>
        )}

        {/* Heart */}
        <div className="absolute top-3 right-3">
          <button
            onClick={() => {
              if (isFavorite(product.id)) {
                removeFromFavorites(product.id);
              } else {
                addToFavorites(product.id);
              }
            }}
            className="cursor-pointer w-8 h-8 bg-white rounded-full flex items-center justify-center shadow transition-transform duration-200 hover:scale-110"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-200 ${
                isFavorite(product.id)
                  ? "fill-[#DB4444] stroke-[#DB4444]"
                  : "fill-none stroke-black"
              }`}
            >
              <path
                d="M12 21s-7-4.35-9.33-8.17C.78 9.61 2.14 5.5 6.28 5.5 
                  8.62 5.5 10.24 6.91 12 8.5 
                  13.76 6.91 15.38 5.5 17.72 5.5 
                  21.86 5.5 23.22 9.61 21.33 12.83 
                  19 16.65 12 21 12 21Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* View Product */}
        <div className="absolute top-15 right-3">
          <Link
            to={`/ProductDetails/${product.id}`}
            className="cursor-pointer mb-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow transition-transform duration-200 hover:scale-110"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-40 max-h-40 object-contain"
        />

        {/* Add To Cart Button */}
        <button
          onClick={handleCartClick}
          className={`cursor-pointer font-Poppins absolute bottom-0 left-0 w-full h-10  
            text-white transition-all duration-300 
            ${
              isInCart(product.id)
                ? "bg-[#DB4444] opacity-100"
                : "bg-black opacity-0 group-hover:opacity-100"
            }`}
        >
          {isInCart(product.id)
            ? fromWishlist
              ? "Added to Cart +1"
              : "Remove from Cart"
            : "Add To Cart"}
        </button>
      </div>
      {/* Info */}
      <div className="flex flex-col items-start">
        <p className="mt-3 font-medium">{product.title}</p>
        <p className="text-[#DB4444] py-2 font-semibold">
          ${product.price}
          <span className="text-gray-500 pl-3 line-through font-normal">
            ${product.oldPrice}
          </span>
        </p>
      </div>
      <div className="flex items-center gap-1">
        <img src={product.ratingImage} alt="rating" />
        <span className="text-gray-500 text-sm">({product.reviews})</span>
      </div>
    </div>
  );
};

export default ProductCard;

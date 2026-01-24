import Wishlist from "../../assets/Wishlist.svg";
import Cart1withbuy from "../../assets/Cart1 with buy.svg";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesProvider";

import { useCart } from "../context/CartContext";

const HeaderActions = () => {
  const { favorites } = useFavorites();
  const { cartItems } = useCart();
<<<<<<< HEAD

=======
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
  return (
    <div className="flex items-center gap-4">
      {/* Wishlist */}
      <Link to="/WishlistPage" className="relative group">
        <img
          src={Wishlist}
          alt="Wishlist"
          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
        />
        {/* Badge (اختياري) */}
        {favorites.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#DB4444] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            {favorites.length}
          </span>
        )}
      </Link>
      {/* Cart */}
      <Link to="/CartPage" className="relative group">
        <img
          src={Cart1withbuy}
          alt="Cart"
          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
        />
        {/* Badge */}
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#DB4444] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            {cartItems.length}
          </span>
        )}
      </Link>
    </div>
  );
};

export default HeaderActions;

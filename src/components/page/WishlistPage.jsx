import Button from "../common/Button";
import SectionHeader from "../SectionHeader";
import { useFavorites } from "../context/FavoritesProvider";
import { productsData } from "../../productsData";
import ProductCard from "../ProductsSection/ProductCard";
import { useCart } from "../context/CartContext";

const WishlistPage = () => {
  const { favorites, clearFavorites } = useFavorites();
  const { addManyToCart } = useCart();

  const wishlistProducts = productsData.filter((product) =>
    favorites.includes(product.id)
  );
  return (
    <section className="flex flex-col font-Poppins max-w-6xl mx-auto mt-10 mb-24 px-2 gap-4">
      <div className="flex flex-row flex-wrap gap-5 justify-between  items-center">
        <p className="text-xl font-normal ">
          Wishlist ({wishlistProducts.length})
        </p>
        <Button
          disabled={favorites.length === 0}
          onClick={() => {
            addManyToCart(wishlistProducts); // كل IDs
            clearFavorites(); // فضّي المفضلة
          }}
          variant="secondary"
          children="Move All To Bag"
        />
      </div>
      <div className="flex gap-3 overflow-x-auto scroll-smooth">
        {wishlistProducts.length === 0 && (
          <p className="text-gray-500 flex items-center">No favorites yet</p>
        )}
        {wishlistProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-5 justify-between  items-center mt-20 mb-10">
        <SectionHeader badge="Just For You" />
        <Button variant="secondary" children="See All" />
      </div>
      <div className="flex flex-row gap-3 overflow-x-auto scroll-smooth ">
        {/* {wishlistProducts.length === 0 && <p>No favorites yet</p>} */}
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} fromWishlist={true} />
        ))}
      </div>
    </section>
  );
};

export default WishlistPage;

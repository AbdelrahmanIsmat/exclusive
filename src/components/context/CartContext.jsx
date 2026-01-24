import { createContext, useContext, useState } from "react";
<<<<<<< HEAD
import { productsData } from "../../productsData";
=======
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

<<<<<<< HEAD
  // ربط IDs بالمنتجات الكاملة
  const cartProducts = cartItems.map((item) => {
    const product = productsData.find((p) => p.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  // حساب Subtotal
  const tatalAmount = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const freeShipping = tatalAmount > 500 ? 0 : 50;

  const tatalPrice = tatalAmount + freeShipping;

=======
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
  // ❓ هل المنتج في السلة
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  // 🔁 زر Add / Remove (toggle)
  const toggleCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        // 🗑️ حذف المنتج
        return prev.filter((item) => item.id !== product.id);
      }

      // ➕ إضافة جديدة
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ➕ إضافة واحدة (من المفضلة / أي مكان)
  const addOneToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 🛒 إضافة مجموعة منتجات
  const addManyToCart = (products) => {
    setCartItems((prev) => {
      let updated = [...prev];

      products.forEach((product) => {
        const item = updated.find((i) => i.id === product.id);

        if (item) {
          item.quantity += 1;
        } else {
          updated.push({ ...product, quantity: 1 });
        }
      });

      return [...updated];
    });
  };

  // ➕ زيادة الكمية
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ➖ تقليل الكمية (يحذف لو وصلت 0)
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 🗑️ حذف مباشر
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
<<<<<<< HEAD
        freeShipping,
        tatalPrice,
        cartProducts,
        tatalAmount,
=======
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
        cartItems,
        isInCart,
        toggleCart, // زر الكارد
        addOneToCart, // من المفضلة
        addManyToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

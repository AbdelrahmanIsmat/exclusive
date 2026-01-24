import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  // المصدر الوحيد للحقيقة
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (id) => {
    setFavorites((prev) => {
      if (prev.includes(id)) return prev; // امنع التكرار
      return [...prev, id];
    });
  };
  const clearFavorites = () => {
    setFavorites([]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item !== id));
  };
  const toggleFavorite = (id) => {
    if (isFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  // ❓ هل المنتج مفضلة؟
  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        clearFavorites,
        favorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook مريح
// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => useContext(FavoritesContext);

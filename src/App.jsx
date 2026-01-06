import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/page/Layout";
import ErrorPage from "./components/page/ErrorPage";
import HomePage from "./components/page/HomePage";
import AboutPage from "./components/page/AboutPage";
import ContactPage from "./components/page/ContactPage";
import WishlistPage from "./components/page/WishlistPage";
import CartPage from "./components/page/CartPage";
import CheckOutPage from "./components/page/CheckOutPage";
import ProductDetails from "./components/ProductsSection/ProductDetails";
import { FavoritesProvider } from "./components/context/FavoritesProvider";
import { CartProvider } from "./components/context/CartContext";
import SignUpPage from "./components/Account/SignUpPage";
import LoginPage from "./components/Account/LoginPage";
import { AuthProvider } from "./components/context/AuthContext";
import MyAccount from "./components/Account/MyProfile";
import AccountLayout from "./components/Account/AccountLayout";
import MyProfile from "./components/Account/MyProfile";
import PaymentOptions from "./components/Account/PaymentOptions";
// import { supabase } from "./supabase";

function App() {
  // console.log(supabase);

  return (
    <div>
      <CartProvider>
        <FavoritesProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route path="/HomePage" element={<HomePage />} />
                  <Route path="/ContactPage" element={<ContactPage />} />
                  <Route path="/AboutPage" element={<AboutPage />} />
                  <Route path="/SignUpPage" element={<SignUpPage />} />
                  <Route path="/LoginPage" element={<LoginPage />} />
                  <Route path="/WishlistPage" element={<WishlistPage />} />
                  <Route path="/CartPage" element={<CartPage />} />
                  <Route path="/CheckOutPage" element={<CheckOutPage />} />
                  <Route path="/AccountLayout" element={<AccountLayout />}>
                    <Route
                      index
                      element={<Navigate to="MyProfile" replace />}
                    />
                    <Route path="MyProfile" element={<MyProfile />} />
                    <Route path="PaymentOptions" element={<PaymentOptions />} />
                    <Route path="wishlist" element={<WishlistPage />} />
                  </Route>
                  <Route
                    path="/ProductDetails/:id"
                    element={<ProductDetails />}
                  />
                  <Route path="*" element={<ErrorPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </FavoritesProvider>
      </CartProvider>
    </div>
  );
}

export default App;

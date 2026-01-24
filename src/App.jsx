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
import AccountLayout from "./components/Account/AccountLayout";
import MyProfile from "./components/Account/MyProfile";
import PaymentOptions from "./components/Account/PaymentOptions";
import MyOrders from "./components/Account/MyOrders";
import ProductsPage from "./components/ProductsSection/ProductsPage";
<<<<<<< HEAD
import CategoryPage from "./components/page/CategoryPage";
import { Toaster } from "react-hot-toast";

// import { supabase } from "./supabase";

function App() {
  return (
    <div>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        toastOptions={{
          style: {
            width: "250px",
          },
        }}
      />
=======
// import { supabase } from "./supabase";

function App() {
  // console.log(supabase);

  return (
    <div>
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
      <CartProvider>
        <FavoritesProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/HomePage" element={<HomePage />} />
                  <Route path="/ProductsPage" element={<ProductsPage />} />
                  <Route path="/ContactPage" element={<ContactPage />} />
                  <Route path="/AboutPage" element={<AboutPage />} />
                  <Route path="/SignUpPage" element={<SignUpPage />} />
                  <Route path="/LoginPage" element={<LoginPage />} />
                  <Route path="/WishlistPage" element={<WishlistPage />} />
                  <Route path="/CartPage" element={<CartPage />} />
                  <Route path="/CheckOutPage" element={<CheckOutPage />} />
<<<<<<< HEAD
                  <Route path="/CategoryPage" element={<CategoryPage />} />
=======
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
                  <Route path="/AccountLayout" element={<AccountLayout />}>
                    <Route
                      index
                      element={<Navigate to="MyProfile" replace />}
                    />
                    <Route path="MyProfile" element={<MyProfile />} />
                    <Route path="PaymentOptions" element={<PaymentOptions />} />
                    <Route path="MyOrders" element={<MyOrders />} />
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

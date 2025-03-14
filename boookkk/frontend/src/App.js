import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Product from "./screens/Product";
import CartPage from "./screens/CartPage";
import Signup from "./screens/Signup";
import SellRentPage1 from "./screens/SellRentPage1";
import SellRentPage2 from "./screens/SellRentPage2";
import BuyPage from "./screens/BuyPage";
import AdminPanel from "./screens/adminpanel"
import ManageUsers from "./screens/manage-users";
import ManageBooks from "./screens/manage-books";
import RentalManagement from "./screens/rental-management";
import AdminSettings from "./screens/settings";
import Add from "./screens/add"
import { toast } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Flex
        as='main'
        direction='column'
      >
        <Routes>
          <Route
            path='/'
            element={<Navigate to='/login' />}
          />
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/product'
            element={<Product />}
          />
          <Route
            path='/signup'
            element={<Signup />}
          />
          <Route
            path='/BuyPage'
            element={<BuyPage />}
          />
          <Route
            path='/CartPage'
            element={<CartPage />}
          />
          <Route
            path='/SellRentPage1'
            element={<SellRentPage1 />}
          />
          <Route
            path='/SellRentPage2'
            element={<SellRentPage2 />}
          />
          <Route
          path= '/adminpanel'
          element={<AdminPanel />}
          />
          <Route
          path='/manage-users'
          element={<ManageUsers />}
          />
          <Route
          path='/manage-books'
          element={<ManageBooks/>}
          />
          <Route
          path='/rental-management'
          element={<RentalManagement/>}
          />
          <Route
          path='/settings'
          element={<AdminSettings/>}
          />
          <Route
          path='/add'
          element={<Add/>}
          />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

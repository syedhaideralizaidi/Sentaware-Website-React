import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutNav from "./components/CheckoutNav.jsx";
import HomePage from "./pages/HomePage.jsx";
import MainCheckOut from "./pages/MainCheckOut.jsx";
import Cart from "./components/Cart.jsx";
import Product_Cart from "./components/Product_Cart.jsx";
import Shipping from "./components/Shipping.jsx";
import Payment from "./components/Payment.jsx";
import Order_Review from "./components/Order_Review.jsx";
import {useGlobalContext} from './context/context';
import Thankyou from "./components/Thankyou.jsx";
import Signup from "./components/Login Pages/Signup.jsx";
import Signin from "./components/Login Pages/Signin.jsx";
import Confirmation from "./components/Login Pages/Confirmation.jsx";
import Dialogue from "./components/Dialogue.jsx";
import Dialogueup from "./components/Dialogueup.jsx";
import DialogueConfirm from "./components/DialogueConfirm.jsx";

import { HashRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Dialogueup />}></Route>
        <Route path="/Signin" element={<Dialogue />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Confirmation" element={<DialogueConfirm />}></Route>
      <Route path="/MainCheckOut" element={<MainCheckOut />}></Route>
      <Route path="/Product_Cart" element={<Product_Cart />}></Route>
      <Route path="/Shipping" element={<Shipping />}></Route>
      <Route path="/Payment" element={<Payment />}></Route>
      <Route path="/Thankyou" element={<Thankyou />}></Route>
      <Route path="/Order_Review" element={<Order_Review />}></Route>
        <Route index exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
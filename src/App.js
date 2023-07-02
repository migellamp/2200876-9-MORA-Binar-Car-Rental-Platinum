import LandingPage from "./components/Pages/LandingPage/LandingPage";
import SearchCarPage from "./components/Pages/SearchCar/SearchCarPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarResult from "./components/Pages/ResultPage";
import CarDetails from "./components/Pages/CarDetailsPage";
import PaymentPage from "./components/Pages/PaymentPage";
import SignUp from "./components/Pages/SignUpPage";
import React from "react";
// import { getCarList } from "./API/api";
// import { useState } from "react";
// import { useEffect } from "react";
import "react-day-picker/dist/style.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/search" element={<SearchCarPage />} />
        <Route exact path="/car-result" element={<CarResult />} />
        <Route exact path="/car-details" element={<CarDetails />} />
        <Route exact path="/payments" element={<PaymentPage />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route />
      </Routes>
    </Router>
  );
};

export default App;

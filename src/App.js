import * as React from "react";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import SearchCarPage from "./components/Pages/SearchCar/SearchCarPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarResult from "./components/Pages/ResultPage";
import CarDetails from "./components/Pages/CarDetailsPage";
import PaymentPage from "./components/Pages/PaymentPage";
import SignIn from "./components/Pages/Customer/Login";
import LogAdm from "./components/Pages/Admin/LoginAdm/index";
import SignUp from "./components/Pages/SignUpPage";
import DashboardAdmin from "./components/Pages/DashboardAdmin";
// import { getCarList } from "./API/api";
// import { useState } from "react";
// import { useEffect } from "react";
import "react-day-picker/dist/style.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* CUSTOMER PAGE */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchCarPage />} />
        <Route path="/car-result" element={<CarResult />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/payments" element={<PaymentPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        {/* ADMIN PAGE */}
        <Route path="/admin" element={<LogAdm />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
      </Routes>
    </Router>
  );
};

export default App;

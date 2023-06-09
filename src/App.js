import LandingPage from "./components/Pages/LandingPage/LandingPage";
import SearchCarPage from "./components/Pages/SearchCar/SearchCarPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarResult from "./components/Pages/ResultPage";
import CarDetails from "./components/Pages/CarDetailsPage";
import PaymentPage from "./components/Pages/PaymentPage";
// import { getCarList } from "./API/api";
// import { useState } from "react";
// import { useEffect } from "react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/search" element={<SearchCarPage/>} />
        <Route path="/car-result" element={<CarResult/>} />
        <Route path="/car-details" element={<CarDetails/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App
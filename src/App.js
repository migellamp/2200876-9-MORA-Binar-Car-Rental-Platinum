import * as React from "react";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import SearchCarPage from "./components/Pages/SearchCar/SearchCarPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarResult from "./components/Pages/ResultPage";
import CarDetails from "./components/Pages/CarDetailsPage";
import PaymentPage from "./components/Pages/PaymentPage";
import ListCar from "./components/Pages/Admin/ListCar";
import EditCar from "./components/Pages/Admin/EditCar";
import AddNewCar from "./components/Pages/Admin/AddNewCar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchCarPage />} />
        <Route path="/car-result" element={<CarResult />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/payments" element={<PaymentPage />} />
        {/* admin */}
        <Route path="/admin/list-car" element={<ListCar />} />
        <Route path="/admin/edit-car/:id" element={<EditCar />} />
        <Route path="/admin/add-new-car" element={<AddNewCar />} />
        <Route />
      </Routes>
    </Router>
  );
};

export default App;

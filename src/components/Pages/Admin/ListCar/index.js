import React, { useEffect } from "react";
import CarData from "../../../PageComponent/Admin/CarData";
import Navbar from "../../../PageComponent/Admin/Navbar";
import FilterListCar from "../../../PageComponent/Admin/FilterListCar";
import axios from "axios";

export default function ListCar() {

  useEffect(()=> {
    axios.get('')

  },[])
  return (
    <div>
      <div className="container">
        <FilterListCar />
        <div className="row">
          <div className="col-lg-4">
            <CarData />
          </div>
          <div className="col-lg-4">
            <CarData />
          </div>
          <div className="col-lg-4">
            <CarData />
          </div>
          <div className="col-lg-4">
            <CarData />
          </div>
          <div className="col-lg-4">
            <CarData />
          </div>
          <div className="col-lg-4">
            <CarData />
          </div>
        </div>
      </div>
    </div>
  );
}

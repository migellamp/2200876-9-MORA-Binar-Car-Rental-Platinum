import React from "react";

export default function FilterListCar() {
  return (
    <div className="d-flex">
      <button type="button" className="btn  btn-outline-primary p-2 mx-2 ">
        All
      </button>
      <button type="button" className="btn btn-outline-primary p-2 mx-2 ">
        2 - 4 People
      </button>
      <button type="button" className="btn btn-outline-primary p-2 mx-2 ">
        4 - 6 People
      </button>
      <button type="button" className="btn btn-outline-primary p-2  mx-2">
        6 - 8 People
      </button>
    </div>
  );
}

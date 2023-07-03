import React from "react";

export default function FilterListCar({ onChangeFilter }) {
  const handlingFilter = (param) => {
    onChangeFilter(param);
  };
  return (
    <div className="d-flex">
      <button
        onClick={() => handlingFilter()}
        type="button"
        className="btn  btn-outline-primary p-2 mx-2 "
      >
        All
      </button>
      <button
        onClick={() => handlingFilter("small")}
        type="button"
        className="btn btn-outline-primary p-2 mx-2 "
      >
        2 - 4 Orang
      </button>
      <button
        onClick={() => handlingFilter("medium")}
        type="button"
        className="btn btn-outline-primary p-2 mx-2 "
      >
        4 - 6 Orang
      </button>
      <button
        onClick={() => handlingFilter("large")}
        type="button"
        className="btn btn-outline-primary p-2  mx-2"
      >
        6 - 8 Orang
      </button>
    </div>
  );
}

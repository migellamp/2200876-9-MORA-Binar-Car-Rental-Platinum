import { useContext } from "react";
import "../InputForm/style.css";
import { SearchedCarContext } from "../../../context/searchedCar";
import * as React from "react";

const SearchFormInput = ({
  labelName,
  defaultValue,
  disabled,
  id,
  widthStyle,
}) => {
  const { searchedCar, setSearchedCar } = useContext(SearchedCarContext);
  const { kategori, harga, status } = searchedCar || {};

  const getValue = (e) => {
    const SearchedCarState = {
      namaMobil: e.target.value,
      kategori: kategori,
      harga: harga,
      status: status,
    };
    setSearchedCar(SearchedCarState);
  };
  return (
    <div className="form-group wrapper-input-form">
      <label className="label-input-form" htmlFor="">
        {labelName}
      </label>
      <input
        type="text"
        name=""
        id={id}
        className="form-control input-form"
        placeholder="Ketik nama/tipe mobil"
        aria-describedby="helpId"
        onChange={getValue}
        defaultValue={defaultValue}
        disabled={disabled}
        style={{ width: widthStyle }}
      />
    </div>
  );
};

export default SearchFormInput;

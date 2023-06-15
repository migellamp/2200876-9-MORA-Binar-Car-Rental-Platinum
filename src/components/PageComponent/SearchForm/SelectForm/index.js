import "../SelectForm/style.css";
import { SearchedCarContext } from "../../../context/searchedCar";
import { useContext } from "react";
import * as React from "react";

const SelectFormInput = ({
  labelName,
  arrayList,
  selected,
  id,
  disabled,
  widthStyle,
}) => {
  const { searchedCar, setSearchedCar } = useContext(SearchedCarContext);
  const { namaMobil, kategori, harga, status } = searchedCar || {};

  const getValue = (e) => {
    if (labelName === "Kategori") {
      const SearchedCarState = {
        namaMobil: namaMobil,
        kategori: e.target.value,
        harga: harga,
        status: status,
      };
      setSearchedCar(SearchedCarState);
    }
    if (labelName === "Status") {
      const SearchedCarState = {
        namaMobil: namaMobil,
        kategori: kategori,
        harga: harga,
        status: e.target.value,
      };
      setSearchedCar(SearchedCarState);
    }
    if (labelName === "Harga") {
      const SearchedCarState = {
        namaMobil: namaMobil,
        kategori: kategori,
        harga: e.target.value,
        status: status,
      };
      setSearchedCar(SearchedCarState);
    }
  };
  return (
    <div className="form-group wrapper-input-form">
      <label className="label-input-form" htmlFor="">
        {labelName}
      </label>
      <select
        onChange={getValue}
        defaultValue={selected}
        className="form-select input-form"
        name=""
        id={id}
        disabled={disabled}
        style={{ width: widthStyle }}
      >
        {arrayList.map((value) => {
          return (
            <option value={value.text} key={value.id}>
              {value.text}
            </option>
          );
        })}
        {/* <option selected>Select one</option> */}
      </select>
    </div>
  );
};

export default SelectFormInput;

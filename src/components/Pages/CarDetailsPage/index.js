import Navbar from "../../PageComponent/Navbar";
import * as React from "react";
import { useLocation } from "react-router-dom";
import SearchFormInput from "../../../components/PageComponent/SearchForm/InputForm";
import SelectFormInput from "../../PageComponent/SearchForm/SelectForm";
import { useContext, useMemo } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import userIcon from "../../../image/icon_users.png";
import {
  categoryList,
  priceList,
  statusList,
} from "../../PageComponent/SearchForm/constanta";
import Footer from "../../PageComponent/Footer/index";
import "../CarDetailsPage/style.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SearchedCarContext } from "../../context/searchedCar";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import * as dayjs from "dayjs";
import { Navigate } from "react-router-dom";

const CarDetails = () => {
  const role = localStorage.getItem('role')

  if (document.cookie === "" ) {
    return <Navigate to="/signin" />;
  } else if (role === "Admin") {
    return <Navigate to="/signin" />;
  }
  const { setSearchedCar } = useContext(SearchedCarContext);
  const [carId, setCarId] = useState({});

  const [range, setRange] = useState(undefined);

  let footer = <p>Please pick the first day.</p>;

  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

  let query = useQuery();
  const id = query.get("idCar");

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const getCarList = async () => {
    const cars = await await axios.get(
      `${process.env.REACT_APP_BASEURL}/customer/car/${id}`
    );
    console.log(cars.data);
    setCarId(cars.data);
  };

  const buttonHandler = () => {
    if (carId) {
      const SearchedCarState = {
        namaMobil: carId.name,
        kategori: carId.category,
        harga: carId.price,
        status: carId.status,
        tanggalMulai: range.from,
        tanggalSelesai: range.to,
      };
      setSearchedCar(SearchedCarState);
    }
  };

  useEffect(() => {
    getCarList();
    // eslint-disable-next-line
  }, []);

  const testOnly = () => {
    const start = dayjs(range.from).format("YYYY-MM-DD");
    const finish = dayjs(range.to).format("YYYY-MM-DD");
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
      body: JSON.stringify({
        start_rent_at: start,
        finish_rent_at: finish,
        car_id: id,
      }),
    };
    fetch(`${process.env.REACT_APP_BASEURL}/customer/order`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    // console.log(dayjs(range.from).format("YYYY-DD-MM"));q
    // console.log(range.to);
    console.log(id);
  };

  let category;
  if (carId.category === "small" || carId.category === "Small") {
    category = "2 - 4 orang";
  }
  if (carId.category === "medium" || carId.category === "Medium") {
    category = "4 - 6 orang";
  }
  if (carId.category === "large" || carId.category === "Large") {
    category = "6 - 8 orang";
  }

  let price;
  if (carId.price < "400000") {
    price = "< Rp.400.000";
  }
  if (carId.price < "600000" && carId.price > "400000") {
    price = "Rp.400.000 - Rp.600.000";
  }
  if (carId.category === "large") {
    price = "> Rp.600.000";
  }

  let status;
  if (carId.status === false) {
    status = "Disewakan";
  }
  if (carId.status === true) {
    status = "Kosong";
  }

  useEffect(() => {
    document.getElementById("category-select").value = category;
    document.getElementById("price-select").value = price;
    document.getElementById("status-select").value = status;
    // eslint-disable-next-line
  }, [category]);

  const numberFormat = (value) =>
    new Intl.NumberFormat("id", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  return (
    <>
      <Navbar />
      <div className="background-only"></div>
      <div className="form mb-5">
        <div
          className="form-container container-form-car-details"
          style={{ top: 195, height: 130, paddingTop: 20 }}
        >
          <h6 className="pencarianmu-text">Pencarianmu</h6>
          <div className="form-wrapper wrapper-form-car-details">
            <SearchFormInput
              labelName="Nama Mobil"
              defaultValue={carId.name}
              id="car-select"
              disabled
              widthStyle="237px"
            />
            <SelectFormInput
              labelName="Kategori"
              arrayList={categoryList}
              id="category-select"
              disabled
              widthStyle="237px"
            />
            <SelectFormInput
              labelName="Harga"
              arrayList={priceList}
              id="price-select"
              disabled
              widthStyle="237px"
            />
            <SelectFormInput
              labelName="Status"
              arrayList={statusList}
              id="status-select"
              disabled
              widthStyle="237px"
            />
          </div>
        </div>
      </div>
      <div className="container-all-details-car">
        <div className="container-details-car">
          <div className="wrapper-description-car mt-5">
            <h6>Tentang Paket</h6>
            <div className="include-package">
              <h6>Include</h6>
              <ul>
                <li>
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>
            </div>
            <div className="exclude-package">
              <h6>Exclude</h6>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
            <div className="another-package">
              <h6>Refund, Reschedule, Overtime</h6>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak xtermasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
          </div>
          <div className="wrapper-info-car mt-5">
            <img
              className="car-details-pic mb-4"
              id="img-car-detail"
              src={carId.image}
              alt=""
            />
            <h6>{carId.name}</h6>
            <p className="category-detail-cars">
              <img src={userIcon} alt="" />
              {category}
            </p>
            <div className="total-details-cars">
              <span>
                <h6 style={{ display: "inline-block" }}>Total</h6>
              </span>
              <span>
                <h6 style={{ float: "right" }}>{numberFormat(carId.price)}</h6>
              </span>
            </div>
            <div className="open-calender">
              <DayPicker
                defaultMonth={new Date(Date.now())}
                mode="range"
                min={3}
                max={7}
                selected={range}
                onSelect={setRange}
                footer={footer}
                format={"YYYY-DD-MM"}
              />
              <Button variant="success" onClick={testOnly}>
                Simpan Tanggal
              </Button>
            </div>
            <Link to={`/payments?idCar=${carId.id}`}>
              <Button onClick={buttonHandler}>Lanjut Bayar</Button>
            </Link>
            <p>button buat testing(hapus gpp)</p>
            {/* <Link to={('/search')}><button className="btn btn-success">Back</button></Link>
                    <Link to={('/search')}><button style={{float:"right"}} className="btn btn-success">Checkout</button></Link> */}
          </div>
        </div>
      </div>
      <Footer />
      {/* {
                carId.map((value)=>{
                    return (       
                        <>
                        <h1>{value.name}</h1>
                        </>
                    )
                })
            } */}
    </>
  );
};

export default CarDetails;

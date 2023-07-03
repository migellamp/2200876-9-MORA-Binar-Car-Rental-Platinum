import * as React from "react";
import Navbar from "../../PageComponent/Navbar";
import userIcon from "../../../image/icon_users.png";
import Footer from "../../PageComponent/Footer/index";
import "../CarDetailsPage/style.css";
import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import FinishPayment from "./FinishPayment";
import axios from "axios";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PaymentPage = () => {
  const styles = {
    size14medium: {
      fontFamily: "Arial",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
    },
    size14: {
      fontFamily: "Arial",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
      color: "#8A8A8A",
    },
    size14bold: {
      fontFamily: "Arial",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "20px",
    },
    size12: {
      fontFamily: "Arial",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      paddingTop: "8px",
    },
    size10: {
      fontFamily: "Arial",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "10px",
      lineHeight: "14px",
      textAlign: "center",
    },
    isActive: {
      color: "white",
      backgroundColor: "#0D28A6",
    },
    isNonActive: {
      color: "black",
      backgroundColor: "white",
      border: "1px solid #0D28A6",
    },
  };

  const selectedPaymentMethod = sessionStorage.getItem("selectedPayment");
  const selectedPayment = JSON.parse(selectedPaymentMethod);
  const [payment, setPayment] = useState(selectedPayment);
  const [isPayExpand, setPayExpand] = useState(true);
  const [isFinishPayment, setFinishPayment] = useState(false);
  const [carId, setCarId] = useState({});
  const { name, category } = carId || {};
  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  const id = query.get("idCar");
  const harga = 100000;
  const getCarList = async () => {
    const cars = await await axios.get(
      `${process.env.REACT_APP_BASEURL}/customer/car/${id}`
    );
    setCarId(cars.data);
  };

  useEffect(() => {
    getCarList();
    // eslint-disable-next-line
  }, []);

  // set item count sementara
  const dayCount = 7;

  const expandPaymentHandler = () => {
    setPayExpand((val) => !val);
  };
  let navigate = useNavigate();

  const selectPaymentMethod = (val) => {
    setPayment(val);
    sessionStorage.setItem("selectedPayment", JSON.stringify(val));
  };

  const createNewPaymentPage = () => {
    setFinishPayment(true);
  };

  const numberFormat = (value) =>
    new Intl.NumberFormat("id", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  if (isFinishPayment) return <FinishPayment></FinishPayment>;
  return (
    <>
      <Navbar />
      <div className="background-only">
        <div className="container-payment">
          <div className="cover-payment">
            <div className="container-back-button">
              <div className="form-back-button">
                <button
                  onClick={() => navigate(-1)}
                  className="payment-back-button"
                >
                  <div className="button-pay-back">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <h5 style={styles.size14bold}>Pembayaran</h5>
                  </div>
                </button>
              </div>
              <div className="page-info-now">
                <div className="first">
                  <span className="circle" style={styles.isActive}>
                    <h6 style={styles.size10}>1</h6>
                  </span>
                  <h5 style={styles.size12}>Pilih Metode</h5>
                </div>
                <hr style={{ width: 28, height: 1 }} />
                <div className="first">
                  <span className="circle" style={styles.isNonActive}>
                    <h6 style={styles.size10}>2</h6>
                  </span>
                  <h5 style={styles.size12}>Bayar</h5>
                </div>
                <hr style={{ width: 28, height: 1 }} />
                <div className="first">
                  <span className="circle" style={styles.isNonActive}>
                    <h6 style={styles.size10}>3</h6>
                  </span>
                  <h5 style={styles.size12}>Tiket</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form mb-5">
        <div
          className="form-container container-payment-header"
          style={{ top: 195, height: 130, paddingTop: 20 }}
        >
          <h6 className="detailPesananmu-text">Detail Pesananmu</h6>
          <div className="payment-form-wrapper wrapper-payment-header">
            <div className="payment-head-item payment-car">
              <h5 style={styles.size14medium}>Nama/Tipe Mobil</h5>
              <h5 style={styles.size14}>{name}</h5>
            </div>
            <div className="payment-head-item payment-category">
              <h5 style={styles.size14medium}>Kategori</h5>
              <h5 style={styles.size14}>{category}</h5>
            </div>
            <div className="payment-head-item payment-start">
              <h5 style={styles.size14medium}>Tanggal Mulai Sewa</h5>
              <h5 style={styles.size14}>belom</h5>
            </div>
            <div className="payment-head-item payment-end">
              <h5 style={styles.size14medium}>Tanggal Akhir Sewa</h5>
              <h5 style={styles.size14}>belom</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-all">
        <div className="container-details-car container-payment-car">
          <div className="wrapper-description-car mt-5">
            <h5 style={styles.size14bold}>Pilih Bank Transfer</h5>
            <h5 style={styles.size14medium} className="mb-3">
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
              atau Mobile Banking
            </h5>
            <div className="payment-method-list">
              <button
                className="buttonPayMethod"
                onClick={() => selectPaymentMethod("BCA")}
              >
                <div className="payment-body-button">
                  <h6 className="firstItem">BCA</h6>
                  <h6 className="secItem">BCA Transfer</h6>
                  {payment === "BCA" && (
                    <>
                      <i
                        style={{
                          float: "right",
                          marginLeft: 55,
                          color: "#5CB85F",
                        }}
                        className="fa fa-check"
                        aria-hidden="true"
                      ></i>
                    </>
                  )}
                </div>
              </button>
              <button
                className="buttonPayMethod"
                onClick={() => selectPaymentMethod("BNI")}
              >
                <div className="payment-body-button">
                  <h6 className="firstItem">BNI</h6>
                  <h6 className="secItem">BNI Transfer</h6>
                  {payment === "BNI" && (
                    <>
                      <i
                        style={{
                          float: "right",
                          marginLeft: 55,
                          color: "#5CB85F",
                        }}
                        className="fa fa-check"
                        aria-hidden="true"
                      ></i>
                    </>
                  )}
                </div>
              </button>
              <button
                className="buttonPayMethod"
                onClick={() => selectPaymentMethod("Mandiri")}
              >
                <div className="payment-body-button">
                  <h6 className="firstItemMandiri">Mandiri</h6>
                  <h6 className="secItem">Mandiri Transfer</h6>
                  {payment === "Mandiri" && (
                    <>
                      <i
                        style={{
                          float: "right",
                          marginLeft: 55,
                          color: "#5CB85F",
                        }}
                        className="fa fa-check"
                        aria-hidden="true"
                      ></i>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
          <div className="container-payment-cars">
            <div className="wrapper-payment-car mt-5">
              <h6>{name}</h6>
              <p className="category-detail-cars">
                <img src={userIcon} alt="" />
                Kategori {category}
              </p>
              <div className="total-details-cars total-payment-cars mt-5">
                <button
                  className="expand-total-payment"
                  onClick={expandPaymentHandler}
                >
                  <span>
                    <h6 style={{ display: "inline-block" }}>Total</h6>
                    <i
                      className="fa fa-chevron-down"
                      aria-hidden="true"
                      style={{ paddingLeft: 20 }}
                    ></i>
                  </span>
                </button>
                <span>
                  <h6 style={{ float: "right" }}>
                    {numberFormat(harga * dayCount)}
                  </h6>
                </span>
              </div>
              {isPayExpand && (
                <>
                  <h5>Harga</h5>
                  <div className="payment-item-expand">
                    <div className="payment-item-title">
                      <ul>
                        <li>
                          <h5 style={styles.size14medium}>
                            Sewa Mobil {numberFormat(harga)} x {dayCount} Hari
                          </h5>
                        </li>
                      </ul>
                    </div>
                    <div className="payment-item-body">
                      <ul>
                        <li>
                          <h5 style={styles.size14medium}>
                            {numberFormat(harga * dayCount)}
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h5>Biaya Lainnya</h5>
                  <div className="payment-item-expand">
                    <div className="payment-item-title">
                      <ul>
                        <li>
                          <h6 style={styles.size14medium}>Pajak</h6>
                        </li>
                      </ul>
                    </div>
                    <div className="payment-item-body">
                      <ul>
                        <li>
                          <h6 style={styles.size14medium} className="termasuk">
                            Termasuk
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="payment-item-expand">
                    <div className="payment-item-title">
                      <ul>
                        <li>
                          <h6 style={styles.size14medium}>Biaya Makan Sopir</h6>
                        </li>
                      </ul>
                    </div>
                    <div className="payment-item-body">
                      <ul>
                        <li>
                          <h6 style={styles.size14medium} className="termasuk">
                            Termasuk
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h5>Belum Termasuk</h5>
                  <div className="payment-item-expand">
                    <div className="payment-item-title">
                      <ul>
                        <li>
                          <h6 style={styles.size14medium}>Bensin</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="payment-item-expand">
                    <div className="payment-item-title">
                      <ul>
                        <li>
                          <h6 style={styles.size14medium}>Tol dan parkir</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
              <hr
                style={{
                  color: "black",
                  height: 1,
                }}
              />
              <div className="total-details-cars total-payment-cars">
                <span>
                  <h6 style={{ display: "inline-block" }}>Total</h6>
                </span>
                <span>
                  <h6 style={{ float: "right" }}>
                    {numberFormat(harga * dayCount)}
                  </h6>
                </span>
              </div>
              {payment ? (
                <button
                  className="payment-button-page"
                  style={{ background: "#5CB85F" }}
                  onClick={createNewPaymentPage}
                >
                  Bayar
                </button>
              ) : (
                <button
                  className="payment-button-page"
                  style={{ background: "#DEF1DF" }}
                  disabled
                >
                  Bayar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="barrier"></div>
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
export default PaymentPage;

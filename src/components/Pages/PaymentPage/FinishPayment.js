import * as React from "react";
import PaymentPage from ".";
import Navbar from "../../PageComponent/Navbar";
import Footer from "../../PageComponent/Footer";
import { useState } from "react";
import "./style.css";
import Countdown from "react-countdown";

const FinishPayment = () => {
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
      color: "#3C3C3C",
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
      textAlign: "center",
    },
  };
  const renderer = ({ total, hours, minutes, seconds }) => {
    if (total) {
      return (
        <span>
          <span
            style={{
              color: "white",
              backgroundColor: "#FA2C5A",
              padding: 3,
              borderRadius: 4,
              marginRight: 4,
              marginLeft: 4,
            }}
          >
            {hours}
          </span>
          :
          <span
            style={{
              color: "white",
              backgroundColor: "#FA2C5A",
              padding: 3,
              borderRadius: 4,
              marginRight: 4,
              marginLeft: 4,
            }}
          >
            {minutes}
          </span>
          :
          <span
            style={{
              color: "white",
              backgroundColor: "#FA2C5A",
              padding: 3,
              borderRadius: 4,
              marginRight: 4,
              marginLeft: 4,
            }}
          >
            {seconds}
          </span>
        </span>
      );
    }
  };
  const selectedPaymentMethod = sessionStorage.getItem("selectedPayment");
  const selectedPaymen = JSON.parse(selectedPaymentMethod);
  const [payment] = useState(selectedPaymen);
  const [isBackPayment, setIsBackPayment] = useState(false);
  const backToFirstPaymentPage = () => {
    setIsBackPayment(true);
  };
  if (isBackPayment === true) return <PaymentPage></PaymentPage>;
  return (
    <div>
      <Navbar />
      <div className="background-only bg-only-payment-page">
        <div className="container-payment">
          <div className="cover-payment">
            <div className="container-back-button">
              <div className="form-back-button fbb-payment">
                <button
                  onClick={backToFirstPaymentPage}
                  className="payment-back-button"
                >
                  <div className="button-pay-back">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <h5 style={styles.size14bold}>{payment} Transfer</h5>
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
                  <span className="circle" style={styles.isActive}>
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
        <div className="container-payment">
          <div className="cover-payment">
            <div className="container-back-button order-id">
              <h5 style={styles.size12}>Order ID : xxxx..</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="body-pay-page mt-4">
        <div className="container-pay-page">
          <div className="finishPayment">
            <div className="left-item">
              <h6 style={styles.size14bold}>Selesaikan Pembayaran Sebelum</h6>
              <h5 style={styles.size14}>Rabu, 19 Mei 2022 jam 13.00 WIB</h5>
            </div>
            <div className="righ-item">
              <Countdown date={Date.now() + 86399999} renderer={renderer} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FinishPayment;

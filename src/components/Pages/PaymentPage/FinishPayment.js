import * as React from "react";
import PaymentPage from ".";
import Navbar from "../../PageComponent/Navbar";
import Footer from "../../PageComponent/Footer";
import { useState } from "react";
import "./style.css";
import Countdown from "react-countdown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Alert, Fade } from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const FinishPayment = () => {
  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const [payInstuction, setPayInstuction] = useState("1");
  const [isConfirm, setConfirm] = useState(false);
  const [dateConfirm, setDateConfirm] = useState("");
  const selectedPaymentMethod = sessionStorage.getItem("selectedPayment");
  const selectedPaymen = JSON.parse(selectedPaymentMethod);
  const [payment] = useState(selectedPaymen);
  const [isBackPayment, setIsBackPayment] = useState(false);
  const harga = 8000000;
  const dateNow = useRef(Date.now());
  const [show, setShow] = useState(false);

  let navigate = useNavigate();
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

  const rendererConfirm = ({ minutes, seconds, completed }) => {
    if (completed) {
      setShow(true);
    } else {
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

  const handleAlert = () => {
    setCopied((prev) => !prev);
    setTimeout(() => {
      setCopied((prev) => !prev);
    }, 300);
  };

  const confirmHandler = () => {
    setConfirm(true);
    const time = Date.now();
    setDateConfirm(time);
  };

  const handleAlert1 = () => {
    setCopied1((prev) => !prev);
    setTimeout(() => {
      setCopied1((prev) => !prev);
    }, 300);
  };

  const backToFirstPaymentPage = () => {
    setIsBackPayment(true);
  };

  const numberFormat = (value) =>
    new Intl.NumberFormat("id", {
      style: "currency",
      currency: "IDR",
    }).format(value);

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
      <div className="body-pay-page" style={{ marginTop: 40 }}>
        <div className="container-pay-page">
          <div className="outside-cover-pay-page">
            <div className="cover-pay-page">
              <div className="finishPayment">
                <div className="left-item">
                  <h6 style={styles.size14bold}>
                    Selesaikan Pembayaran Sebelum
                  </h6>
                  <h5 style={styles.size14}>Rabu, 19 Mei 2022 jam 13.00 WIB</h5>
                </div>
                <div className="righ-item">
                  <Countdown
                    date={dateNow.current + 86399000}
                    renderer={renderer}
                  />
                </div>
              </div>
              <div className="infoPayment">
                <div className="title-transfer">
                  <h6 style={styles.size14bold}>Lakukan Transfer Ke</h6>
                </div>
                <div className="method-transfer">
                  <h6
                    style={{
                      border: "1px solid #D0D0D0",
                      padding: "6px 18px",
                      borderRadius: "4px",
                    }}
                  >
                    {payment}
                  </h6>
                  <h6
                    style={{
                      marginTop: 18,
                    }}
                  >
                    {payment} Transfer <br /> a.n Binar Car Rental
                  </h6>
                </div>
                <div className="total-transfer mt-3">
                  <div className="destination-number">
                    <h6
                      style={{
                        fontStyle: "normal",
                        fontWeight: 300,
                        fontSize: 14,
                      }}
                    >
                      Nomor Rekening
                    </h6>
                    <h6
                      style={{
                        border: "1px solid #3C3C3C",
                        padding: "9px 12px",
                        borderRadius: 2,
                      }}
                    >
                      54104257877
                      <CopyToClipboard
                        options={{ message: "Whoa!" }}
                        text={"54104257877"}
                      >
                        <button
                          onClick={handleAlert}
                          style={{
                            backgroundColor: "white",
                            border: "none",
                            float: "right",
                          }}
                        >
                          <i className="fa fa-clone" aria-hidden="true"></i>
                        </button>
                      </CopyToClipboard>
                    </h6>
                    {copied && (
                      <div className="copied-alert">
                        <Alert variant="dark" transition={Fade}>
                          Copied
                        </Alert>
                      </div>
                    )}
                  </div>
                  <div className="total-number mt-4">
                    <div className="destination-number">
                      <h6
                        style={{
                          fontStyle: "normal",
                          fontWeight: 300,
                          fontSize: 14,
                        }}
                      >
                        Total Bayar
                      </h6>
                      <h6
                        style={{
                          border: "1px solid #3C3C3C",
                          padding: "9px 12px",
                          borderRadius: 2,
                        }}
                      >
                        {numberFormat(harga)}
                        <CopyToClipboard
                          options={{ message: "Whoa!" }}
                          text={harga}
                        >
                          <button
                            onClick={handleAlert1}
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              float: "right",
                            }}
                          >
                            <i className="fa fa-clone" aria-hidden="true"></i>
                          </button>
                        </CopyToClipboard>
                      </h6>
                      {copied1 && (
                        <div className="copied-alert">
                          <Alert variant="dark" transition={Fade}>
                            Copied
                          </Alert>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="instructionPayment">
                <div className="title-transfer">
                  <h6 style={styles.size14bold}>Instruksi Pembayaran</h6>
                </div>
                <div className="method-instuction">
                  <div className="list-payment-instruction">
                    <button
                      onClick={() => setPayInstuction("1")}
                      style={
                        payInstuction == 1
                          ? { borderBottom: "1px solid #5CB85F" }
                          : null
                      }
                    >
                      <h6
                        style={
                          payInstuction == 1 ? styles.size14bold : styles.size14
                        }
                      >
                        ATM {payment}
                      </h6>
                    </button>
                    <button
                      onClick={() => setPayInstuction("2")}
                      style={
                        payInstuction == 2
                          ? { borderBottom: "1px solid #5CB85F" }
                          : null
                      }
                    >
                      <h6
                        style={
                          payInstuction == 2 ? styles.size14bold : styles.size14
                        }
                      >
                        M-{payment}
                      </h6>
                    </button>
                    <button
                      onClick={() => setPayInstuction("3")}
                      style={
                        payInstuction == 3
                          ? { borderBottom: "1px solid #5CB85F" }
                          : null
                      }
                    >
                      <h6
                        style={
                          payInstuction == 3 ? styles.size14bold : styles.size14
                        }
                      >
                        {payment} Klik
                      </h6>
                    </button>
                    <button
                      onClick={() => setPayInstuction("4")}
                      style={
                        payInstuction == 4
                          ? { borderBottom: "1px solid #5CB85F" }
                          : null
                      }
                    >
                      <h6
                        style={
                          payInstuction == 4 ? styles.size14bold : styles.size14
                        }
                      >
                        Internet Banking
                      </h6>
                    </button>
                  </div>
                  <div className="step-payment-instruction">
                    {payInstuction == 1 ? (
                      <ul
                        style={{ marginLeft: -10, color: "#8A8A8A" }}
                        className="mt-4"
                      >
                        <li>Masukkan kartu ATM, lalu PIN</li>
                        <li>
                          Pilih menu Transaksi Lainnya - Transfer - Ke Rek{" "}
                          {payment} Virtual Account
                        </li>
                        <li>
                          Masukkan nomor BCA Virtual Account : 70020+Order ID
                          <br />
                          Contoh: <br />
                          No. Peserta: 12345678, maka ditulis 7002012345678
                        </li>
                        <li>
                          Layar ATM akan menampilkan konfirmasi, ikuti instruksi
                          untuk menyelesaikan transaksi
                        </li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    ) : payInstuction == 2 ? (
                      <ul
                        style={{ marginLeft: -10, color: "#8A8A8A" }}
                        className="mt-4"
                      >
                        <li>
                          Masuk ke Aplikasi {payment} mobile, lalu masukkan PIN
                        </li>
                        <li>
                          Pilih menu Transaksi Lainnya - Transfer - Ke Rek{" "}
                          {payment} Virtual Account
                        </li>
                        <li>
                          Masukkan nomor BCA Virtual Account : 70020+Order ID
                          <br />
                          Contoh: <br />
                          No. Peserta: 12345678, maka ditulis 7002012345678
                        </li>
                        <li>
                          Layar ATM akan menampilkan konfirmasi, ikuti instruksi
                          untuk menyelesaikan transaksi
                        </li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    ) : payInstuction == 3 ? (
                      <ul
                        style={{ marginLeft: -10, color: "#8A8A8A" }}
                        className="mt-4"
                      >
                        <li>Masuk ke {payment} Klik, lalu masukkan PIN</li>
                        <li>
                          Pilih menu Transaksi Lainnya - Transfer - Ke Rek{" "}
                          {payment} Virtual Account
                        </li>
                        <li>
                          Masukkan nomor BCA Virtual Account : 70020+Order ID
                          <br />
                          Contoh: <br />
                          No. Peserta: 12345678, maka ditulis 7002012345678
                        </li>
                        <li>
                          Layar ATM akan menampilkan konfirmasi, ikuti instruksi
                          untuk menyelesaikan transaksi
                        </li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    ) : payInstuction == 4 ? (
                      <ul
                        style={{ marginLeft: -10, color: "#8A8A8A" }}
                        className="mt-4"
                      >
                        <li>
                          Masuk ke {payment} internet banking, lalu masukkan PIN
                        </li>
                        <li>
                          Pilih menu Transaksi Lainnya - Transfer - Ke Rek{" "}
                          {payment} Virtual Account
                        </li>
                        <li>
                          Masukkan nomor BCA Virtual Account : 70020+Order ID
                          <br />
                          Contoh: <br />
                          No. Peserta: 12345678, maka ditulis 7002012345678
                        </li>
                        <li>
                          Layar ATM akan menampilkan konfirmasi, ikuti instruksi
                          untuk menyelesaikan transaksi
                        </li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="confirmPayment">
              {dateConfirm == "" ? (
                <div className="left-item">
                  <h6 style={styles.size14}>
                    Klik konfirmasi pembayaran untuk mempercepat proses
                    pengecekan
                  </h6>
                  <button
                    className="sewa-button confirm-button mt-2"
                    onClick={confirmHandler}
                  >
                    Konfirmasi Pembayaran
                  </button>
                </div>
              ) : isConfirm != "" ? (
                <div className="container-confirm-pay">
                  <div className="title-confirm-pay">
                    <div className="left-item">
                      <h6 style={styles.size14bold}>Konfirmasi Pembayaran</h6>
                    </div>
                    <div className="righ-item">
                      <Countdown
                        date={dateConfirm + 599000}
                        renderer={rendererConfirm}
                      />
                    </div>
                  </div>
                  <h6 style={styles.size14} className="mt-2">
                    Terima kasih telah melakukan konfirmasi pembayaran.
                    <br /> Pembayaranmu akan segera kami cek tunggu kurang lebih
                    10 menit untuk mendapatkan konfirmasi.
                  </h6>
                  <h6 style={styles.size14bold} className="mt-4">
                    Upload Bukti Pembayaran
                  </h6>
                  <h6 style={styles.size14} className="mt-3">
                    Untuk membantu kami lebih cepat melakukan pengecekan. Kamu
                    bisa upload bukti bayarmu
                  </h6>
                  <button className="sewa-button confirm-button mt-2">
                    Upload
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={() => navigate(0)}>
        <Modal.Header closeButton>
          <Modal.Title>Waktu Habis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Yah, waktu kamu untuk melakukan konfirmasi pembayaran sudah habis.
          Kembali ke halaman seebelumnya dan lakukan pembayaran ulang!
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
};

export default FinishPayment;

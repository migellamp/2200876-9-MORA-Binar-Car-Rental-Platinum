import * as React from "react";
import Navbar from "../../PageComponent/Navbar";
import Footer from "../../PageComponent/Footer";
import "./style.css";
import { useNavigate } from "react-router-dom";
import SuccesImage from "../../../image/success.png";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import invoiceImage from "../../../invoice.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Link } from "react-router-dom";

const TicketPage = () => {
  const navigate = useNavigate();
  const [isBackPayment, setIsBackPayment] = React.useState(false);
  const [pageNumber] = React.useState(1);
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  //   if (isBackPayment === true) return <PaymentPage></PaymentPage>;
  //   if (a === true) return <PaymentPage></PaymentPage>;
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

  const backToFirstPaymentPage = () => {
    setIsBackPayment(true);
  };
  if (isBackPayment === true) return navigate("/");
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
                    <h5 style={styles.size14bold}>Tiket</h5>
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
                  <span className="circle" style={styles.isActive}>
                    <h6 style={styles.size10}>3</h6>
                  </span>
                  <h5 style={styles.size12}>Tiket</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ticket-body">
        <div className="ticket-logo mt-5">
          <img className="mb-3" src={SuccesImage} alt="" />
          <h5 style={styles.size14bold}>Pembayaran Berhasil!</h5>
          <p style={styles.size14}>
            Tunjukkan invoice ini ke petugas BCR di titik temu.
          </p>
        </div>
        <div className="ticket-viewer mt-3">
          <div className="top-viewer">
            <div className="top-title">
              <h5 style={styles.size14bold}>Invoice</h5>
            </div>
            <div className="top-download">
              <Link to={invoiceImage} target="_blank" download>
                <button>
                  <i className="fa fa-download" aria-hidden="true"></i> Unduh
                </button>
              </Link>
            </div>
          </div>
          <div className="container-pdf mt-3">
            <Document file={invoiceImage}>
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TicketPage;

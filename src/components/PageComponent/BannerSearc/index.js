import * as React from "react";
import "./style.css";
import carImage from "../../../image/img_car.png";

const BannerSearch = () => {
  return (
    <>
      <div className="container-banner-all">
        <div className="row container-isi-banner">
          <div className="col banner-page container-text">
            <div className="text-mobil">
              <h1>Sewa & Rental Mobil Terbaik di kawasan Surabaya</h1>
              <h6
                style={{
                  fontSize: 14,
                  fontWeight: "bolders",
                  marginBottom: 16,
                }}
              >
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.{" "}
              </h6>
            </div>
          </div>
          <div className="col banner-page bg-mobil">
            <div className="image-mobil">
              <img className="img-mobil" src={carImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSearch;

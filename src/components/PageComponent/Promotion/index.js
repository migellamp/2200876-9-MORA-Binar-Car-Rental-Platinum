import checkIcon from "../../../image/img-check.png";
import serviceGirlImage from "../../../image/img_service.png";
import "./style.css";
import * as React from "react";

const Promotion = () => {
  return (
    <>
      <div className="row container-promosi" id="bannerSection">
        <div className="col image-promosi">
          <img src={serviceGirlImage} alt="" />
        </div>
        <div className="col text-our-service">
          <div className="container-our-service mb-5">
            <h2 style={{ marginBottom: 32 }}>
              Best Car Rental for any kind of trip in Surabaya!
            </h2>
            <h6>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </h6>
            <div className="top-services">
              <div className="eachServices" style={{ marginTop: 16 }}>
                <img src={checkIcon} alt="" style={{ marginRight: 16 }} />
                <h6>Sewa Mobil Dengan Supir di Bali 12 Jam</h6>
              </div>
              <div className="eachServices" style={{ marginTop: 16 }}>
                <img src={checkIcon} alt="" style={{ marginRight: 16 }} />
                <h6>Sewa Mobil Lepas Kunci di Bali 24 Jam</h6>
              </div>
              <div className="eachServices" style={{ marginTop: 16 }}>
                <img src={checkIcon} alt="" style={{ marginRight: 16 }} />
                <h6>Sewa Mobil Jangka Panjang Bulanan</h6>
              </div>
              <div className="eachServices" style={{ marginTop: 16 }}>
                <img src={checkIcon} alt="" style={{ marginRight: 16 }} />
                <h6>Gratis Antar - Jemput Mobil di Bandara</h6>
              </div>
              <div className="eachServices" style={{ marginTop: 16 }}>
                <img src={checkIcon} alt="" style={{ marginRight: 16 }} />
                <h6>Layanan Airport Transfer / Drop in Out</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotion;

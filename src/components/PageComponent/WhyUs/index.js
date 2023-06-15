import "./style.css";
import completeIcon from "../../../image/icon_complete.png";
import priceIcon from "../../../image/icon_price.png";
import professionalIcon from "../../../image/icon_professional.png";
import timeIcon from "../../../image/icon_24hrs.png";
import * as React from "react";

const WhyUs = () => {
  return (
    <div className="container-whyus" id="whyUsSection">
      <div className="card-whyus">
        <div className="text-whyus mb-4">
          <h1>Why Us?</h1>
          <h6>Mengapa harus pilih Binar Car Rental ?</h6>
        </div>
        <div className="card-wrapper">
          <div className="isi-card mb-3">
            <img src={completeIcon} alt="" className="mb-3" />
            <h5 className="mb-3">Mobil Lengkap</h5>
            <h6>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </h6>
          </div>
          <div className="isi-card mb-3">
            <img src={priceIcon} alt="" className="mb-3" />
            <h5 className="mb-3">Harga Murah</h5>
            <h6>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </h6>
          </div>
          <div className="isi-card mb-3">
            <img src={timeIcon} alt="" className="mb-3" />
            <h5 className="mb-3">Layanan 24 Jam</h5>
            <h6>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </h6>
          </div>
          <div className="isi-card mb-3">
            <img src={professionalIcon} alt="" className="mb-3" />
            <h5 className="mb-3">Sopir Profesional</h5>
            <h6>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

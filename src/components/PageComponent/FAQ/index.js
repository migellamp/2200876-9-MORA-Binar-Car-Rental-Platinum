import Dropdown from "../Dropdown";
import { DropdownBottom } from "../Dropdown";
import "./style.css";
import * as React from "react";

const Question = () => {
  return (
    <div className="container-all-question" id="faqSection">
      <div className="container-question">
        <div className="wrapper-question">
          <div className="desc-question">
            <h2>Frequently Asked Question</h2>
            <h6>Pertanyaan seputar persewaan mobil di binar car rental </h6>
          </div>
          <div className="dropdown-question-page">
            <div className="dropdown-wrapper">
              <Dropdown
                faq="Apa saja syarat yang dibutuhkan?"
                answer="Syarat yang dibutuhkan untuk melakukan penyewaan mobil di Binar Car Rental ialah pastikan kamu sudah memiliki KTP dan SIM, dan harus bisa mengendarai kendaraan yang diinginkan. Jika pemesanan lebih dari 1 hari maka pembeli harus setidaknya menyerahkan uang sebesar 2x Harga sewa mobil sebagai uang aman atau mengganti jika terdapat hal-hal yang tidak diinginkan"
              />

              <Dropdown
                faq="Berapa hari minimal sewa mobil lepas kunci?"
                answer="Tidak ada batas minimal waktu untuk pembeli menyewa mobil di Binar Car Rental, namun banyaknya biaya akan tergantung pada lamanya pembeli menyewa mobil"
              />

              <Dropdown
                faq="Berapa hari sebelumnya sebaiknya booking sewa mobil?"
                answer="Minimal booking mobil h-1 sebelum mobil digunakan"
              />

              <Dropdown
                faq="Apakah ada biaya antar-jemput?"
                answer="Biaya antar jemput akan ditanggung oleh pihak Binar Car Rental jika pembeli menyewa hingga 12 Jam, Jika kurang dari itu maka akan dikenakan biaya sebesar Rp. 50.000,00"
              />

              <DropdownBottom
                faq="Bagaimana jika terjadi kecelakaan?"
                answer="Kami mohon maaf atas kejadian yang kamu alami.  Penyewa diharap berkendara dengan hati-hati, PELAN-PELAN ASAL SELAMAT"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

import * as React from "react";
import Navbar from "../../PageComponent/Navbar/index";
import Banner from "../../PageComponent/Banner/index";
import WhyUs from "../../PageComponent/WhyUs/index";
import Testimonial from "../../PageComponent/Testimonial";
import Promotion from "../../PageComponent/Promotion/index";
import Question from "../../PageComponent/FAQ";
import Footer from "../../PageComponent/Footer";
import "../../../App.css";
const LandingPage = () => {
  // const buttonContainer = document.getElementById('button-container-banner');
  // buttonContainer.innerHTML = `
  //     <button class="sewa-button">Mulai Sewa Mobil</button>
  // `
  return (
    <>
      <Navbar />
      <Banner />
      <Promotion />
      <WhyUs />
      <Testimonial />
      <Question />
      <Footer />
    </>
  );
};

export default LandingPage;

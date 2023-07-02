import * as React from "react";
import Navbar from "../../PageComponent/Navbar/index";
import Banner from "../../PageComponent/Banner/index";
import WhyUs from "../../PageComponent/WhyUs/index";
import Testimonial from "../../PageComponent/Testimonial";
import Promotion from "../../PageComponent/Promotion/index";
import Question from "../../PageComponent/FAQ";
import Footer from "../../PageComponent/Footer";
import "../../../App.css";
import { Navigate } from "react-router-dom";

const LandingPage = () => {
  // const buttonContainer = document.getElementById('button-container-banner');
  // buttonContainer.innerHTML = `
  //     <button class="sewa-button">Mulai Sewa Mobil</button>
  // `

  const role = localStorage.getItem('role')

  if (document.cookie === "" ) {
    return <Navigate to="/signin" />;
  } else if (role === "Admin") {
    return <Navigate to="/signin" />;
  }
  
  
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

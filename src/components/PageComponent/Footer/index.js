import "./style.css";
import * as React from "react";

import TwitchIcon from "../../../image/icon_twitch.png";
import MailIcon from "../../../image/icon_mail.png";
import TwitterIcon from "../../../image/icon_twitter.png";
import FacebookIcon from "../../../image/icon_facebook.png";
import InstagramIcon from "../../../image/icon_instagram.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="text-center text-lg-start">
      <section className="container-all-footer">
        <div className="container-footer text-center text-md-center mt-5">
          <div className="mt-3 wrapper-footer">
            <div className="address-footer mb-4">
              <ul className="list-unstyled mb-0 text-start">
                <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                <li>binarcarrental@gmail.com</li>
                <li>081-233-334-808</li>
              </ul>
            </div>

            <div className="mb-4 text-start navbar-in-footer">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/#bannerSection" className="text-dark">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/#whyUsSection" className="text-dark">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="/#testimonialSection" className="text-dark">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a href="/#faqSection" className="text-dark">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-footer text-start">
              <ul className="list-unstyled mb-0">
                <li className="title-contact">Connect with us</li>
                <li>
                  <a href="https://www.facebook.com" className="text-dark">
                    <img src={FacebookIcon} alt="" />
                  </a>
                  <a href="https://www.instagram.com" className="text-dark">
                    <img src={InstagramIcon} alt="" />
                  </a>
                  <a href="https://www.twitter.com" className="text-dark">
                    <img src={TwitterIcon} alt="" />
                  </a>
                  <a href="https://www.gmail.com" className="text-dark">
                    <img src={MailIcon} alt="" />
                  </a>
                  <a href="https://www.twitch.com" className="text-dark">
                    <img src={TwitchIcon} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="info-footer text-start">
              <ul className="list-unstyled mb-0">
                <li className="title-contact">Copyright Binar 2022</li>
                <li>
                  <a
                    className="navbar-brand navbar-judul"
                    href="/"
                    onClick={() => {
                      return navigate("/");
                    }}
                  >
                    Rental Binar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

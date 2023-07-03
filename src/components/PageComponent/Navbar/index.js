import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import CloseIcon from "../../../image/icon-close.png";
import * as React from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar((prev) => !prev);
    console.log(sidebar);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="container-navbar">
        <nav className="navbar navbar-expand-sm fixed-top navbar-light">
          <a
            className="navbar-brand navbar-judul"
            href="/"
            onClick={() => {
              return navigate("/");
            }}
          >
            Rental Binar
          </a>
          <button
            onClick={showSidebar}
            style={
              sidebar ? { visibility: "hidden" } : { visibility: "visible" }
            }
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {sidebar && (
            <div className="container-sidebar">
              <div className="wrapper-sidebar">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item title-first">
                    <a
                      className="nav-link first-to-button title-sidebar"
                      href="/#bannerSection"
                    >
                      BCR
                    </a>
                    <img onClick={showSidebar} src={CloseIcon} alt="" />
                  </li>
                  <li className="nav-item sidebar-funct">
                    <a className="nav-link" href="/#bannerSection">
                      Our Services
                    </a>
                  </li>
                  <li className="nav-item sidebar-funct">
                    <a className="nav-link" href="/#whyUsSection">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item sidebar-funct">
                    <a className="nav-link" href="/#testimonialSection">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item sidebar-funct">
                    <a className="nav-link" href="/#faqSection">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div
            className="collapse navbar-collapse navbarItem"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/#bannerSection">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#whyUsSection">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#testimonialSection">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#faqSection">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

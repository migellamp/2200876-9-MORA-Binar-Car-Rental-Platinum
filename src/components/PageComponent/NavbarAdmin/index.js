import { useNavigate } from "react-router-dom";
import "./style.css";
import CloseIcon from "../../../image/icon-close.png";
import * as React from "react";
import { Button } from "react-bootstrap";

const NavbarAdmin = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const showSidebar = () => {
    setSidebar((prev) => !prev);
    console.log(sidebar);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="container-navbar ">
        <nav className="navbar navbar-expand-sm fixed-top navbar-light">
          <a
            className="navbar-brand navbar-judul"
            href="/admin/dashboard"
            onClick={() => {
              return navigate("/admin/dashboard");
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
                      href="/admin/dashboard"
                    >
                      BCR
                    </a>
                    <img onClick={showSidebar} src={CloseIcon} alt="" />
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/admin/dashboard">
                      List Car
                    </a>
                  </li>

                  <li>
                    <Button
                      onClick={() => {
                        document.cookie = `uidTokenBinarApp=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
                        localStorage.removeItem("role");
                        return navigate("/admin");
                      }}
                      className="btn btn-primary btn-block w-10 h-2"
                      style={{ height: 40 }}
                    >
                      Log Out
                    </Button>
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
                <a className="nav-link" href="/admin/list-car">
                  List Car
                </a>
              </li>
              <li>
                {document.cookie.includes("uidTokenBinarApp") && (
                  <Button
                    onClick={() => {
                      document.cookie = `uidTokenBinarApp=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
                      localStorage.removeItem("role");
                      return navigate("/admin");
                    }}
                    className="btn btn-primary btn-block w-10 h-2"
                    style={{ height: 40 }}
                  >
                    Log Out
                  </Button>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarAdmin;

import React from "react";
import "./style.css";
// import ICHome from "../../../../image/home.png";
// import ICCar from "../../../../image/fi_truck.png";
const Navbar = ({ children }) => {
  return (
    <>
      <aside className="main-sidebar bg-primary">
        <li className="nav-item ml-3">
          <a href="#" className="nav-link">
            <p>Binar</p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/admin/dashboard" className="nav-link">
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/list-car" className="nav-link">
                <p>Car</p>
              </a>
            </li>
          </ul>
        </li>
      </aside>
      <nav className="main-header navbar-nav navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default Navbar;

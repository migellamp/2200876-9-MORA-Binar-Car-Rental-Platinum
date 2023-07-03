import React, { useContext, useEffect, useState } from "react";
import CarData from "../../../PageComponent/Admin/CarData";

import FilterListCar from "../../../PageComponent/Admin/FilterListCar";
import axios from "axios";
import Modals from "../../../PageComponent/Admin/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../PageComponent/Admin/Button";
import { Cookies } from "react-cookie";
// import Navbar from "../../../PageComponent/Admin/Navbar";
import { messageContext } from "../../../context/mesage";
import Navbar from "../../../PageComponent/Admin/Navbar";
// import Navbar from "../../../PageComponent/Admin/Navbar";

export default function ListCar() {
  const cookies = new Cookies();
  const { message, showMessage, setMessageHandling } =
    useContext(messageContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [idDelete, setIdDelete] = useState("");
  const token = cookies.get("uidTokenBinarApp");
  const location = useLocation();

  useEffect(() => {
    if (!token) navigate("/admin");
    axios
      .get(`${process.env.REACT_APP_BASEURL}/admin/v2/car?page=1&pageSize=12`, {
        headers: {
          access_token: token,
        },
      })
      .then((res) => {
        console.log("res ", res);
        setData(res.data.cars);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  }, [modalShow, location.key]);

  const showModalHandling = (id) => {
    setModalShow(true);
    setIdDelete(id);
  };

  const deleteHandling = () => {
    axios
      .delete(`${process.env.REACT_APP_BASEURL}/admin/car/${idDelete}`, {
        headers: {
          access_token: token,
        },
      })
      .then((res) => {
        console.log({ res });
        setMessageHandling("berhasil Delete data");
        setModalShow(false);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  };

  const onChangeFilter = (param) => {
    let url;
    if (param) {
      url = `${process.env.REACT_APP_BASEURL}/admin/v2/car?category=${param}&page=1&pageSize=12`;
    } else {
      url = `${process.env.REACT_APP_BASEURL}/admin/v2/car?page=1&pageSize=12`;
    }
    axios
      .get(url, {
        headers: {
          access_token: token,
        },
      })
      .then((res) => {
        console.log("res ", res);
        setData(res.data.cars);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  };

  return (
    <Navbar>
      <Modals
        deleteHandling={deleteHandling}
        onClickCancel={() => setModalShow(false)}
        show={modalShow}
        idDelete={idDelete}
        onHide={() => setModalShow(false)}
      />

      <div className="content-wrapper  px-5">
        <div className="px-2  ">
          {showMessage == true && (
            <div className="alert alert-primary text-center" role="alert">
              {message}
            </div>
          )}
          <p>
            <span className="text-bold">Cars &gt;</span> List Car
          </p>
          <h3>List Car</h3>
        </div>
        <div className="d-flex justify-content-between">
          <FilterListCar onChangeFilter={(value) => onChangeFilter(value)} />

          <Button
            onClick={() => navigate("/admin/add-new-car")}
            title="+ Add New Car"
          />
        </div>

        <div className="row">
          {data.map((res) => {
            return (
              <CarData
                onClickEdit={() => navigate(`/admin/edit-car/${res.id}`)}
                onClickDelete={() => showModalHandling(res.id)}
                data={res}
                key={res.id}
              />
            );
          })}
        </div>
      </div>
    </Navbar>
  );
}

import React, { useContext, useEffect, useState } from "react";
import Button from "../../../PageComponent/Admin/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Cookies } from "react-cookie";
import { messageContext } from "../../../context/mesage";
import Navbar from "../../../PageComponent/Admin/Navbar";
const categoryData = [
  { id: 1, label: "2 - 4 Orang", value: "small" },
  { id: 2, label: "4 - 6 Orang", value: "medium" },
  { id: 3, label: "6 - 8 Orang", value: "large" },
];

export default function EditCar() {
  const cookies = new Cookies();
  const token = cookies.get("uidTokenBinarApp");
  const navigate = useNavigate();
  let { id } = useParams();
  // const [detailData, setDetailData] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState([]);
  const [category, setCategory] = useState("");
  const [changeImage, setChangeImage] = useState(false);
  const { setMessageHandling } = useContext(messageContext);

  console.log({ category, changeImage });

  useEffect(() => {
    if (!token) navigate("/admin");
    axios
      .get(`${process.env.REACT_APP_BASEURL}/admin/car/${id}`, {
        headers: {
          access_token: token,
        },
      })
      .then((res) => {
        console.log("res ", res);
        setName(res.data?.name);
        setPrice(res.data?.price);
        setImage(res.data?.image);
        setCategory(res.data?.category);
        // setDetailData(res.data);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  }, []);

  const editCar = () => {
    const priceConvert = parseInt(price);

    const payload = new FormData();
    payload.append("name", name);
    payload.append("price", priceConvert);
    payload.append("category", category);
    payload.append("status", true);
    if (changeImage === true) payload.append("image", image.files);
    axios
      .put(`${process.env.REACT_APP_BASEURL}/admin/car/${id}`, payload, {
        headers: {
          contentType: "multipart/form-data",
          access_token: token,
        },
      })
      .then((res) => {
        console.log("ress ", res);
        setMessageHandling("berhasil edit data");
        navigate("/admin/list-car");

        navigate(0);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <Navbar>
      <div className="content-wrapper bg-white px-4">
        <h3>Edit Car</h3>
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Nama</label>
            <div className="col-sm-10">
              <input
                value={name}
                type="name"
                className="form-control"
                id="inputName"
                placeholder="Isi Nama"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Harga</label>
            <div className="col-sm-10">
              <input
                value={price}
                type="price"
                className="form-control"
                id="inputPrice"
                placeholder="Isi Harga"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Foto</label>
            <div className="col-sm-10">
              <input
                type="file"
                accept="image/*"
                defaultValue={image?.name}
                onChange={(e) => {
                  setChangeImage(true);
                  setImage({
                    files: e.target.files[0],
                    name: e.target.files[0].name,
                  });
                }}
                className="form-control"
                placeholder={"input"}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Kategori</label>
            <div className="col-sm-10">
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="form-select"
              >
                <option selected={category ? false : true}>
                  --- Pilih Kategori ----
                </option>
                {categoryData.map((res) => {
                  return (
                    <option
                      selected={category === res.value}
                      key={res.id}
                      value={res.value}
                    >
                      {res.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="d-flex">
            <Button
              title="Cancel"
              outline
              onClick={() => navigate("/admin/list-car")}
            />
            <div className="px-3" />
            <Button title="Save" onClick={editCar} />
          </div>
        </form>
      </div>
    </Navbar>
  );
}

import DefaultCar from "../../../../image/innova.png";
import ICUser from "../../../../image/icon_users.png";
import ICTrash from "../../../../image/fi_trash-2.png";
import ICEdit from "../../../../image/fi_edit.png";
import { NumericFormat } from "react-number-format";
import "./style.css";

function CarData({ image, name, price, description, id }) {
  const detail = "small";
  return (
    <div className="my-4 container-car">
      <div>
        <img src={image ? image : DefaultCar} alt="car" className="center" />
        <div>
          <h6 className="label">Nama/ Tipe Mobil</h6>
          <NumericFormat
            value={20000000}
            prefix="Rp. "
            suffix=" / Hari"
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
          {/* <h6 className="text-subtitle">Rp{price} / Hari</h6> */}
          <div className="d-flex">
            <div style={{ justifyContent: "center" }}>
              <img
                src={ICUser}
                alt="user"
                style={{
                  width: 12,
                  height: 12,
                  marginBottom: 5,
                  marginRight: 10,
                }}
              />
            </div>
            <h6 className="text-list">
              {detail.category === "small"
                ? "2 - 4"
                : detail.category === "medium"
                ? "4 - 6"
                : "6 - 8"}{" "}
              Orang
            </h6>
          </div>
          <div className="d-flex">
            <div style={{ justifyContent: "center" }}>
              <img
                src={ICUser}
                alt="user"
                style={{
                  width: 12,
                  height: 12,
                  marginBottom: 5,
                  marginRight: 10,
                }}
              />
              <text>Updated at 4 Apr 2022, 09.00</text>
            </div>
          </div>
          <h6 className="text-subtitle justify">{description}</h6>
          <div className="d-flex">
            <button
              type="button"
              className="btn  btn-outline-danger p-2 "
              style={{ width: "100%", marginRight: 3 }}
            >
              <img
                src={ICTrash}
                alt="user"
                style={{
                  width: 12,
                  height: 12,
                  marginBottom: 5,
                  marginRight: 10,
                }}
              />
              Delete
            </button>
            <button
              type="button"
              className="btn btn-success p-2"
              style={{ width: "100%", marginLeft: 3 }}
            >
              <img
                src={ICEdit}
                alt="user"
                style={{
                  width: 12,
                  height: 12,
                  marginBottom: 5,
                  marginRight: 10,
                }}
              />
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarData;

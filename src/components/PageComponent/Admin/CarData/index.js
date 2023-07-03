import React from "react";

import ICUser from "../../../../image/icon_users.png";
import ICTrash from "../../../../image/fi_trash-2.png";
import ICEdit from "../../../../image/fi_edit.png";
import { NumericFormat } from "react-number-format";
import "./style.css";

function CarData({ description, data, onClickDelete, onClickEdit }) {
  return (
    <div className=" col-lg-4">
      <div className="my-4 container-car">
        <div>
          <img src={data.image} alt="car" className="center" />
          <div>
            <h6 className="label">{data.name}</h6>
            <NumericFormat
              value={data.price}
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
              <h6 className="text-list">{data.category}</h6>
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
                onClick={onClickDelete}
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
                onClick={onClickEdit}
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
    </div>
  );
}

export default CarData;

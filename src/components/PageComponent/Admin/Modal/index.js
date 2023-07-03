import React from "react";
import { Modal } from "react-bootstrap";
import ICModals from "../../../../image/img-modal.png";
import Button from "../Button";

function Modals(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="text-center">
          <img src={ICModals} className="my-5" />
          <h4 className="font-weight-bold">Menghapus Data Mobil</h4>
          <p>
            Setelah dihapus, data mobil tidak dapat dikembalikan. <br />
            Yakin ingin menghapus?
          </p>
        </div>
        <div className="d-flex justify-content-around">
          <Button onClick={props.deleteHandling} title="Ya" />
          <Button onClick={props.onClickCancel} outline title="Tidak" />
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default Modals;

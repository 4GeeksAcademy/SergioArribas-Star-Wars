import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmationToDelete from "../component/ConfirmationToDeleteModal.jsx";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const ContactInfo = ({ name, email, address, phone, id }) => {
  const { actions } = useContext(Context);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  function handleToEdit(contact) {
    actions.updateContactToEdit(contact);
    navigate("/updateContact");
  }

  function handleToOpenModal() {
    setOpenModal(true);
  }

  function handleToCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <img
            src="data:image/png;base64,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"
            className="d-flex mx-auto img-fluid rounded-circle mt-3 mb-3"
            alt="people"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-inline">
            <h5 className="card-title mb-3">{name}</h5>
            <div className="ms-5">
              <div className="col-md-10 d-flex justify-content-end mx-auto">
                <div className="pe-5">
                  <span
                    onClick={() =>
                      handleToEdit({ name, phone, email, address, id })
                    }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                </div>
                <div className="pe-5">
                  <span onClick={handleToOpenModal}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <p className="card-text pe-5 mb-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                </p>
              </div>
              <div>{address}</div>
            </div>
            <div className="d-flex">
              <div>
                <p className="card-text pe-5 mb-2">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </p>
              </div>
              <div>
                <div>{phone}</div>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <p className="card-text pe-5 mb-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                </p>
              </div>
              <div>{email}</div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmationToDelete
        modalTriggered={openModal}
        id={id}
        closeModal={handleToCloseModal}
      />
    </>
  );
};

export default ContactInfo;

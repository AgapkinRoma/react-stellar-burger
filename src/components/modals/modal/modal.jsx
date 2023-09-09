import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverylay from "../modal-overlay/modal-overlay";
const modalRootElement = document.getElementById("modal");
function Modal(props) {
  const closeModal = useCallback(() => {
    props.onClose(false);
  }, [props.onClose]);

  const closeOnOverlayClick = (e) => {
    if (e.target) {
      closeModal();
    }
  };
  React.useEffect(() => {
    const escapeCloseModal = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", escapeCloseModal);
    return () => {
      window.removeEventListener("keydown", escapeCloseModal);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <ModalOverylay onClick={closeOnOverlayClick} />
      <div className={styles.modalContent}>
        <div className={styles.titleContainer}>
          <p className="text text_type_main-large">{props.title}</p>
          <div className={styles.closeIcon}>
            <CloseIcon onClick={closeModal}></CloseIcon>
          </div>
        </div>
        {props.children}
      </div>
    </div>,
    modalRootElement
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;

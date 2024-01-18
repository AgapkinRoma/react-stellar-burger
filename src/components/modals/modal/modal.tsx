import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverylay from "../modal-overlay/modal-overlay";
import { MouseEvent } from "react";

const modalRootElement = document.getElementById("modal");
interface IModalProps {
  onClose: (value: boolean) => void;
  title: string;
  children: React.ReactNode;
}
function Modal(props: IModalProps) {
  const closeModal = useCallback(() => {
    props.onClose(false);
  }, [props.onClose]);

  const closeOnOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target) {
      closeModal();
    }
  };
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <ModalOverylay onClick={closeOnOverlayClick} />
      <div className={styles.modalContent}>
        <div className={styles.titleContainer}>
          <p className="text text_type_main-large">{props.title}</p>
          <div className={styles.closeIcon}>
            <CloseIcon type="primary" onClick={closeModal}></CloseIcon>
          </div>
        </div>
        {props.children}
      </div>
    </div>,
    modalRootElement as Element
  );
}

export default Modal;

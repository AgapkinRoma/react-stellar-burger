import React from "react";
import modalStyles from "../modal/modal.module.css";
import ModalOverylay from "../modal-overlay/modal-overlay";
import img from "../../../images/bun-default.svg";
import meat from "../../../images/immortal-meat.svg";
export default function Loader() {
  return (
    <div className={modalStyles.modal}>
      <div className={modalStyles.loaderContent}>
        <p className="text text_type_main-large">
          Ваш заказ начал готовиться пожалуйста подождите
        </p>
        <div className={modalStyles.rotateImageContainer}>
          <img src={img}></img>
          <img className={modalStyles.rotateImage} src={meat}></img>
          <img className={modalStyles.bottomImg} src={img}></img>
        </div>
      </div>
      <ModalOverylay />
    </div>
  );
}

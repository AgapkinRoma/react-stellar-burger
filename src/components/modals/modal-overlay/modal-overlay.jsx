import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";
function ModalOverylay(props) {
  return <div onClick={props.onClick} className={styles.overlay}></div>;
}

ModalOverylay.propsType = {
  onClick: PropTypes.func.isRequired,
};
export default ModalOverylay;

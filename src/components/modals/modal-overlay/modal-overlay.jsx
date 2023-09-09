import styles from "./modal-overlay.module.css";

function ModalOverylay(props) {
  return <div onClick={props.onClick} className={styles.overlay}></div>;
}

export default ModalOverylay;

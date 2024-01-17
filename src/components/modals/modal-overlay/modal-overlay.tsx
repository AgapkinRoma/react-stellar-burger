import styles from "./modal-overlay.module.css";

interface IModalOverlayProps{
  onClick?:(event: React.MouseEvent<HTMLDivElement>) => void;
}

function ModalOverylay(props:IModalOverlayProps) {
  return <div onClick={props.onClick} className={styles.overlay}></div>;
}

export default ModalOverylay;

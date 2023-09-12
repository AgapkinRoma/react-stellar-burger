import styles from "./ingridietns-about.module.css";
import PropTypes from "prop-types";
export default function IngridientsAbout({ text, quantity }) {
  return (
    <div className={`${styles.container} mt-8`}>
      <p className="text text_type_main-default text_color_inactive">{text}</p>
      <p className="text text_type_digits-default text_color_inactive">
        {quantity}
      </p>
    </div>
  );
}

IngridientsAbout.propTypes = {

    text: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired

}
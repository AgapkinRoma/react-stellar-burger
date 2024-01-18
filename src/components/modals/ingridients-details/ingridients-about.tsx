import styles from "./ingridietns-about.module.css";
interface IIngredientsAbout{
  text:string;
  quantity:number
}
export default function IngridientsAbout({ text, quantity }:IIngredientsAbout) {
  return (
    <div className={`${styles.container} mt-8`}>
      <p className="text text_type_main-default text_color_inactive">{text}</p>
      <p className="text text_type_digits-default text_color_inactive">
        {quantity}
      </p>
    </div>
  );
}


import styles from "./burger-ingridients.module.css";
import Buns from "./buns/buns";
import Sauces from './sauces/sauces'
import Mains from "./mains/mains";
import Tabs from "./tabs/tabs";
function BurgerIngridients() {
  
  return (
    <div className={`${styles.componentContainer} mt-10`}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <Tabs></Tabs>
      <p className="text text_type_main-medium mt-10">Булки</p>
      <div className={`${styles.scrollContainer} custom-scroll`}>
        <div className={styles.ingridientContainer}>
        <Buns/>
        </div>
        <p className="text text_type_main-medium mt-10">Соусы</p>
        <div className={styles.ingridientContainer}>
        <Sauces/>
        </div>
        <p className="text text_type_main-medium mt-10">Начинка</p>
        <div className={styles.ingridientContainer}>
        <Mains/>
        </div>
      </div>
    </div>
  );
}

export default BurgerIngridients;

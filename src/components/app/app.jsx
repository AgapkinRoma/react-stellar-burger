import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngridients from "../BurgerIngridients/BurgerIngridients";
function App() {
  return (
  <div className={styles.app}>
    <AppHeader></AppHeader>
  <nav style={{display:'flex',columnGap:"40px",justifyContent:"center"}}>
  <BurgerIngridients></BurgerIngridients>
  <BurgerConstructor></BurgerConstructor>
  </nav>
  </div>
  );
}

export default App;

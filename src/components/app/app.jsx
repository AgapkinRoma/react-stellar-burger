import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngridients from "../burger-ingridients/burger-ingridients";
function App() {
  return (
  <div className={styles.app}>
    <AppHeader/>
  <nav className={styles.container}>
  <BurgerIngridients/>
  <BurgerConstructor/>
  </nav>
  </div>
  );
}

export default App;

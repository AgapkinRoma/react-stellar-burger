import React, { useState, useEffect, useContext } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngridients from "../burger-ingridients/burger-ingridients";
import { IngredientsContext } from "../../services/ingridientsContext";
export const url = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [ ingredients, setIngredients ] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((data) => data.data)
      .then((data) => {
        setIngredients(data);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
        <main className={styles.container}>
          <BurgerIngridients />
          <BurgerConstructor />
        </main>
      </IngredientsContext.Provider>
    </div>
  );
}
export default App;

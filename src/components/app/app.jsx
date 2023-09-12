import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngridients from "../burger-ingridients/burger-ingridients";
export const url = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    return fetch(url)
      .then( res => {if (res.ok){
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`)
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
      <main className={styles.container}>
        <BurgerIngridients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
   
      </main>
    </div>
  );
}
export default App;

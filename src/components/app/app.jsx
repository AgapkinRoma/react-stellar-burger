import React, { useState, useEffect, useReducer } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngridients from "../burger-ingridients/burger-ingridients";
import { IngredientsContext } from "../../services/ingridientsContext";
import { ConstructorContext } from "../../services/constructorContext";
import { reducer } from "../../utils/reducer";

export const url = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [constructorIngredients, setConstructorIngredients] = useState({
    bun: null,
    ingredients: [],
  });

  const [error, setError] = useState(null);
  const [costState, dispatch] = useReducer(reducer, 0);

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
    <ConstructorContext.Provider
      value={{
        constructorIngredients,
        setConstructorIngredients,
        costState,
        dispatch,
      }}
    >
      <div className={styles.app}>
        <AppHeader />
        <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
          <main className={styles.container}>
            <BurgerIngridients />
            <BurgerConstructor />
          </main>
        </IngredientsContext.Provider>
      </div>
    </ConstructorContext.Provider>
  );
}
export default App;

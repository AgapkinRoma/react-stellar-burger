import React, { useState, useEffect, useReducer } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngridients from "../burger-ingridients/burger-ingridients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export const url = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={styles.container}>
          <BurgerIngridients />
          <BurgerConstructor />
        </main>
      </DndProvider>
    </div>
  );
}
export default App;

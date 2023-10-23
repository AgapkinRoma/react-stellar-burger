import React from "react";
import styles from "./constructor-burgers-page.module.css";
import AppHeader from "../../components/app-header/app-header";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngridients from "../../components/burger-ingridients/burger-ingridients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export default function ConstructorBurgersPage() {
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

import React from "react";
import ingridientStyles from '../burger-ingridients.module.css'
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
const Tabs =()=> {
const [current, setCurrent] = React.useState("one");
return(
    
    <div className={`${ingridientStyles.tabContainer} mt-5`}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
)
}

export default Tabs
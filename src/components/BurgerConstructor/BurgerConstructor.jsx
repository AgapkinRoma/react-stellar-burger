import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import bunDefault from "../../images/name=Краторная булка N-200inormal.svg";
import bunPurple from "../../images/bun-01.svg";
import sauceSpicy from "../../images/sauce-02.svg";
import sauceSpace from "../../images/sauce-44.svg";
import sauceTradition from "../../images/sauce-03.svg";
import sauceAlien from "../../images/sauce-01.svg";
import fillet from "../../images/name=Филе Люминесцентного тетраодонтимформаnormal.svg";
import immortalMeat from "../../images/name=Мясо бессмертных моллюсков Protostomianormal.svg";
import beefMeteor from "../../images/name=Говяжий метеорит (отбивная)normal.svg";
import marsBioCutlet from "../../images/name=Биокотлета из марсианской Магнолииnormal.svg";
import falianFruits from "../../images/name=Плоды фалленианского дереваnormal.svg";
import marsCrystalls from "../../images/name=Кристаллы марсианских альфа-сахаридовnormal.svg";
import mineralRings from "../../images/name=Хрустящие минеральные кольцаnormal.svg";
import miniSalad from "../../images/name=Мини-салат Экзо-Плантагоnormal.svg";
import asteroidCheese from "../../images/name=Сыр с астероидной плесеньюnormal.svg";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerConstructor.module.css';
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";
function BurgerConstructor() {
    return (
    <div className="mt-25">
      <div  style={{  maxHeight:'656px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div className={styles.container}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={20}
          thumbnail={bunDefault}
        />
        </div>
        <div className={`${styles.scrollContainer} custom-scroll`}>
       <div className={styles.iconContainer}>
       <DragIcon type="primary" />
        <ConstructorElement
          
          text='Соус традиционный галактический'
          price={30}
           thumbnail={sauceTradition}
          
         ></ConstructorElement>
         </div>
         <div className={styles.iconContainer}>
         <DragIcon type="primary" />
        <ConstructorElement
            
        
          text="Мясо бессмертных моллюсков Protostomia"
          price={300}
           thumbnail={immortalMeat}
           
        />
        </div>
     
        <div className={styles.iconContainer}>
          <DragIcon type="primary" />
           <ConstructorElement
         
        
          text="Плоды Фалленианского дерева"
          price={80}
           thumbnail={falianFruits}
           
        />
        </div>
        <div className={styles.iconContainer}>
          <DragIcon type="primary" />
           <ConstructorElement
         
        
          text="Хрустящие минеральные кольца"
          price={80}
           thumbnail={mineralRings}
           
        />
        </div>
        <div className={styles.iconContainer}>
          <DragIcon type="primary" />
           <ConstructorElement
          
        
          text="Хрустящие минеральные кольца"
          price={80}
           thumbnail={mineralRings}
           
        />
        </div>
        <div className={styles.iconContainer}>
          <DragIcon type="primary" />
           <ConstructorElement
          
        
          text="Мясо бессмертных моллюсков Protostomia"
          price={300}
           thumbnail={immortalMeat}
           
        />
        </div>
        <div className={styles.iconContainer}>
          <DragIcon type="primary" />
           <ConstructorElement
          
          
          text="Филе Люминесцентного тетраодонтимформа"
          price={300}
           thumbnail={fillet}
           
        />
        </div>
        </div>
        <div className={styles.container}>
           <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
           thumbnail={bunDefault}
           
        />
        </div>
      
        </div>
    
      <div className="mt-10" style={{display:'flex',alignItems:'center',columnGap:'40px',justifyContent:'flex-end'}}>
        <div style={{display:'flex',alignItems:'center',columnGap:"8px"}}>
      <p className="text text_type_digits-medium">610</p>
    
      <CurrencyIcon></CurrencyIcon>
    
      </div>
    
      <Button 

 htmlType="button" type="primary" size="large">
 Оформить заказ
</Button>


      </div>
      </div>
    
     
    );
  }

  export default BurgerConstructor;

 

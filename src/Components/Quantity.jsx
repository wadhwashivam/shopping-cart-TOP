import { useState } from "react";
import styles from "./Shop.module.css";

function Quantity(){
    const [quantity, setQuantity] = useState();

    function increaseHandle(){
        setQuantity(quantity + 1);
    }
    function decreaseHandle(){
        if (quantity >0){
            setQuantity(quantity - 1);
        }
    }
    return (
        <>
            <div className = {styles.quantityDiv}>
                <label htmlFor="quantity">Quantity: </label>
                <input type="number" name="quantity" className={styles.input}/>
                <div className= {styles.plusMinusButtons}>
                    <img src="/src/assets/plus.png" alt="Plus Image" className= {styles.plusMinusItemBtn} onClick={increaseHandle}/>
                    <img src="/src/assets/minus.png" alt="Minus Image" className= {styles.plusMinusItemBtn} onClick={decreaseHandle}/>
                </div>
                <button type="submit" className= {styles.button}>Add to Cart</button>
            </div>
        </>
    )
}

export default Quantity;
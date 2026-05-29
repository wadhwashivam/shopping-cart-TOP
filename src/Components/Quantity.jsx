import { useState } from "react";
import styles from "./Shop.module.css";

function Quantity(){
    const [quantity, setQuantity] = useState(0);

    function increaseHandle(){
        setQuantity(prev => prev + 1);
    }
    function decreaseHandle(){
        if (quantity > 0){
            setQuantity(prev => prev - 1);
        }
    }

    function handleChange(e){
        setQuantity(Number(e.target.value));
    }
    return (    
        <>
            <div className = {styles.quantityDiv}>
                <label htmlFor="quantity">Quantity: </label>
                <input type="number" name="quantity" className={styles.input} value={quantity} onChange={handleChange}/>
                <div className= {styles.plusMinusButtons}>
                    <img src="/src/assets/plus.png" alt="Plus Image" className= {styles.plusMinusItemBtn} onClick={increaseHandle}/>
                    <img src="/src/assets/minus.png" alt="Minus Image" className= {styles.plusMinusItemBtn} onClick={decreaseHandle}/>
                </div>
                <button type="submit" className= {styles.button}>Add to Cart</button>
                <p>{quantity}</p>
            </div>
        </>
    )
}

export default Quantity;
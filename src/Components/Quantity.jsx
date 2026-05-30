import styles from "./Shop.module.css";
import { useContext,useState } from "react";
import { CartContext } from "../context/CartContext";

function Quantity({product}){
    const { setCart } = useContext(CartContext);

    const [ quantity, setQuantity] = useState(0);
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

    function handleAddToCart(){
        if (quantity == 0){
            return ;
        }
        setCart(prevCart => {
            const existingItem = prevCart.find(
                item => item.id === product.id
            );
            if (existingItem){
                return prevCart.map(item =>
                    item.id === product.id ? {
                        ...item, quantity: item.quantity + quantity,
                    }: item
                );
            }
            return [
                ...prevCart,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image:product.image,
                    quantity,
                },
            ];
        });
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
                <button type="submit" className= {styles.button} onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </>
    )
}

export default Quantity;
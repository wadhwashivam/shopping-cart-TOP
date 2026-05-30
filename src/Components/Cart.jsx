import styles from "./Home.module.css";
import mainStyles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart(){
    const {cart} = useContext(CartContext);
    return(
        <>
        <div className={styles.primaryContainer}>
                {cart.map(item => {
                    return(
                        <div className= {mainStyles.cartPrimaryDiv} key = {item.id}>
                            <img src= {item.image} alt={item.title}/>
                            <div className={mainStyles.productDetails}>
                                <h2>{item.title}</h2>
                                <h2>${item.price}/unit</h2>
                            </div>
                            <div className={mainStyles.productQuantity}>
                                <h3>Quantity: {item.quantity}</h3>
                                <h3>Total: ${item.price * item.quantity}</h3>
                            </div>
                        </div>
                    )})}
                <div className={mainStyles.cartTotalDiv}>
                    <h1>Total:  ${cart.reduce((total, item) => total + item.price* item.quantity,0).toFixed(2)}</h1>
                </div>
        </div>  
        </>
    )
}


export default Cart;
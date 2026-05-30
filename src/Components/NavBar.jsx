import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useContext } from 'react';
import {CartContext} from "../context/CartContext";

function NavBar(){
    const { cart } = useContext(CartContext);
    return (
        <>
        <nav>
            <ul className= {styles.list}>
                <li className= {styles.listItems}><Link to = "/">Home</Link></li>
                <li className= {styles.listItems}><Link to = "/shop">Shop</Link></li>
                <li className= {styles.listItems}><Link to = "/cart">Cart ({cart.length})</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar(){
    return (
        <>
        <nav>
            <ul className= {styles.list}>
                <li className= {styles.listItems}><Link to = "/">Home</Link></li>
                <li className= {styles.listItems}><Link to = "/shop">Shop</Link></li>
                <li className= {styles.listItems}><Link to = "/cart">Cart</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;
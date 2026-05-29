import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Quantity from "./Quantity";
import mainStyles from "./Shop.module.css";

function Shop(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
         fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });

    },[]);


    return(
        <>
        <div className= {styles.primaryContainer}>
            {loading && <h1>Loading...</h1>}
            {/* <h1>This is the shop page</h1> */}
            <div className = {mainStyles.cardsParentDiv}>
                {products.map(product => {
                    return(    
                    <div className= {mainStyles.cardsDiv} key={product.id}>
                        <span className= {mainStyles.productTitle}>{product.title}</span> 
                        <img src={product.image} alt={product.title} className={mainStyles.productImage}/>              
                        <h2>${product.price}</h2>     
                        <Quantity />
                    </div>
                )})}
            </div>
        </div>
        </>
    )
}


export default Shop;
import styles from "./Home.module.css";
import Quantity from "./Quantity";
import mainStyles from "./Shop.module.css";

function Shop(){
    return(
        <>
        <div className= {styles.primaryContainer}>
            {/* <h1>This is the shop page</h1> */}
            <div className = {mainStyles.cardsParentDiv}>
                <div className= {mainStyles.cardsDiv}>
                    <span className= {mainStyles.productTitle}>Oxfords</span>
                    <Quantity />
                </div>
                <div className= {mainStyles.cardsDiv}>
                    <span className= {mainStyles.productTitle}>Derbies</span>
                    <Quantity />
                </div>
                <div className= {mainStyles.cardsDiv}>
                    <span className= {mainStyles.productTitle}>Loafers</span>
                    <Quantity />
                </div>
                <div className= {mainStyles.cardsDiv}>
                    <span className= {mainStyles.productTitle}>Brogues</span>
                    <Quantity />
                </div>
                <div className= {mainStyles.cardsDiv}>
                    <span className= {mainStyles.productTitle}>Chelsea Boots</span>
                    <Quantity />
                </div>
                <div className= {mainStyles.cardsDiv}>
                    <span className= {mainStyles.productTitle}>Sneakers</span>
                    <Quantity />
                </div>
                <div className= {mainStyles.cardsDiv}>
                    <span className= {mainStyles.productTitle}>Monk Strap Shoes</span>
                    <Quantity />
                </div>
                <div className= {mainStyles.cardsDiv}>
                    <span className= {mainStyles.productTitle}>Boat Shoes</span>
                    <Quantity />
                </div>
                <div className= {mainStyles.cardsDiv}>
                    <span className= {mainStyles.productTitle}>Chukka Shoes</span>
                    <Quantity />
                </div>
            </div>
        </div>
        </>
    )
}


export default Shop;
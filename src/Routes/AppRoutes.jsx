import {Routes, Route } from "react-router-dom";


import Home from "../Components/Home";
import Shop from "../Components/Shop";
import Cart from "../Components/Cart";

function AppRoutes({ cart, setCart }){
    return (
        <Routes>
            <Route path="/" element = {<Home />}/>      
            <Route path="/shop" element = {<Shop setCart = {setCart}/>}/>      
            <Route path="/cart" element = {<Cart cart = {cart}/>}/>      
        </Routes>
    );
}

export default AppRoutes;
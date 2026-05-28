import {Routes, Route } from "react-router-dom";


import Home from "../Components/Home";
import Shop from "../Components/Shop";
import Cart from "../Components/Cart";

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element = {<Home />}/>      
            <Route path="/shop" element = {<Shop />}/>      
            <Route path="/cart" element = {<Cart />}/>      
        </Routes>
    );
}

export default AppRoutes;
import { useState } from "react";
import NavBar from "./Components/NavBar";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  const [cart, setCart] = useState([]);

  
  return (
    <div>
      <NavBar cart = {cart}/>
      <AppRoutes cart = {cart} setCart = {setCart}/>
    </div>
  )
}

export default App

import { useState } from "react";
import Cartcontext from "./Cardcontextu";

function CartProvider({ children }) {
  const [cartitem, setcartItem] = useState([]);

  // add to cart

  function AddTocart(item) {
  const isExist = cartitem.find(i => i.id === item.id );

  if(isExist){
    setcartItem(
      cartitem.map((i) => i.id === item.id ? item : i)

    )
  }else{
    setcartItem((prev) => [...prev , item ])
  }
   
  }
 
  //  remove from cart

  function RemoveFromcart(id) {
    const cart = cartitem.filter((c) => c.id !== id);
    setcartItem(cart);
  }

  return (
    <Cartcontext.Provider value={{ RemoveFromcart, AddTocart, cartitem, cartitemlength : cartitem.length }}>
      {children}
    </Cartcontext.Provider>
  );
}

export default CartProvider;

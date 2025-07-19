import { useState } from "react";
import Cartcontext from "./Cardcontextu"

    
    function CartProvider ({children}) {

        const [cartitems , setcartItems]= useState([]);

        // add to cart

         function AddTocart(item){
            setcartItems(prev => [...prev , item])
         };

        //  remove from cart 

        function RemoveFromcart(id){
        const cart = cartitems.filter(c => c.id !== id );
        setcartItems(cart)
        }





      return (
       <Cartcontext.Provider>
        {children}
       </Cartcontext.Provider>
      )
    }
    
    export default CartProvider;
    
import { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import Cartcontext from "../../Context/Cardcontextu";
 
function Cart() {
  const {cartitem , RemoveFromcart , AddTocart , setCartitem} = useContext(Cartcontext);
const TotalPrice = Array.isArray(cartitem)
  ? cartitem.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)
  : "0.00";

  return (
    <div className="cart0">
      <h1 className="tit"> Your Shopping Cart</h1>
      <div className="cart">
        <div className="jdid1">
          {Array.isArray(cartitem) && cartitem.map((cart ) => (
            <CartItem  setCartitem={setCartitem} AddTocart={AddTocart} RemoveFromcart={RemoveFromcart} key={cart.id} cart={cart}/>
          ))}
          </div>
          <OrderSummary  TotalPrice={TotalPrice} />

      </div>
    </div>
  );
}

export default Cart;

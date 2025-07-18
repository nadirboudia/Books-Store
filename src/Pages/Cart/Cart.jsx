import { cartInfo } from "../../data/cart";
import "./Cart.css";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

function Cart() {
  const TotalPrice = cartInfo
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return (
    <div className="cart0">
      <h1 className="tit"> Your Shopping Cart</h1>
      <div className="cart">
        <div className="jdid1">
          {cartInfo.map((cart ) => (
            <CartItem key={cart.id} cart={cart}/>
          ))}
        </div>
        <OrderSummary TotalPrice={TotalPrice} />

      </div>
    </div>
  );
}

export default Cart;

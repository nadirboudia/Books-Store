
import {cartInfo} from '../../data/cart';
import './Cart.css';

function Cart() {
  return (
  <div className="cart0">
     <h1 className="tit"> Your Shopping Cart</h1>
      <div className='cart'>
        
    <div className='jdid1'>
      {cartInfo.map((cart, index) => (
  <div className="cart-content-info" key={index}>
    <div className="cart-content-first">
      <img
        src={`/books/${cart.image}`}
        alt={cart.title}
        className="cart-content-image"
      />
    </div>

    <div className="cart-content-second">
      <b>
        Title: <span className="span1">{cart.title}</span>
      </b>
      <br />
      <b>
        Author: <span className="span2">{cart.author}</span>
      </b>
    </div>

    <div className="cart-content-third">
      <div className="buttons">
        <button>+</button>
        <h2 style={{ fontWeight: "500" }}>{cart.quantity}</h2>
        <button>-</button>
      </div>
      <div className="price">${cart.price * cart.quantity}</div>
    </div>

    <i className="bi bi-trash trash-icon"></i>
  </div>
))}
    </div>



<div className='jdid2'>
  <div className="cart-content-info-2">
  <div className="cart-content-calculus">
    <h2 className="h">Order Summary</h2>

    <div className="line">
      Subtotal <span>${/* You can calculate total price here */}</span>
    </div>

    <div className="line">
      Shipping Cost <span>hhh</span>
    </div>

    <div className="line">
      Discount <span>kjkj</span>
    </div>

    <div className="line last">
      <h2>Total</h2> <span>${/* Total amount here */}</span>
    </div>
  </div>
</div>
</div>

    

 
   
    </div>
  </div>
  )
}

export default Cart

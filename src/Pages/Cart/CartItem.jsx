function CartItem({ cart }) {
  return (
    <div className="cart-content-info">
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
        <div className="price">${(cart.price * cart.quantity).toFixed(2)}</div>
      </div>

      <i className="bi bi-trash trash-icon"></i>
    </div>
  );
}

export default CartItem;

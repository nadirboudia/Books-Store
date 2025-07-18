function OrderSummary({ TotalPrice }) {
  return (
    <div className="jdid2">
      <div className="cart-content-info-2">
        <div className="cart-content-calculus">
          <h2 className="h">Order Summary</h2>

          <div className="line">
            Subtotal <span>${TotalPrice}</span>
          </div>

          <div className="line">
            Shipping Cost <span>0</span>
          </div>

          <div className="line">
            Discount <span>0</span>
          </div>

          <div className="line last">
            <h2>Total</h2> <span>${TotalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;

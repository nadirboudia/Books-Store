import "./Modal.css";
import Rating from "../Book-slider/Rating";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Cartcontext from "../../Context/Cardcontextu";
function Modal({ setOpenmodal, Bookinfo }) {
  const { image, title, inStock, rating, reviews, author, price } = Bookinfo;

  const { AddTocart } = useContext(Cartcontext);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="modal-container">
      <div className="modal-content">
        <i
          onClick={() => {
            setOpenmodal((prev) => !prev);
          }}
          className="bi bi-x-circle-fill modal-icon"
        ></i>

        <div className="modal-content-img">
          <img src={`/books/${image}`} alt={title} />
        </div>

        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{title}</h5>
          <div className="modal-content-info-stock">
            <b>Status : </b>{" "}
            <b style={{ color: inStock ? "green" : "red" }}>
              {" "}
              {inStock ? "InStock" : "Not in stock"}
            </b>
          </div>
          <div className="rate">
            <Rating rating={rating} reviews={reviews} />
          </div>
          <div className="modal-content-info-author">
            <b> Author :</b> <b className="b ">{author}</b>
          </div>
          <div className="modal-content-info-price">
            <b>Price : </b> <b className="pric">${price}</b>
          </div>
          <div className="modal-add-to-cart">
            <input
              type="number"
              min="1"
              max="100"
              className="modal-add-to-cart-input"
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (val >= 1 && val <= 100){
                setQuantity(val);

                }}}
            />
            <button
              onClick={() => {
                AddTocart({ ...Bookinfo, quantity: quantity });
              }}
              className="modal-add-to-cart-btn"
            >
              {" "}
              <i className="bi bi-cart-plus"></i> Add To Cart
            </button>
          </div>

          <Link to={`/book/${Bookinfo.id}`} className="modal-content-info-link">
            See More details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;

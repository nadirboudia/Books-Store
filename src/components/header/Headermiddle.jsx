import { useContext } from "react";
import "./Header.css";
import {Link} from "react-router-dom"
import Cartcontext from "../../Context/Cardcontextu";

function Headermiddle() {
  const {cartitemlength } = useContext(Cartcontext);
  return (
    <div className="header-middle">
      <Link to='/' className="header-middle-logo">
        <b>Book</b> <i className="bi bi-book"></i> <b>Store</b>
      </Link>
      <div className="header-middle-search-box">
        <input
          type="search"
          className="header-middle-search-input"
          placeholder="Search in book store ..."
        />
        <i className="bi bi-search"></i>
      </div>

      <Link to='/cart' className="header-middle-cart-wrapper">
        <i className="bi bi-cart2"></i>
          <b className="cart-notification"> {cartitemlength }</b>
      </Link>
    </div>
  );
}

export default Headermiddle;

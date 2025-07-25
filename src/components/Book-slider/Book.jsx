import { useState } from "react";
import "./Book.css";
import Rating from "./Rating";
import Modal from "../Modal/Modal"
import { useContext } from "react";
import Cartcontext from "../../Context/Cardcontextu";
function Book({ data }) {
  const [slideIndexx, setSlideIndexx] = useState(0);
  const [openmodal, setOpenmodal] = useState(false);
  const [bookinfo, setBookinfo] = useState(null);

  // handle modal 
    const {AddTocart} = useContext(Cartcontext);
  
  function Handlemodal(book){
    setOpenmodal(true)
    setBookinfo(book)
  }

  function Handleslide(direction) {
    if (direction === "left") {
      setSlideIndexx((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    } else {
      setSlideIndexx((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }
  }


  return (
    <div className="Book-slider-container">
      <i
        onClick={() => Handleslide("left")}
        className="bi bi-chevron-left Book-slider-arrow-left"
      ></i>

      <div
        style={{
          transform: `translateX(${slideIndexx * -300}px)`,
        }}
        className="Book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/books/${item.image}`}
              alt="item.title"
              className="Book-slide-item-img"
            />
            <h3 className="Book-slide-item-title">{item.title}</h3>
            <div className="Rating">
              <Rating rating={item.rating} reviews={item.reviews} />
            </div>
            <div className="Book-slide-item-price">${item.price}</div>
            <div className="Book-slide-icons-wrapper">
              <i onClick={()=>{
                Handlemodal(item)
              }}  className="bi bi-eye-fill hh"></i>
              <i onClick={()=>{
                AddTocart({...item , quantity : 1})
              }} className="bi bi-cart-fill hhh"></i>
            </div>

        
          </div>
        ))}
      </div>

      <i
        onClick={() => Handleslide("right")}
        className="bi bi-chevron-right Book-slider-arrow-right"
      ></i>
          {openmodal && <Modal openmodal={openmodal} setOpenmodal={setOpenmodal} Bookinfo={bookinfo} />}
    </div>
    
  );
}

export default Book;

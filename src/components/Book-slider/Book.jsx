import {  useState} from 'react'
import './Book.css'
import Rating from './Rating';


function Book({data}) {


const [ slideIndexx , setSlideIndexx]= useState(0);

function Handleslide(direction) {
  if (direction === "left") {
    setSlideIndexx(prev =>
      prev === 0 ? data.length -1 : prev - 1
    );
  } else {
    setSlideIndexx(prev =>
      prev === data.length - 1 ? 0 : prev + 1
    );
  }
}
 
  return (
    <div className='Book-slider-container'>
    <i onClick={()=> Handleslide ("left")} className="bi bi-chevron-left Book-slider-arrow-left"></i>

    <div  style={{
    transform: `translateX(${slideIndexx * -300}px)`

  }} className="Book-slider-wrapper">
    {data.map((item)=>(
        <div key={item.id} className='book-slide-item'> 
            <img src={`/books/${item.image}`} alt="item.title" className='Book-slide-item-img' />   
            <h3 className="Book-slide-item-title">
                {item.title}
            </h3> 
            <div className='Rating'> 
               <Rating rating={item.rating}  reviews={item.reviews}/>


            </div>
            <div className="Book-slide-item-price">
                ${item.price}
            </div>
            <div className="Book-slide-icons-wrapper">
                <i className='bi bi-eye-fill'></i>
                <i className='bi bi-cart-fill'></i>
            </div>






        </div>







    )
         
         
         
         )}



    </div>

     <i onClick={()=> Handleslide("right")} className="bi bi-chevron-right Book-slider-arrow-right"></i>
   
    </div>
  )
}

export default Book

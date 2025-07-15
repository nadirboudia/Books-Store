import './Slider.css'
import firstBook from '../../images/book1.png'
import secondBook from '../../images/book2.png'
import thirdBook from '../../images/book3.png'
import { useState } from 'react'

function Slider() {
    const[  slideIndex , setslideIndex ] = useState(0);

        function Handleslide(direction){
            if(direction === "left"){
                setslideIndex(slideIndex - 1)
            }else{
            setslideIndex(slideIndex +1)
        }
        }
        console.log(slideIndex)
  return (
  <div className="slider-container">
{slideIndex !==0 &&<i  onClick={()=>Handleslide("left")}  className='bi bi-chevron-double-left arrow-left' ></i>}
<div  style={{transform: `translateX(${slideIndex * -100}vw)`}} className="slider-wrapper">
    <div className="slide first-slide">
    <div className="slide-img-wrapper">
        <img src={firstBook} alt="" />
    </div>
    <div className="slide-info-wrapper">
        <h1 className="slide-info-title">
            Book Store
        </h1>
        <p className="slide-info-desc">
            It's not just reading  , it's living  the adventure
        </p>
    </div>

    </div>

    
    <div className="slide second-slide">
  <div className="slide-img-wrapper">
        <img src={secondBook} alt="" />
    </div>
    <div className="slide-info-wrapper">
        <h1 className="slide-info-title">
             The Book For Everyone
        </h1>
        <p className="slide-info-desc">
            You can read  at home or at  the bookstore
        </p>
    </div>


    </div>

    
    
    <div className="slide third-slide">
  <div className="slide-img-wrapper">
        <img src={thirdBook} alt="" />
    </div>
    <div className="slide-info-wrapper">
        <h1 className="slide-info-title">
            Check Out the new Titles
        </h1>
        <p className="slide-info-desc">
           We send you  the Book you want at Home
        </p>
    </div>


    </div>

    </div>
   {slideIndex !== 2 &&  <i onClick={()=>Handleslide("right")} className='bi bi-chevron-double-right arrow-right' ></i>}
  </div>
  )
}

export default Slider


import { useParams } from 'react-router-dom'
import {books} from '../../data/books'
import Rating from '../../components/Book-slider/Rating';
import './Bookk.css'
import { useContext } from 'react';
import Cartcontext from '../../Context/Cardcontextu';
import { useState } from 'react';

function Bookk() {
  const{id} = useParams();
  const { AddTocart} = useContext(Cartcontext);
  const [qty , setQty] = useState(1);

  const book = books.find(b => b.id === parseInt(id));

  return (
    <div className='book'>
      <div className="book-content">
        <img src={`/books/${book.image}`} alt={book.title} className='book.content-imagee' />
        <div className="book-content-info">
          <h1 className="book-title">
            {book.title}
          </h1>
          <div className="book-author">
            By <span style={{color:'blue'}}>{book.author}</span> (Author)
          </div>  
         <div className='ss'>
           <Rating rating={book.rating} reviews={book.reviews} />
         </div>

            <div className="book-add-to-cart">
          <input type="number" min={1} max={100}  className='book-add-to-cart-input' value={qty} onChange={(e)=>{
            setQty(e.target.value)
          }} />
          <button onClick={() => {
            AddTocart({...book ,quantity:qty})
          }} to={`/cart/${book.id}`}  className='book-add-to-cart-btn'><i className="bi bi-cart-plus"> Add to Cart</i></button>
        </div>
        </div>
      
      </div>
       <p className='paragraphe'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus illum esse iste officia repellendus sint corrupti inventore libero maxime. Labore quidem, quod ullam aperiam vel eveniet adipisci esse voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sapiente natus eaque ut explicabo delectus. 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat necessitatibus aperiam molestias odit laudantium, ex quaerat sequi nisi asperiores obcaecati culpa nesciunt dignissimos nemo officia suscipit ducimus pariatur aliquam quos neque enim repellat officiis. Culpa, sed beatae et quasi autem ipsa quibusdam ducimus ad ea placeat quo rem dolorem temporibus nisi. Quod ad quia molestiae consectetur repellat, ex maiores. Accusantium quo nihil voluptate a facilis inventore maxime vel, dolor laudantium consequatur deserunt atque, at neque sapiente sunt ad libero amet vero. Obcaecati, ea error quos quidem atque similique, dolor vero incidunt dolorem ipsum sunt laboriosam pariatur cupiditate ratione! Corrupti, voluptate?
    </p>
      <div className="book-content-icons">
 
          <div className="book-content-1">
          <p>Print Length</p>
          <i className='bi bi-file-earmark-text'></i>
          <b>{book.printLength} Pages</b>
          </div>
          <div className="book-content-2">
             <p>Language</p>
          <i className='bi bi-globe'></i>
          <b>{book.language}</b>
          </div>
          <div className="book-content-3">
             <p>Pubication Date</p>
          <i className='bi bi-calendar'></i>
          <b>{book.PublicationDate}</b>
          </div>
      </div>
    </div>
  )
}

export default Bookk

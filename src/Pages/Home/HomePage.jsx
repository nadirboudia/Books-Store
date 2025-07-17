 import Slider from '../../components/slider/Slider'
import Services from "../../components/Services/Services"
import Book from "../../components/Book-slider/Book";
import {books} from '../../data/books';
import Heading from "../../components/Heading-title/Heading"
function HomePage() {
  return (
    <div>
        <Slider/>
      <Services/>
      <Heading title={"Most gifted"}/>
      <Book data= {books}/>
      <Heading title={"Best seller"}/>
      <Book data= {books}/>
      <Heading title={"Most wished for"}/>
      <Book data= {books}/>
      
    </div>
  )
}

export default HomePage

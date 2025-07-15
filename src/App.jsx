import "./App.css";
import Header from "./components/header/Header";
import Slider from './components/slider/Slider'
import Services from "./components/Services/Services"
import Book from "./components/Book-slider/Book";
import {books} from './data/books';
import Heading from "./components/Heading-title/Heading"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div>
      <Header />
      <Slider/>
      <Services/>
      <Heading title={"Most gifted"}/>
      <Book data= {books}/>
      <Heading title={"Best seller"}/>
      <Book data= {books}/>
      <Heading title={"Most wished for"}/>
      <Book data= {books}/>
      <Footer/>
    </div>
  );
}

export default App;

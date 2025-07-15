import "./App.css";
import Header from "./components/header/Header";
import Slider from './components/slider/Slider'
import Services from "./components/Services/Services"
import Book from "./components/Book-slider/Book";
import {books} from './data/books';

function App() {
  return (
    <div>
      <Header />
      <Slider/>
      <Services/>
      <Book data= {books}/>
    </div>
  );
}

export default App;

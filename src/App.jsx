import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Authors from "./Pages/Authors/Authors";
import  About from "./Pages/About/About";
import Login from "./Pages/Forms/Login";
import Bookk from "./Pages/Book/Bookk"
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart'
import Register from "./Pages/Forms/Register";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Scrol from "./Pages/Scrol/Scrol";

function App() {
  return (
    <div>
      <ToastContainer />
         
      <BrowserRouter>
      <Scrol/>
        <Header />


        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/authors" element={<Authors />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book/:id" element={<Bookk />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
           
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

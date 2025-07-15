import { useState } from "react";
import "./Header.css";
import Headermiddle from "./Headermiddle";
import Headertop from "./Headertop";
import Navbar from './Navbar'

function Header() {
  const [toggle , setToggle] = useState(false)
  return (
    <header className="header">
      <Headertop toggle={toggle}  setToggle={setToggle} />

      <Headermiddle />
       <Navbar toggle={toggle} setToggle={setToggle}  />
    </header>
  );
}

export default Header;

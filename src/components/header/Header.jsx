import "./Header.css";
import Headermiddle from "./Headermiddle";
import Headertop from "./Headertop";
function Header() {
  return (
    <header className="header">
      <Headertop />

      <Headermiddle />
    </header>
  );
}

export default Header;

import "./Header.css";
function Headertop() {
  return (
    <div className="header-top">
      <div className="header-top-menu">
        <i className="bi bi-list"></i>
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i> 123-279-278
      </div>
      <div className="header-top-text">Welcome to online Book store</div>
      <div className="header-top-link">
        <i className="bi bi-person-fill"></i>
        Login
      </div>
    </div>
  );
}

export default Headertop;

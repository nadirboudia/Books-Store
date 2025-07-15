import "./Footer.css";
import FooterIcons from "./FooterIcons";

function Footer() {
  return (
    
    <footer className="Footer">
     <div className="icon">
        <h2>
            Follow Us on Social media
        </h2>
          <FooterIcons />
     </div>
      <div className="footer-item">
        <h3 className="footer-item-title"> Useful Links </h3>
        <ul className="footer-item-list">
          <li className="footer-item-link">Home</li>
          <li className="footer-item-link"> Authors</li>
          <li className="footer-item-link">About Us </li>
          <li className="footer-item-link">Contact Us</li>
          <li className="footer-item-link">Register</li>
        </ul>
      </div>

      <div className="footer-item">
        <h3 className="footer-item-title"> Contact Information </h3>
        <ul className="footer-item-list">
      <div className="info">
       <i class="bi bi-geo-alt"></i>  <li className="footer-item-link">Saida - Oran -Alger</li>
      </div>
    <div className="info">
            <i className="bi bi-telephone"></i>  <li className="footer-item-link"> 123-762-830</li>
    </div>
        <div className="info">
            <i class="bi bi-envelope"></i>
              <li className="footer-item-link">info@Gmail.com</li>
        </div>
         
        </ul>
      </div>

      <div className="footer-item">
        <h3 className="footer-item-title"> About Us</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Totam ullam dolorem doloribus autem velit reiciendis 
           <hr  style={{border:'none'}}/> odit ratione rem veritatis id numquam, nostrum pariatur 
            amet vel sapiente odio rerum aliquam sint?.20
        </p>
      
        <div className="footer-copy-right">
      
      <p>Copyright @ 2025 Dubai Safari</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  function Handleevent(e) {
    e.preventDefault();
    if (mail.trim() === "") return toast.error("Adresse Vide ! ");
    if (pass.trim() === "") return toast.error("Password Vide");
    
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser || savedUser.email !== mail &&  savedUser.password !== pass) {
      return toast.error("Account doesn't exist !");
    }
  

    toast.success("Connexion réussie !");

    setMail("");
    setPass("");
  }
  return (
    <form onSubmit={Handleevent} className="login">
      <div className="login-content">
        <h1>Login to your Account</h1>

        <input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          type="text"
          className="login-input"
          placeholder=" Enter Your Email *"
        />

        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="login-input2"
          placeholder="Enter Your Password *"
        />

        <div className="login-button">
          <button
            disabled={!(pass.length >= 8) || !mail.includes("@")}
            className="bnt"
          >
            Login
          </button>
          <b>
            Dont Have an Account ? <Link to="/register"> Register</Link>
          </b>
        </div>
      </div>
    </form>
  );
}

export default Login;

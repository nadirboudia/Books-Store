import { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[confirmpass , setConfirmpass] = useState("")
  function Handleevent(e) {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Adresse Vide ! ");
    if (password.trim() === "") return toast.error("Password Vide");
    if(password.trim() !== confirmpass.trim()) return  toast.error("confirmation wrong ! ");

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === email) {
      return toast.error("Vous avez déjà un compte avec cette email !");
    }else{
      localStorage.setItem("user" , JSON.stringify({email :email , password: password}))
      toast.success("Votre compte a été créé avec succès !");
    }
    setEmail("");
    setPassword("");
    setConfirmpass("");

  }
  return (
    <form onSubmit={Handleevent} className="login">
      <div className="login-content">
        <h1>create your Account</h1>


      

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="login-input"
          placeholder=" Enter Your Email *"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input2"
          placeholder="Enter  Password *"
        />
            <input
          type="password"
          value={confirmpass}
          onChange={(e) => setConfirmpass(e.target.value)}
          className="login-input2"
          placeholder="Confirm Password *"
        />

        <div className="login-button">
          <button
            disabled={!(password.length >= 8 ) || !email.includes("@")}
            className="bnt"
          >
            Register Now 
          </button>
          <b>
            Already Have an Account ? <Link to="/login"> Login</Link>
          </b>
        </div>
      </div>
    </form>
  );
}

export default Register;

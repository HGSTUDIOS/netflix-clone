import SignUp from "../component/signUp";
import SignIn from "../component/signIn";
import { useNavigate } from "react-router-dom";


const LoginSignup = () =>{
  const navigate =useNavigate()

  const handleSignIn = () =>{
    navigate("/signin")
  }
  const handleSignUp = () =>{
    navigate("/signup")
  }
  return(
    <div>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default LoginSignup;

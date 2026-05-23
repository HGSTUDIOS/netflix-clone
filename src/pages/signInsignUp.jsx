import SignUp from "../component/signUp";
import SignIn from "../component/signIn";
import { useNavigate } from "react-router-dom";


const LoginSignup = () =>{
  const navigate =useNavigate()

  const handleSignIn = () =>{
    navigate("/SignIn")
  }
  const handleSignUp = () =>{
    navigate("/SignUp")
  }
  return(
    <div>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default LoginSignup;

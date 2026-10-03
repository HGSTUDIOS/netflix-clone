import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("netflixUsers") || "[]");
    const user = users.find(
      (item) => item.email === email.trim().toLowerCase() && item.password === password
    );

    if (!user) {
      window.alert("Invalid email or password.");
      return;
    }

    localStorage.setItem("netflixCurrentUser", JSON.stringify({name:user.name,email:user.email}));
    navigate("/home");
  };

  return (
    <div style={{minHeight:"100vh",background:"#000",color:"#fff",display:"grid",placeItems:"center",padding:"24px"}}>
      <form onSubmit={handleSubmit} style={{width:"100%",maxWidth:"360px",display:"grid",gap:"12px"}}>
        <h2>Sign In</h2>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />
        <button className="btn btn-success" type="submit">Sign In</button>
        <button className="btn btn-secondary" type="button" onClick={()=>navigate("/home")}>Back to Home</button>
      </form>
    </div>
  );
};

export default SignIn;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("netflixUsers") || "[]");
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password || !name.trim()) return;
    if (users.some((user) => user.email === normalizedEmail)) {
      window.alert("An account with this email already exists.");
      return;
    }

    users.push({ name: name.trim(), email: normalizedEmail, password });
    localStorage.setItem("netflixUsers", JSON.stringify(users));
    window.alert("Account created successfully.");
    navigate("/signin");
  };

  return (
    <div style={{minHeight:"100vh",background:"#000",color:"#fff",display:"grid",placeItems:"center",padding:"24px"}}>
      <form onSubmit={handleSubmit} style={{width:"100%",maxWidth:"360px",display:"grid",gap:"12px"}}>
        <h2>Create Account</h2>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />
        <button className="btn btn-success" type="submit">Create Account</button>
        <button className="btn btn-secondary" type="button" onClick={()=>navigate("/home")}>Back to Home</button>
      </form>
    </div>
  );
};

export default SignUp;

import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";






const SignUp = () =>{
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate =useNavigate()

    const handleHome= () =>{
      navigate("/Home")
    }
  
    useEffect(() => {
      axios
        .get("http://localhost:3002/user")
        .then(
          (response) => {
            setTodos(response.data)
          },
        )
  }, []);
  
  
  
    const handleInputChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleInputChanges = (event) => {
      setEmail(event.target.value);
    };
  
    const handleInputChangess = (event) => {
      setName(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const NewTodoObj = {
        name: name,
        email: email,
        password: password,
        id: todos.length + 1,
        isComplete: false,
      };
      axios
        .post(
          "http://localhost:3002/user",
          NewTodoObj,
        )
        .then((response) => {
          setTodos(todos.concat(response.data));
          setPassword("");
          setEmail("");
          setName("");
        });
    };
  
  
  

    return(
        <div>
            <AddTodoForm
        handleSubmit={handleSubmit}
        password={password}
        email={email}
        name={name}
        handleInputChange={handleInputChange}
        handleInputChanges={handleInputChanges}
        handleInputChangess={handleInputChangess}
        handleHome={handleHome}
      />
        </div>
    )
}

const AddTodoForm = ({
    handleSubmit,
    password,
    name,
    email,
    handleInputChange,
    handleInputChanges,
    handleInputChangess,
    handleHome,
  }) => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h4>Name</h4>
          <div id="inputs">
            <input type="text" value={name} onChange={handleInputChangess} />
          </div>
          <h4>Password</h4>
          <div id="inputs">
            <input
              className="w-90"
              type="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <h4>E-mail</h4>
          <div id="inputs">
            <input type="email" value={email} onChange={handleInputChanges} />
          </div>
          <button  className="btn btn-success" type="submit">
            Submit Form
          </button>
        </form>
      </div>
    );
  };

export default SignUp
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";





const SignIn = () =>{
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate()

    const handleHome = () => {
      navigate("/Home");
    };

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
        email: email,
        password: password,
        id: todos.length + 1,
        isComplete: false,
      };
      axios
        .get(
          "http://localhost:3002/user",
          NewTodoObj,
        )
        .then(
            (response) => {
              for (const key in  todos) {
                const element = todos[key]
                console.log(todos.filter((todos)=>todos.email===setEmail))
                // if (todos.filter((todos)=>todos.email===email)) {
                //   console.log("success")
                // }
                // if (todos.filter((todos)=>todos.password===password)) {
                //   console.log("success")
                // }
                // else{
                //   console.log("error")
                // }
              }
            },
          )
    };
  
  
  

    return(
        <div>
            <AddTodoForm
        handleSubmit={handleSubmit}
        password={password}
        email={email}
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
    email,
    handleInputChange,
    handleInputChanges,
    handleInputChangess,
    handleHome
  }) => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h4>E-mail</h4>
          <div id="inputs">
            <input type="email" value={email} onChange={handleInputChanges} />
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
          <button className="btn btn-success" type="submit">
            Submit Form
          </button>
        </form>
      </div>
    );
  };

export default SignIn;
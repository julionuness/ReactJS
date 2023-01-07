import { useEffect, useReducer, useRef, useState } from "react";

const reducer = (state, action) => {
  switch(action.type){
    case "add":
      //console.log("adding", action.login);
      return {
        tasks: [...state.tasks, {email: action.login.email, pass: action.login.pass}]
      }
    
    default:
      return state;
  }
}

function App() {
  const inpEmail = useRef();
  const inpPass = useRef();
  const [login, setLogin] = useState({email: "", pass: ""});
  const [state, dispatch] = useReducer(reducer, { tasks: [] });
/* IF THE SAME CODE (BETWEEN LINES 24 E 34) WAS PERFORMED A COMMON CONST ARROW FUNCTION RATHER THAN "useEffect",
THE state.tasks.map WOULD ALWAYS RENDERED WITH ITS PREVIOUS STATE */
  useEffect(() => {
    console.log("LOGIN: ", login);
    if(inpEmail.current.value !== "" && inpPass.current.value !== "") {
      inpEmail.current.value = "";
      inpPass.current.value = "";
      
      dispatch({ type: "add", login});
    }
    else
    {
      console.log("Wrong e-mail or password")
    }
  })

  return (
    <div style={{}}>
      <h1>React REDUCER</h1>
      E-mail:__
      <input ref={inpEmail} /> <br/>
      Password: 
      <input ref={inpPass} /> <br/>
      <button onClick={() => {
        setLogin({email: inpEmail.current.value, pass: inpPass.current.value});
      }}>Add a login</button>

      {state.tasks.map((items, i) => (<p key={i}>{JSON.stringify(items)}</p>))}

    </div>
  );
}

export default App;
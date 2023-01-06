import { useState, useEffect, useRef } from "react";

function App() {
  const [endp, setEndp] = useState('');
  const [list, setList] = useState([]);

//THE FOLLOWING useEffect WILL UPDATE THE STATE OF "endp" --->>> useEffect === a kind of SIDE EFFECT
  useEffect(() => {
//THE SAME console.log in the function "buttons" will always be the previous state
    console.log("NEW: ", endp);
//WE CANNOT PLACE async RIGHT AFTER useEffect
    const restCall = async () => {

      const res = await fetch(`https://jsonplaceholder.typicode.com/${endp}`);
      const response = await res.json();

      //console.log(JSON.stringify(response));
      setList(response);
    }

    if(endp !== '') {
      restCall();
    }
  }, [endp]);

  const buttons = (endpoint) => {
    setEndp(endpoint);
  }
/*
//THE FOLLOWING useEffect WILL ONLY UPDATE STATES AT THE FIRST RENDERING (REFRESHING PAGE -> F5)
  useEffect(() => {
  }, []);
*/

//STATE "stat" CREATED TO BE ALWAYS SWITCHED TO 1 OR -1 EACH TIME THE INPUT BUTTON IS CLICKED
  const [stat, setStat] = useState(1);
//useRef "comp" CREATED TO REFER TO THE ONLY "input" COMPONENT
  const comp = useRef();
/* useRef CAN ALSO BE USED AS A const/var THAT HAS ITS VALUE UPDATED BUT WITHOUT RE-RENDERING ITS RELATED COMPONENT */

  const focusing = () => {
    comp.current.focus();

    if (stat === 1) {
      comp.current.style.backgroundColor = "lightblue";
    }
    else{
      comp.current.style.backgroundColor = "lightyellow";
    }
//SWITCHES "stat" TO 1 OR -1 EACH TIME THE INPUT BUTTON IS CLICKED
    setStat(stat * -1);
  }

  return (
    <div>
      <h1>HOOKS</h1>
      <span>
        <input ref={comp}></input>
        <button onClick={focusing}>INPUT FOCUS</button>
      </span>
      <h3>=> current endpoint: {endp}</h3>
      <button onClick={() => buttons("posts")}>posts</button>
      <button onClick={() => buttons("todos")}>todos</button>
      <button onClick={() => buttons("users")}>users</button>
      <Resp data={list} key={'id'}/>
    </div>
  );
}

const Resp = ({data}) => {
  return data.map((item) => (<p>{JSON.stringify(item)}</p>));
}

export default App;

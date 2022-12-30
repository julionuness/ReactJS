import { useState } from "react";
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [counter, setCounter] = useState(0);

  const clique = (event) => {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
    }
    //console.log(newDot);
    setList((prev) => [...prev, newDot]);
  };

  const hadleUndo = (event) => {
    event.stopPropagation();
    //console.log('undo');
    
    setCounter(counter + 1);
    
    console.log(counter);
    console.log(list.length);
/*
    setList((prev) => {
      const newArr = [...prev].slice(0, -1);
      
      return newArr;
    })
    */
  }

  return (
    <div id="page" onClick={clique}>
      <button onClick={hadleUndo}>Desfazer</button>
      {list.map((item) => (
        <span className="dot" style={{left: item.clientX, top: item.clientY}}/>
      ))}
    </div>
  );
}

export default App;

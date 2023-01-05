import { useState } from "react";

function App() {

  var [list, setList] = useState([]);
  var [sorted, setSorted] = useState([]);
  var [greatest, setGreat] = useState(0);
  var [result, setResult] = useState(0);

  function clicking(){
    setResult(result = 0);
    setGreat(greatest = 1);
//sets list to ZERO elements
    setList(list = [...[]]);

    list.push(Math.floor(Math.random() * 6) + 1);
    list.push(Math.floor(Math.random() * 6) + 1);
    list.push(Math.floor(Math.random() * 6) + 1);

    //console.log("DICES = ", list.join());
    
/*############################################################################
O for(linhas 46 a 70) ABAIXO SERIA EVITADO APENAS USANDO O 
=================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> list.sort();

    var greater = 1;
    var item1 = 1;
    var item2 = 1;

    for (let i = 0; i < list.length; i++) {
      console.log("i = ", i);

      if (i < list.length -1) {
        item1 = list.at(i);    
        item2 = list.at(i+1);             
      }

      //console.log("item1: ", item1);
      //console.log("item2: ", item2);

      if (item2 > item1) {
        greater = item2;
      }
      else{
        greater = item1;
      }
      
      console.log("greater = ", greater);
      console.log("greatest = ", greatest);

      if (greater > greatest) {
        setGreat(greatest = greater);
      }
    }
    console.log("-> novo array = ", list);
############################################################################*/

//sorted is would be a const local list, but it was declared as useState just for showing on the screen
    setSorted(sorted = [...list]);
    sorted.sort();
    //console.log("SORTED = ", sorted.join());

    setGreat(greatest = sorted.at(sorted.length - 1));

    list.map((item) => {
      if(item === greatest){
        setResult(result = result + greatest);
      }
    });
  }
    
  return (
    <div>
      <h3>Challenge 2</h3>
      <button onClick={clicking}>Roll dices</button>
      <h4>NEW DICES: {list.join()}</h4>
      <h4>DICES SORTED: {sorted.join()}</h4>
      <h1>--->>> greatest dice: {greatest}</h1>
      <h1>--->>> sum of greatest dices: {result}</h1>
    </div>
  );
}

export default App;

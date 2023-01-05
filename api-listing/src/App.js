/*
consume the API and list all Pokemons on the following endpoint:
https://pokeapi.co/api/v2/pokemon

You must show, for each pokemon:
- image
- name
- experience

You can access infomation about each pokemon individually on:
https://pokeapi.co/api/v2/pokemon/:id

TIP:
image => sprites.front_default
experience => base_experience

A PLUS: if you can, sort all pokemons by name.
*/
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);

  useEffect (() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      const sorting = [...res.data.results];

//SORT THE DATA OBJECT BY NAME
      sorting.sort((a, b) => {
        return a.name.localeCompare(b.name)}
      );

      //console.log(sorting);
      setList(sorting);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
{/*
key -> there was a Warning (cosole.log -> Each child in a list should have a unique "key" prop) and the only
way was to insert the prop "key" inside <Pokemon>
*/}
      <>{list.map((item) => (<Pokemon key={item.name} url={item.url}></Pokemon>))}</>
    </div>
  );
}

const Pokemon = ({url}) =>
{
/*
var pok -> setImgEndp(pok.sprites.front_default) was NOT allowed while pok was "const" due to the following error:
TypeError: pok.sprites is undefined
*/
  var [pok, setPok] = useState([]);
  const [imgEndp, setImgEndp] = useState('');

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setPok(pok = res.data);
      setImgEndp(pok.sprites.front_default);
      //console.log(imgEndp);
    })
    .catch((err) => console.log(err));
  }, []);

  if(pok.length === 0){
    return <div>...carregando</div>
  }
/* style(s) ARE NOT NEEDED BELOW */
  return <div style={{display: 'flex', alignItems: 'center'}}>
    <span>
      <img src={imgEndp} style={{width: 25, marginRight: 20}} />
    </span>
    <span>
      <b>{pok.name}</b> - {pok.base_experience}
    </span>
  </div>
}

export default App;

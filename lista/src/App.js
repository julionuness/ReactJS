import React, { useState } from 'react';
import './App.css';
import Itens from './componentes/Itens'
import AdicionaItem from './componentes/AdicionaItem'

const App = () => {
  const [lista, ajustaItem] = useState([]);

  function novoItem(texto, pos) {
    const itensCopy = Array.from(lista);
    itensCopy.push({id: lista.length, value: texto});
    ajustaItem(itensCopy);
  }

  function atualizaItem({target}, index) {
    const itensCopy = Array.from(lista);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    ajustaItem(itensCopy);
  }

  function excluiItem(index) {
    const itensCopy = Array.from(lista);
    itensCopy.splice(index, 1);
    ajustaItem(itensCopy);
  }

  return (
    <div>
      <div>
        <AdicionaItem onSubmit={novoItem} />
        <br/>
        {lista.map(({id, value}, index) => (
          <Itens
            key={id}
            value={value}
            onChange={(event) => atualizaItem(event, index)}
            onDelete={() => excluiItem(index)}
          />
        ))}
      </div>
      <div className="Array-preview">
        <pre>
          {JSON.stringify(lista, null, 4)}
        </pre>
      </div>
    </div>
  )
}

export default App;
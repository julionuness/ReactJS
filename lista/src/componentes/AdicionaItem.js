import React, { useState } from 'react';
const AdicionaItem = ({ onSubmit }) => {

const [newItem, setNewItem] = useState('');

function adicionarItem({target}) {
setNewItem(target.value);
}

function submit(e) {
e.preventDefault();
onSubmit(newItem);
}

return (
    <div>
      <form onSubmit={submit}>
        <input
          className="Todo-input"
          placeholder="Digite um novo item e clique no botão"
          onChange={adicionarItem}
        />
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default AdicionaItem;
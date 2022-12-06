import './App.css';
import React, { useState } from "react";
import TreeMenu, { ItemComponent } from 'react-simple-tree-menu';

const arvore = {
  'nivel-1-1': {
    label: 'nó 1, primeiro nivel',
    index: 0,
    nodes: {
      'nivel-1-2': {
        label: 'nó 1, segundo nivel',
        index: 0,
        nodes: {
          'nivel-1-3': {
            label: 'nó 1, terceiro nivel',
            index: 0,
            nodes: {}
          },
        },
      },
    },
  },
  'nivel-2-1': {
    label: 'nó 2, primeiro nivel',
    index: 1,
  },
};

function App() {
  const [data, setData] = useState(arvore);

  return (
    <div>
      <h1>Página inicial</h1>

      <TreeMenu
        data={data}
        resetOpenNodesOnDataUpdate
      >
        {({ items }) => (
          <ul className="tree-item-group">
            {items.map(({ key, onClickItem, ...props }) => (
              <ItemComponent key={key} {...props} />
            ))}
          </ul>
        )}
      </TreeMenu>

    </div>
  );
}

export default App;

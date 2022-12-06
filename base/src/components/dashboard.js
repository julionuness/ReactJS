import { Component } from 'react';
import Tables from './Tables';

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true
  },
  {
    dataField: "name",
    text: "Product SKU",
    sort: true
  },
  {
    dataField: "price",
    text: "Product Price in $"
  }
];

const data = [
  { id: 1, name: "mocky.io 1", price: 11 },
  { id: 2, name: "mocky.io 2", price: 12 },
  { id: 3, name: "mocky.io 3", price: 13 },
  { id: 4, name: "mocky.io 4", price: 14 },
  { id: 5, name: "mocky.io 5", price: 15 }
];

class Charts extends Component {

  render() {
  return (
    <div>
      <Tables header={columns} dados={data}/>
    </div>
      );
    }
    }
    
export default Charts;
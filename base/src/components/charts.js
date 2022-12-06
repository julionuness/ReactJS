import { Component } from 'react';
import Linear from './charts/Linear';
import BarV from './charts/BarV';

const data = [
  {x: 0, y: 1},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 3},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 0}
];

class Charts extends Component {

  render() {
  return (
    <div>
      <Linear dados={data}/>
      <BarV dados={data}/>
    </div>
      );
    }
    }
    
export default Charts;
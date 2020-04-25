import React from 'react';
import './App.css';
import DraggableSlider from './component/draggableSlider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0
    }
    this.updateRange = this.updateRange.bind(this);
  }

  updateRange(val) {
    this.setState({
      rangeVal: val
    })
  } 
  
  render() {
    const { rangeVal } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <DraggableSlider min={0} max={20} step={1} range={rangeVal} updateRange={this.updateRange} />
        </header>
      </div>
    )
  }  
}
export default App;

import React from 'react';

export default class Range extends React.Component {
    constructor(props) {
      super(props);
      this.updateRange = this.updateRange.bind(this);
    }
    
    updateRange(e) {
      this.props.updateRange(e.target.value);
    }
    
    render() {
      const { min, max, step, range } = this.props;
      return (
        <div>
          <input id="range" type="range"
            value={range}
            min={min}
            max={max}
            step={step}
            onChange={this.updateRange}
          />
          <span id="output">{range}</span>
        </div>
      )
    }
  }
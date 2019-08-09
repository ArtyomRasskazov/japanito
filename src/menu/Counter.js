import React from 'react';

const styles = {
  counter: {
    display: 'inline-flex'
  }
}


class Counter extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  addOne() {
    this.setState({
      count: this.state.count + 1
    })
  }

  delOne() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="counter" style={styles.counter}>
        <button className="counterDecrement" onClick={() => this.delOne()}>-</button>
        <p className="countValue">{this.state.count}</p>
        <button className="counterIncrement" onClick={() => this.addOne()}>+</button>
      </div>
    );
  }
}

export default Counter;
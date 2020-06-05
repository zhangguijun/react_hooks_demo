import React, { Component } from 'react';

class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleIncrement = () => {
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
  }
  render() {
    return (
      <div className='set-state'>
        state 中的count : {
          this.state.count
        }
        <button onClick={this.handleIncrement} >点击</button>
      </div>
    );
  }
}

export default SetState;
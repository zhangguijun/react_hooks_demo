import React, { Component, useState, useEffect, createContext, useContext } from 'react';
// context

// 
const CountContext = createContext()

class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
   
    return (
      <CountContext.Consumer>
        {
          count => <h1>count: {count}</h1>
        }
      </CountContext.Consumer>
    );
  }
}
class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  static contextType = CountContext;
  render() {
    const count = this.context
    return (
          <h1>count: {count}</h1>
  
    );
  }
}
function Counter(){
 const count = useContext(CountContext)
  return(
    <h1>count: {count}</h1>
  )
}

function Demo3(props) {

  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
      count: {count}
      <CountContext.Provider value={count}>
        <Foo></Foo>
        <Bar></Bar>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  );
}

export default Demo3;
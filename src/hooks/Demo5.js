//  hooks 优势
// 1 复用状态逻辑
// 2 副作用分离
// 3 this指向问题（函数）


// 自定义hooks

import React, { Component, PureComponent, useState, useEffect, useRef, useMemo, memo, useCallback } from 'react';


 const Counter = memo (function Counter(props){
  return(
    <h1 onClick={props.onClick}>count: {props.count}</h1>
  )
  }
 )
// class Counter extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     const { props } = this;
//     return (
//       <h1 >count: {props.count}</h1>
//     )
//   }
// }
function useCounter(count){
  const size = useSize()

  return (
    <h1 >count: {count} {size.width} x {size.height}</h1>
  )
}
function useCount(defaultCount){
  const [count, setCount] = useState(defaultCount);
  const it = useRef();
  useEffect(()=>{
    it.current = setInterval(() => {
        setCount(count => count+1)
    }, 1000);
  },[])
  useEffect(()=>{
    if(count> 10){
      clearInterval(it.current)
    }
  })
  return [count, setCount]
}

function useSize(){
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback (()=>{
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  },[])
  useEffect(()=>{
    window.addEventListener('resize', onResize, false)
    return ()=>{
      window.removeEventListener('resize', onResize, false)
    }
  },[])
  return size
}
function Demo5(props) {
    const [ count, setCount] = useCount(0);
    const Counter = useCounter(count);
    const size = useSize()

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
      count: {count} {size.width} x {size.height}
      {/* <Counter count={count}></Counter> */}
      { 
        Counter
      }

    </div>
  );
}

export default Demo5;
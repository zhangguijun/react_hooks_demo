import React, { Component, useState, useEffect, useMemo, memo, useCallback } from 'react';


 const Counter = memo (function Counter(props){
    console.log('counter render')
  return(
    <h1 onClick={props.onClick}>count: {props.count}</h1>
  )
  }
 )

function Demo4(props) {

  const [count, setCount] = useState(0);
 const double = useMemo(()=>{ //   渲染期间
    return count * 2
  },[count === 3])

  const half = useMemo(()=>{
    return double / 4
  },[double])
  // const onClick = ()=>{
  //   console.log('click')
  // }
  // const onClick = useMemo(()=>{
  //   return ()=>{
  //     console.log('click')
  //   }
  // },[])
  //  useMemo 返回的是一个函数 就等价于 useCallback
  // useCallback都会创建函数，但是不一定会会被返回，
  //  解决传入子组件函数参数过多变化，导致子组件过多渲染
  const onClick = useCallback(()=>{
  
      console.log('click')
  },[])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
      count: {count}
      double: { double}
      half: { half} 
      {/* <Counter count={double} ></Counter>   */}
        <Counter count={double} onClick={onClick}></Counter> 

    </div>
  );
}

export default Demo4;
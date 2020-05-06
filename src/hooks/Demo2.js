import React, { Component, useState, useEffect } from 'react';
// hooks
// class Demo2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       size: {
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight
//       }
//     };
//   }
//   onResize = () => {
//     this.setState({
//       size: {
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight
//       }
//     })
//   }
//   componentDidMount() {
//     document.title = this.state.count;
//     window.addEventListener('resize', this.onResize, false)
//   }
//   componentDidUpdate() {
//     document.title = this.state.count
//     window.addEventListener('resize', this.onResize, false)
//   }
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.onResize, false)
//   }

//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {

//             this.setState({
//               count: this.state.count + 1
//             })
//           }}
//         >click</button>
//        width: {
//           this.state.size.width
//         }
//        height: {
//           this.state.size.height
//         }
//       </div>
//     );
//   }
// }

function Demo2(props) {

  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = ()=>{
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }
  const onClick = () =>{
    console.log('click')
  }
  //  useEffect 它在第一次渲染之后和每次更新之后都会执行
  useEffect(()=>{
   console.log('count:',count) 
  },[count])
  useEffect(() => {
    document.title = count
  })
  useEffect(()=>{
    window.addEventListener('resize', onResize, false)
    return ()=>{
      window.removeEventListener('resize', onResize, false)
    }
  },[])
  // useEffect(()=>{
  //   document.querySelector('#size').addEventListener('click', onClick, false)
  //   return()=>{
  //     document.querySelector('#size').removeEventListener('click', onClick, false)
  //   }
  // })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
      count:{count} 
      <p id='size'>width:{size.width} height: {size.height}</p>
      {/* {
        count%2 ? <span id='size'>width:{size.width} height: {size.height}</span> : <p id='size'>width:{size.width} height: {size.height}</p>
      } */}
    </div>
  );
}

export default Demo2;

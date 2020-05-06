import React, { Component, useState } from 'react';

// class Demo1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       count: 0
//      };
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <button
//           onClick={()=>{this.setState({count: count +1})}}
//         >click</button>
//         count:{ count }
//       </div>
//     );
//   }
// }
function Demo1 (props){
    //  在class 组件中 render 状态更改都会执行一次render 每次初始化的时候会造成不必要的资源浪费
  //  下面这种写法能有效的避免初始化造成资源浪费
  // const defaultCount = props.defaultCount || 0
  // const [count, setCount] = useState(()=>{
  //   console.log('init')
  //   return props.defaultCount || 0
  // })

  //  

  const [ a, b] = useState(0);

 const [ c, d] = useState('zhang');
  // setCount 类似于this.setState, 但是它不会把新的 state 和旧的 state 进行合并。
 
  //  变量 人赋予了变量的可读意义
  //  js 是单线程
 //  多state 按照第一次执行的顺序执行 

      return (
      <div>
        <button
          onClick={()=>{b(a +1)}}
        >click</button>
        count:{ a }
      </div>
    );
}

export default Demo1;
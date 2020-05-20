/**
 *  考虑以下问题 
 *  1. useState 的实现原理
 *  2. 为什么不能在循环，判断内部使用hooks 
 *  3. useEffect 实现原理
 *  4. useEffect 应用场景
 *  5. class vs hooks
 * 
 */

 /**
  *  初始状态存在一个全局变量里那么多个状态应该保存在一个专门的容器里面，这个容器可以想象成是一个数组
  * 第一次渲染时候，根据 useState 顺序，逐个声明 state 并且将其放入全局 Array 中。每次声明 state，都要将 cursor 增加 1。
  * 更新 state，触发再次渲染的时候。cursor 被重置为 0。按照 useState 的声明顺序，依次拿出最新的 state 的值，视图更新。
  */

  /**
   *  如果在循环和遍历中使用hooks
   *  按照数组下标去访问
   *  -0 ---- num
   *  -1 ---- setName
   *  -2 ---- num2
   * 
   * 如果中间使用条件本来数组下标2 对应的是num2 可能就变成1 对应num2 会导致定义方法不生效等问题
   * 
   */
import ReactDOM from "react-dom";
function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
  cursor = 0; // 重置指针
  effectCursor = 0; // 重置有副作用的指针
}
const  states  = [] ;
let cursor = 0;

const allDeps = [];
let effectCursor = 0;
function useState(initValue, newState){
  const currentCursor = cursor;
  states[currentCursor] = states[currentCursor] || initValue;
  function setState(newState){
    states[currentCursor] = newState
    render()
  }
  ++cursor
  return[states[currentCursor], setState]
}

function useEffect (callback, deps){
  if(!allDeps[effectCursor]){
    allDeps[effectCursor] = deps;
    ++effectCursor;
    callback();
    return;
  }
  const currentEffectCursor = effectCursor;

  const rawDeps = allDeps[currentEffectCursor]

  // 如果依赖发生变化 ， 需要重现渲染
  const isChanged = rawDeps.some((dep, index) => {
    dep !== deps[index]
  })
  if(isChanged){
    callback();
    allDeps[effectCursor] = deps
  }
  ++effectCursor
}
render() // 首次渲染

 function App () {
   const [num, setNum] = useState(0)
   return(
     <div>
       <div>num:{num}</div>
       <button onClick={()=> setNum(num +1)}>加一</button>
     </div>
   )
 }


 export default App

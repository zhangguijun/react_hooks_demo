import { useEffect, useRef, } from 'react'


function App(){
  useEffect(()=>{
    // componentDidMount
    return ()=>{
      // componentWillUmmount
    }
    
  },[])
  let r_count = useRef(0)
  r_count.current ++;
  useEffect(()=>{
   
    if(r_count.current> 1){
       // componentDidUpdate
    }
  })
}
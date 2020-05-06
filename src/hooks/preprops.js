function Counter(){
  const [count, setCount] = useState();
  const prevCountRef = useRef()
  useEffect(()=>{
    prevCountRef.current = count
  })
  const preCount = prevCountRef.current
  return <h1></h1>
}
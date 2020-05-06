import React, { useState, useEffect, useMemo, memo, useCallback } from 'react';
// hooks
let idSeq = Date.now()

const LS_KEY = '_$lskey_';
function Control(props) {
  const { addTodo } = props;
  let inputRef = React.createRef()
  const onSubmit = (e) => {
    e.preventDefault();
    const newText = inputRef.current.value.trim();
    if (newText.length === 0) {
      return
    }
    addTodo({
      id: ++idSeq,
      text: newText,
      complete: false
    })
    inputRef.current.value = ''

  }
  return (
    <div className='control'>
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputRef}
          className='new-todo'
          placeholder="就是瞎输入"
        />
      </form>
    </div>
  )
}
function Todos(props) {
  const { todos, toggleTodo, removeTodo } = props;
  return (
    <ul>
      {
         todos.map(todo => {
          return <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          ></TodoItem>
        })
      }
    </ul>
  )
}
function TodoItem(props) {

  const { todo: {
    id,
    text,
    complete
  }, toggleTodo, removeTodo } = props
  const onChange = () => {
    toggleTodo(id)
  }
  const onRemove = () => {
    removeTodo(id)
  }
  return (
    <li className='todo-item'>
      <input type="checkbox" name="" onChange={onChange} checked={complete} />
      <label className={complete ? 'complete' : ''} >{text}</label>
      <button onClick={onRemove}>&#xd7; </button>
    </li>
  )
}

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = useCallback((todo) => {
    setTodos(todos => [...todos, todo])
  }, [])
  const removeTodo = useCallback((id) => {
    setTodos(todos => todos.filter(todo => {
      return todo.id !== id
    }))
  }, [])
  const toggleTodo = useCallback((id) => {
    setTodos(todos => todos.map(todo => {
      return todo.id === id
        ? {
          ...todo,
          complete: !todo.complete,
        }
        : todo
    }))
  }, [])
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(LS_KEY || '[]'))
    setTodos(todos);
    // dispatch({type:'set',todos})
  }, [])
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <div className='todo-list'>
      <Control addTodo={addTodo}></Control>
      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos}></Todos>
    </div>
  )
}


export default TodoList;

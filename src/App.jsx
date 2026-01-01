import './App.css';
import InputContainer from './components/inputContainer';
import TodoContainer from './components/TodoContainer';
import { useState } from 'react';

function App() {

  const [inputVales, setInputVal] = useState ('')

  const [todo, setTodos] = useState ([])

  function writeTodo(e){
    setInputVal(e.target.value)
  }  

  function addTodo(){
    if(inputVales != ''){
      setTodos((prevTodos)=> [...prevTodos, inputVales])
      setInputVal('')
    }
  }

  function delTodo(todoIndex){
    setTodos((preTodos)=> 
    preTodos.filter((prevTodo, prevTodosIndex)=>{
      return prevTodosIndex != todoIndex
    }))
  }


  return (
    <main>
      <h1>TO Do List</h1>
    <InputContainer inputVal={inputVales} writeTodo={writeTodo} addTodo={addTodo}/>
    <TodoContainer todos={todo} delTodo={delTodo}/>
    </main>
  )
}

export default App
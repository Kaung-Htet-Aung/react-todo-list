import './App.css';
import Form from './components/Form';
import React, { useState ,useEffect} from 'react';

import TodoList from './components/TodoList';

function App() {
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filterTodos, setfilterTodos] = useState([]);
  //function
   useEffect(() => {
      filterTodo();
   }, [status,todos]);
   
   const filterTodo=()=>{
        switch(status){
          case "complete": 
           setfilterTodos(todos.filter(todo=>todo.isComplete===true))
           break;
          case "incomplete":
            setfilterTodos(todos.filter(todo=>todo.isComplete===false))
          break;
          default:
            setfilterTodos(todos)
        }
        
   }
  return (
    <div className="App">
        <h2>Kaung Htet Aung's Todo List</h2><br/>
        <Form 
            setinputText={setinputText}
            inputText={inputText}
            setTodos={setTodos}
            todos={todos}
            setStatus={setStatus}
         />
         {filterTodos.map(todo=>{
           return(
            <TodoList key={todo.id} todo={todo} todos={filterTodos} setTodos={setTodos}/>
           )
         })}
       
    </div>
  );
}

export default App;

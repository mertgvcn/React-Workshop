import React, { useState } from 'react';
import './App.css';
//COMPONENTS
import Input from './components/Input';
import TodoList from './components/TodoList';
//TYPES
import { Todos } from './types/TodosType';

const App: React.FC = () => { //App fonskiyonun React.Functional Component olduğunu belirttik

  const[todo, setTodo] = useState<string>("") //state için type'ı bu şekilde tanımlıyoruz. 
  const[todos, setTodos] = useState<Todos[]>([]) //silme işlemi için id gerektiği için direkt string[] yapmak yerine, kendimiz types klasöründe yeni type tanımladık.
                                                 //ve tanımladığımız type'ı array şeklinde kullandık. [{name,id},{name,id}] gibi bir yapı.
           
  const addTodo = () => {
    if(todo.length>0) {
      setTodos([...todos, {msg : todo, id: todos.length+1}]) //setTodos'ta önceki değerleri kaybetmemek için ...todos koyuyoruz, üstüne yeni değeri ekliyoruz
      setTodo("")
    }
  }      
  
  const deleteTodo = (id:number) => {
    setTodos(todos.filter(todo => todo.id != id)) //filter fonksiyonu todos elemanlarını tek tek gezip idleri dışardan aldığımız id'ye eşit olmayanları listemizden atacak
  }

  console.log(todos)
  return (
    <div className="App">
      <Input todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;

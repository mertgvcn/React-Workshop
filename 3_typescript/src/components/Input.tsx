import React from 'react'

type propTypes = {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
  addTodo: () => void  //fonksiyonların tipi bu şekilde belirtiliyor
}

const input: React.FC<propTypes> = ({ todo, setTodo, addTodo }) => { //React.FC olduğunu belirtmeseydik => {todo,setTodo}:propTypes diye türlerini belirtebilirdik

  return (
    <div>
      <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder='Enter a todo' />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default input
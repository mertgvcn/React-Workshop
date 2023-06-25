import React from 'react'
//Types
import { Todos } from '../types/TodosType'

type propTypes = {
    todos: Todos[]
    deleteTodo: (id:number)=>void
}

const TodoList: React.FC<propTypes> = ({ todos, deleteTodo }) => {
    return (
        <div>
            <ul style={{listStyleType:"none"}}>
                {
                    todos.map((todo, index) => ( //parantez yerine {} koyarsak içine return yazmak zorundayız
                        <li key={index}>
                            {todo.msg} - <span onClick={() => deleteTodo(todo.id)} style={{cursor:"pointer"}}>X</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios' //https://randomuser.me/api/?results=5
//COMPONENTS
import User from './User'

const UserList = (() => {
    const [users,setUsers] = useState([]) //user listemizi bu state içinde array olarak tutucaz

    const fetchUsers = ( async () => {
       const response = await axios.get("https://randomuser.me/api/?results=5") //js de öğrendiğim fetchten çok daha basit
       setUsers(response.data.results) //response.data axios özelliği | api bize direkt liste dönmüyor, obje dönüyor ve listeyi içindeki results'ta tutuyor. Linki açıp bakabilirsin
    })

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className='user-list'>
            <ul>
                {users.map((user, index) => ( //neden parantez anlamadım
                    <li>
                        <User user={user} key={index}/>
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default UserList
import './Todo.css'
import { useState } from 'react'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'


const Todo = () => {

    // --------data array ---------------
    // const todos = [
    //     { id: 1, title: 'Eat' },
    //     { id: 2, title: 'Maem' },
    //     { id: 3, title: 'Makan' },
    // ]
    // -------------------------------------

    const [getTodos, setTodos] = useState([ //import useState dulu
        { id: 1, title: 'Eat' },
        { id: 2, title: 'Maem' },
        { id: 3, title: 'Makan' },
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        // console.log(getTodos)
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList dataTodos={getTodos} />
            {/* artinya, buatlah turunan sifat yg bernama
            dataTodos yang memiliki sifat dari const todos.
            Lalu beri "props" dalam child */}
        </div>
    )
}

export default Todo
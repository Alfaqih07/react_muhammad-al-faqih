import "./TodoList.css"

const TodoList = (props) => {
    // console.log(props.dataTodos)
    return (
        <ul>{
            props.dataTodos.map((todo) => {
                /*menggunakan fungsi map untuk mengambil
                dan mengembalikan nilai dataTodos*/
                // "todo" bisa diisi bebaz
                return <li key={todo.id}>{todo.title}</li>
            })
        }</ul>
    )

}

export default TodoList
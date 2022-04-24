import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    return (
        <div style={{
            minHeight:"60vh"
        }}>
            <h2 className="text-center my-3">Todo List</h2>
            {props.todos.length===0?
            <h6 className="text-center">No Task There</h6>:
            props.todos.map(todo => {
                return <Todo data={todo} onDelete={props.onDelete} key={todo.id}/>
            })}
        </div>
    )
}

export default Todos;

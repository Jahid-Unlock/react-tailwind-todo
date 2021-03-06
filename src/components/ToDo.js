import React from 'react'

const ToDo = ({todo, handleToggle}) => {
    console.log('todo')
    return (
        <div id={todo.id} className={todo.complete ? "strike" : ""}   onClick={handleToggle} >
            <span className="font-bold">{todo.task}</span>
        </div>
    );
}

export default ToDo;
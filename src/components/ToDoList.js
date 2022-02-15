import React from 'react';
import Todo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleClear}) => {

    console.log('todolist')

    return (
        <div>
            {toDoList.map((todo)=>{
                return <Todo key={todo.id + todo.task} todo={todo} 
                handleToggle={()=> handleToggle(todo.id)}/>
            })}

            <button onClick={handleClear} className="ease-in duration-300 py-2 px-7 bg-gray-800 text-white font-bold mt-5 hover:bg-gray-900 ring-2">Clear Completed</button>
        </div>
    );
}

export default ToDoList;
import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import TodoForm from "./components/TodoForm";

// import all data
import data from './data.json'


const App = () => {

    const [toDoList, setToDOList] = useState(data);


    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
          return task.id === id ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDOList(mapped);
    }


    const handleClear = () =>{
      const filtered = toDoList.filter(item => !item.complete)

      setToDOList(filtered)
      console.log('completed')
    }

  

    const addTask = (newVal) =>{
      let copy = [...toDoList]

      copy = [...copy, {id : toDoList.length + 1, task : newVal, complete : false}]

      setToDOList(copy)
    }


    return (
       <div className="text-center py-12">
          <Header />
            <TodoForm addTask={addTask}/>
           
            <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleClear={handleClear} />
       </div>
    );
}

export default App;

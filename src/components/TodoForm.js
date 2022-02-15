import React, {useState, useRef, useEffect} from 'react'


const TodoForm = ({addTask}) => {

  console.log('form')

 //input value
  const [newTodo, setNewTodo] = useState('');

  const inputEl = useRef(null);

  useEffect(()=>{
    inputEl.current.focus()
  })  

  const handleChange = (e) =>{
      setNewTodo(e.target.value)
      console.log(newTodo)
  }



  const handleSubmit = (e) =>{
    e.preventDefault();

    // callback function 
    addTask(newTodo)

    // clear input Value
    setNewTodo("")
  }



  return (
    <>

        <form onSubmit={handleSubmit}>
            <input ref={inputEl} placeholder="Add your todos" type="text" onChange={handleChange} value={newTodo} className="border-2 border-gray-900 h-10 w-96 mb-8 py-2 px-5 placeholder-gray-400 text-lg focus:outline-none"/>
        </form>

    </>
  )
}


export default TodoForm;
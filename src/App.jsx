import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from "react"

function App() {
  const[todo, setTodo] = useState("")
  const[todos, setTodos] = useState([])


  const dataToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let savedTodos = JSON.parse(localStorage.getItem("todos"))
      setTodos(savedTodos);
    }
  }, [])
  

    const handleAdd=() =>{
      if(todo.trim()){
        setTodos([...todos,{id: uuidv4(),todo, isCompleted: false }])
        setTodo("")
        console.log(todos)
        dataToLS()
      }
        
    }
    const handleDelete=(e,id) =>{
      let newTodos = todos.filter(item=>{
        return item.id !== id
      })
      setTodos(newTodos)
      dataToLS()
    }
    const handleCheck=(e) =>{
      let id = e.target.name;
      let index = todos.findIndex(item=>{
        return item.id === id;
      })
      let newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos)
      dataToLS()
    }
  return(
    <>
    <Navbar/>
      <div className='container mx-auto my-5 rounded-xl  p-5 bg-white min-h-[85vh] text-center w-[150vh]'>
          <div className='addTask mx-5 my-4'>
              <h1 className='text-2xl font-bold text-blue-900 py-3'>To-Do List</h1>
              <input type="text" placeholder='Add your Task' value={todo}  onChange={(e) => setTodo(e.target.value)} className='p-2 rounded-full bg-slate-300 w-80 pl-4 font-semibold' />
              <button onClick={handleAdd} className='bg-orange-600 rounded-full px-8 p-2 font-bold hover:bg-slate-300 hover:text-slate-200 text-white mx-6'>Add</button>
          </div>
          <h2 className='text-lg font-bold py-5'>Your List</h2>
          <div className="todos container bg-zinc-300 rounded-md min-h-[60vh]
           py-4">
            {todos.length === 0 && <div className="m-5 font-bold text-blue-950 text-xl ">No Tasks to display</div> }
              {todos.map(item=>{

            
              return <div key = {item.id} className="todo flex items-center justify-between my-3 text-xl mx-5">
                <div className="flex gap-5">
                <div className="flex items-center">
                  <input onChange={handleCheck} type="checkbox" value = {item.isCompleted} name={item.id} id="" className="mr-3"/>
                </div>
                
                  <h2 className={item.isCompleted?"line-through":"font-bold"}>{item.todo}</h2>
                  </div>
                  <div className="buttons flex h-full">
                      <button onClick={(e)=>handleDelete(e,item.id)} className=' bg-orange-600 rounded-full px-4 p-1 font-bold hover:bg-slate-300 hover:text-slate-200 text-white mx-1'>Delete</button>
              </div>
              </div>
                })}
              
          </div>
      </div>
      <Footer/>
    </>
  )

}

export default App

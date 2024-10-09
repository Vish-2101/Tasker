import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { useState } from "react"

function App() {
  const[todo, setTodo] = useState("")
  const[todos, setTodos] = useState([])

    const handleAdd=() =>{
      if(todo.trim()){
        setTodos([...todos,{todo, isCompleted: false }])
        setTodo("")
        console.log(todos)
      }
        
    }
    const handleEdit=() =>{

    }
    const handleDelete=() =>{
    }
  return(
    <>
    <Navbar/>
      <div className='container mx-auto my-5 rounded-xl  p-5 bg-white min-h-[85vh] text-center'>
          <div className='addTask mx-5 my-4'>
              <h1 className='text-2xl font-bold text-blue-900 py-3'>To-Do List</h1>
              <input type="text" placeholder='Add your Task' value={todo}  onChange={(e) => setTodo(e.target.value)} className='p-2 rounded-full bg-slate-300 w-80 pl-4 font-semibold' />
              <button onClick={handleAdd} className='bg-orange-600 rounded-full px-8 p-2 font-bold hover:bg-slate-300 hover:text-slate-200 text-white mx-6'>Add</button>
          </div>
          <h2 className='text-lg font-bold py-5'>Your List</h2>
          <div className="todos container bg-zinc-300 rounded-md min-h-[60vh]">
              {todos.map(item=>{

            
              return <div className="todo flex ">
                  <h2 className={item.isCompleted?"":"line-through my-3 "}>{item.todo}</h2>
                  <div className="buttons">
                      <button onClick={handleEdit} className=' bg-orange-600 rounded-full px-4 p-1 font-bold hover:bg-slate-300 hover:text-slate-200 text-white mx-1'>Edit</button>
                      <button onClick={handleDelete} className=' bg-orange-600 rounded-full px-4 p-1 font-bold hover:bg-slate-300 hover:text-slate-200 text-white mx-1'>Delete</button>
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

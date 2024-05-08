import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'


function AddTodo() {

    const dispatch = useDispatch()
    const [item, setItem] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addTodo(item))
        setItem("")
    }


    return(
        <form 
        className='flex flex-wrap items-center justify-center mt-10'
        onSubmit={handleSubmit}>
            
            <div >
            <input 
            className='h-10 flex p-2 justify-start  min-w-12rem rounded-lg border-gray-400  mr-4 indent-4 text-emerald-900 shadow-lg  '
            type="text"
            placeholder='Enter task..'
            value={item}
            onChange={(e)=>{
               
                setItem(e.target.value)
            }}
            required
             />
            </div>
            <div>
                <button 
                className='relative inline-block px-4 py-2 font-medium group:'
                type='submit'>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Add Todo</span>
                </button>
            </div>
           
        </form>
    )
}
export default AddTodo;


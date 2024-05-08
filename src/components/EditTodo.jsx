import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import {editTodo} from './store/todoSlice'


function EditTodo( itemId, status) {

    
    const dispatch = useDispatch()
    const [retrievedItem, setRetrievedItem]= useState('')
    const [editing, setEditing]= useState('')

useEffect(()=>{
    const items = useSelector(state=>state.todo.todos)
    setRetrievedItem(items.find((item)=> itemId === item.id))

},[itemId])

const handleEdit = ({itemId})=>{
    dispatch(editTodo( editing))
}

  return (

 <div>
    {status && (
         <div>
         <form 
       className='flex flex-wrap items-center justify-center mt-10'
       onSubmit={handleEdit(itemId)}>
           
           <div >
           <input 
           className='h-10 flex p-2 justify-start  min-w-12rem rounded-lg border-gray-400  mr-4 indent-4 text-emerald-900 shadow-lg  '
           type="text"
           value={retrievedItem.text}
           onChange={(e)=>{
              
               setEditing(e.target.value)
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
                   <span className="relative text-black group-hover:text-white">Update</span>
               </button>
           </div>
          
       </form>
   
     </div>
    )}
 </div>

  )
}

export default EditTodo

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/todoSlice';



const Modal= ({modalOpen,setModalOpen}) => {
	const [value, setValue] = useState('');


    const dispatch=useDispatch()

	const onSubmit = (event) => {
		event.preventDefault();


        dispatch(addTodo({
          id:uuidv4(),
            title:value,
            completed:false
        }))
        setModalOpen(false)
        setValue("")
	};
    
  return (
<dialog id="my_modal_3 " className={`modal ${modalOpen ? "modal-open" : ""}`}>
  <div className="modal-box ">
    <form className='' method="dialog" onSubmit={onSubmit}>
      <button onClick={()=>setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <h3 className='bold text-lg'>Add new task</h3>
      <div className='modal-action'>
      <input
    type='text'
    className='form-control mb-2 mr-sm-2'
    placeholder='Add todo...'
    value={value}
    onChange={(event) => setValue(event.target.value)}></input>

<button type='submit' className='btn btn-primary mb-2'>
    Submit
</button>
      </div>
    </form>
  </div>
</dialog>
  )
}



export default Modal
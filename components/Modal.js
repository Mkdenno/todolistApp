import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {BsFillCalendarDayFill} from 'react-icons/bs'
import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css";

import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/todoSlice';



const Modal= ({modalOpen,setModalOpen}) => {
	const [value, setValue] = useState('');
  const [date, setDate] = useState(null);

	const [showCalendar, setShowCalendar] = useState(false);


    const dispatch=useDispatch()

	const onSubmit = (event) => {
		event.preventDefault();


        dispatch(addTodo({
          id:uuidv4(),
            title:value,
            completed:false,
            date:date.toLocaleDateString()
        }))
        setModalOpen(false)
        setValue("")
        setDate("")
	};
    
  return (
    <div>
<dialog id="my_modal_3 " className={`modal ${modalOpen ? "modal-open" : ""}`}>
  <div className="modal-box ">
    <form className='' method="dialog" onSubmit={onSubmit}>
      <button onClick={()=>setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <h3 className='bold text-lg'>Add new task</h3>
      <div className='modal-action'>
      <input
    type='text'
    className="input input-bordered w-full"    placeholder='Add todo...'
    value={value}
    onChange={(event) => setValue(event.target.value)}></input>
          </div>
    <div onClick={()=>setShowCalendar(true)} className="flex justify-between items-center w-full mb-3 mt-4 p-2 rounded-md border">
      <p>{date ? date.toLocaleDateString() : "Select Due Date"}</p>
      <BsFillCalendarDayFill />
    </div>

<button type='submit' className='btn'>
    Submit
</button>

    </form>
  </div>
</dialog>

<dialog className={`modal ${showCalendar ? "modal-open" : ""}`}>

 <div className="modal-box rounded-md flex flex-col items-center justify-center">

 <button

onClick={() => setShowCalendar(false)}

className="btn btn-sm border-none outline-none absolute right-2 top-2 ">✕</button>

 <Calendar onChange={setDate} value={date} />

 <button

onClick={() => {

setShowCalendar(false);

 }}

className="btn mt-2 text-blue-800 hover:bg-blue-100">Save </button>

 </div>

 </dialog>
</div>


  )
}



export default Modal
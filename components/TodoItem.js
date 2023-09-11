
'use client'

import React from 'react';
import {useDispatch} from 'react-redux'
import { toggleComplete,deleteTodo } from '@/redux/todoSlice';
import { FiTrash2 } from "react-icons/fi";


const TodoItem = ({ id, title, completed,date }) => {
    const dispatch=useDispatch();

    const handleDeleteTodo=()=>{
        dispatch(deleteTodo(
        id
        ))
    }

    const handlecompleteClick=()=>{
        dispatch(toggleComplete({
            id: id,
            completed: !completed,
            title:title,
            date:date
        }))
    }
	return (


        <div className="m-5 bg-base-200">

      <tr className=" p-10 ">
        <td className="   w-full">
        <input type='checkbox' className="mr-2 checkbox"  checked={completed} onChange={handlecompleteClick} size={20}/>
          <span>{title}</span><br/><br/>
          <span className="ml-2 font-bold text-red-500 ">{date}</span>
          
          </td>
        <td className="">
        <FiTrash2 onClick={handleDeleteTodo} cursor="pointer" className="text-red-500" size={20} />
        </td>
      </tr>
</div>

        
	);
};

export default TodoItem;

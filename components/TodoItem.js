
'use client'

import React from 'react';
import {useDispatch} from 'react-redux'
import { toggleComplete,deleteTodo } from '@/redux/todoSlice';
import { FiTrash2 } from "react-icons/fi";


const TodoItem = ({ id, title, completed }) => {
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
            title:title
        }))
    }
	return (


        <div className="m-5">

      <tr className=" bg-base-200">
        <td className="w-full">{title}</td>
        <td className="flex gap-5">
        <input type='checkbox' className="checkbox"  checked={completed} onChange={handlecompleteClick} size={20}/>
        <FiTrash2 onClick={handleDeleteTodo} cursor="pointer" className="text-red-500" size={20} />
           </td>
      </tr>
</div>

        
	);
};

export default TodoItem;

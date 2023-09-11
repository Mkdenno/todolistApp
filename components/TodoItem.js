
// 'use client'
// import React from 'react';
// import {useDispatch} from 'react-redux'
// import { toggleComplete,deleteTodo } from '@/redux/todoSlice';
// import { FiTrash2 } from "react-icons/fi";


// const TodoItem = ({ id, title, completed }) => {
//     const dispatch=useDispatch();

//     const handleDeleteTodo=()=>{
//         dispatch(deleteTodo(
//         id
//         ))
//     }

//     const handlecompleteClick=()=>{
//         dispatch(toggleComplete({
//             id: id,
//             completed: !completed
//         }))
//     }
// 	return (


//         <div className="overflow-x-auto">
//   <table className="table">

//     <tbody>
//       <tr className="m-4 bg-base-200">
//         <td className=''><input type='checkbox' className='mr-3' onChange={handlecompleteClick}></input></td>
//         <td>{title}</td>
//         <td><button onClick={handleDeleteTodo}> <FiTrash2 cursor="pointer" className="text-red-500"  /></button></td>
//       </tr>


//     </tbody>
//   </table>
// </div>

        
// 	);
// };

// export default TodoItem;

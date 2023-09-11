'use client'
import React, { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import Modal from './Modal';



const AddTodoForm = () => {
    const [modalOpen, setModalOpen]=useState(false);


	return (

        <div>
            <button onClick={()=>setModalOpen(true)} className='btn btn-primary w-full'>Add New Task <AiOutlinePlus className='ml-2' size={10}/></button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
       </div>
	);
};

export default AddTodoForm;

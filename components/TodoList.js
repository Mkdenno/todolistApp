'use client'
import React from 'react';
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux'

const TodoList = () => {
    const todos=useSelector((state)=>state.todos.todoList)


	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;

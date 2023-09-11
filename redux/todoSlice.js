import {
    createSlice
} from '@reduxjs/toolkit'
const TODO_LIST_KEY = "todolist"

const isWindowDefined = typeof window !== "undefined";


const getInitialToDos = () => {

    if (isWindowDefined) {
        const localList = window.localStorage.getItem(TODO_LIST_KEY);

        if (localList) {

            return JSON.parse(localList);
        }
        window.localStorage.setItem(TODO_LIST_KEY, JSON.stringify([]));
    }
    return [];

};

const initialState = {

    todoList: getInitialToDos(),

};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
            const todoList = window.localStorage.getItem(TODO_LIST_KEY);

            if (todoList) {

                const todoListArr = JSON.parse(todoList);

                todoListArr.push({
                    ...action.payload
                });

                window.localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoListArr));

            } else {

                window.localStorage.setItem(

                    TODO_LIST_KEY,

                    JSON.stringify({
                        ...action.payload
                    })

                );

            }
        },
        toggleComplete: (state, action) => {
            const todoList = window.localStorage.getItem(TODO_LIST_KEY);

            if (todoList) {

                const todoListArr = JSON.parse(todoList);

                todoListArr.forEach((todo, index) => {

                    if (todo.id === action.payload.id) {

                        todo.title = action.payload.title;
                        todo.date = action.payload.date;

                        todo.completed = action.payload.completed;

                    }

                });

                window.localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoListArr));

                state.todoList = todoListArr;

            }
        },
        deleteTodo: (state, action) => {
            const todoList = window.localStorage.getItem(TODO_LIST_KEY);

            if (todoList) {

                const todoListArr = JSON.parse(todoList);

                todoListArr.forEach((todo, index) => {

                    if (todo.id === action.payload) {

                        todoListArr.splice(index, 1);

                    }

                });

                window.localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoListArr));

                state.todoList = todoListArr;

            }
        }
    }
})
export const {
    addTodo,
    toggleComplete,
    deleteTodo
} = todoSlice.actions

export default todoSlice.reducer
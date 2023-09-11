"use client"

import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import TotalCompleteItems from "@/components/TotalCompletedItems";


export default function Home() {
  return (
    <main className="max-w-4xl mx-auto  mt-4">

            <div className="text-center my-5 flex flex-col gap-5">
          <h1 className="text-2xl font-bold">My TodoList Application</h1>
          <AddTodoForm/>
        </div>
        <TodoList/>

    </main>
  )
}

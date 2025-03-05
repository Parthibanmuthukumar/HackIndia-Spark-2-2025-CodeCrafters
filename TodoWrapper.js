import React, { useState } from "react";
import { Todo } from "./Todo";
import { useNavigate } from "react-router-dom";
import { TodoForm } from "./TodoDoc";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const navigate=useNavigate()
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  function moveEmail(){
    navigate("/Email")
  }

  return (
    <div className="TodoWrapper">
      <h1 className="h1">Your Productivity Hub!</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}/>        
        )
      )}
       <p class="text-white border-2 border-white bg-black w-fit p-2" onClick={moveEmail}>Send Email</p> 
       <iframe
    src="https://www.chatbase.co/chatbot-iframe/-H8W7LQ9nD4av031DeqlK"
    width="100%"
    frameborder="0" className="m-5"
></iframe>
   </div>
  );
};

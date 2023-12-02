import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";

uuidv4();

function ToDoWrapper() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), 
        title: todo.title,
        description: todo.description,
        status: todo.status,
        dueDate: todo.dueDate,
        value: todo.value, 
        completed: false, 
        isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
            const newCompletedStatus = !todo.completed;

          return {
            ...todo,
            completed: !todo.completed,
            status: newCompletedStatus ? "Completed" : "In Progress",
          };
        }
        return todo;
      })
    );
  };

  const toggleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEditing: !todo.isEditing,
          };
        }
        return todo;
      })
    );
  };

  const updateTaskText = (updatedToDo) => {
    console.log("updating task", updatedToDo)
    setTodos(
      todos.map((todo) => {
        if (todo.id === updatedToDo.id) {
          return {
            ...todo,
            ...updatedToDo,
            isEditing: false,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <ToDoForm addToDo={addToDo} />
  
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditToDoForm EditToDo={updateTaskText} task={todo} key ={todo.id}/>
        ) : (
          <ToDo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            toggleDelete={toggleDelete}
            toggleEdit={toggleEdit}
          />
        )
      )}
    </div>
  );
}

export default ToDoWrapper;

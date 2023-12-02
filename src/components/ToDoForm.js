import React, { useState } from "react";

function ToDoForm({ addToDo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo({
        title: title,
        description: description,
        status: status,
        dueDate: dueDate,
        value: value});
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <h1>To-Do Form</h1>
      <form className="ToDoForm" onSubmit={handleSubmit}>
        <div >
          <label htmlFor="title">Title</label>
            <input
              type="text"
              className="todo-input"
              placeholder="What is the title of the task?"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
          <label htmlFor="description">Description</label>
            <input
              type="text"
              className="todo-input"
              placeholder="What is the description of the task?"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select
                id = "status"
                className = "todo-select"
                value={status}
                onChange={handleStatusChange}
                >
                    <option value ="">Select a Status </option>
                    <option value ="Pending">Pending </option>
                    <option value ="In Progress">In-Progress </option>
                    <option value ="Completed">Completed </option>
                </select>
          </div>
          <div>
            <label htmlFor="duedate">Due Date</label>
            <input
              type="date"
              className="todo-input"
              placeholder="What is the due date of the task?"
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div>
          <label htmlFor="task">Task</label>
            <input
              type="text"
              className="todo-input"
              placeholder="What task do you want to add today?"
              onChange={(e) => setValue(e.target.value)}
            />
            <div style = {{display: "flex", justifyContent: "center"}}>
              <button type="submit" className="todo-btn">
                Add Task
              </button>
            </div>
        </div>
      </form>
    </div>
  );
}

export default ToDoForm;

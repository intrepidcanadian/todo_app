import React, { useState, useEffect } from "react";

function EditToDoForm({ EditToDo, task }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setDueDate(task.dueDate);
    setValue(task.task);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    EditToDo({
        id: task.id,
        title: title,
        description: description,
        status: status,
        dueDate: dueDate,
        value: value,
    })
    console.log(task.id);
    console.log(e)
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };


  return (
    <div>
      Editing The Task
      <form className="ToDoForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="todo-input"
            placeholder={title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="todo-input"
            placeholder={description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            className="todo-select"
            placeholder={status}
            value={status}
            onChange={handleStatusChange}
          >
            <option value="">Select a Status </option>
            <option value="Pending">In-Progress </option>
            <option value="Completed">Completed </option>
          </select>
        </div>
        <div>
          <label htmlFor="duedate">Due Date</label>
          <input
            type="date"
            className="todo-input"
            placeholder={dueDate}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            className="todo-input"
            placeholder={value}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" className="todo-btn">
              Edit Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditToDoForm;

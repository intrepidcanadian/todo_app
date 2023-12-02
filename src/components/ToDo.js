import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';

function ToDo({ task, toggleComplete, toggleDelete, toggleEdit }) {
    console.log(task);

  return (
    <div className = "Todo">
      <div className ="Todo__list" >
        <h3>Title:</h3>
        {task.title ? (<p>{task.title}</p>) : ("")}
      </div>
      <div className ="Todo__list">
        <h3>Description:</h3>
        <p>{task.description}</p>
      </div>
      <div className ="Todo__list">
      <h3>Status:</h3>
        <p>{task.status}</p>
      </div>
      <div className ="Todo__list">
      <h3>Due Date:</h3>
        <p>{task.dueDate}</p>
      </div>
      <div className ="Todo__list">
        <h3>Task Details:</h3>
        <p>
          {task.value}
          </p>
      </div>
      <div className = "Todo__icons">
        <EditIcon onClick={() => toggleEdit(task.id)} />
        <DeleteIcon onClick={() => toggleDelete(task.id)} />
        <CheckIcon onClick={() => toggleComplete(task.id)} />
      </div>
    </div>
  );
}

export default ToDo;

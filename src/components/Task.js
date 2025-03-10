import React from "react";

function Task({ id, category, text, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
        className="delete" 
        onClick={() => onDeleteTask(id)}
      >
        X
      </button>
    </div>
  );
}

export default Task;

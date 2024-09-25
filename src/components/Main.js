import React from "react";

function Main({ tasks, handleTaskChange }) {
  return (
    <main className="main">
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskChange(task.id)}
          />
          {task.name}
        </div>
      ))}
    </main>
  );
}

export default Main;
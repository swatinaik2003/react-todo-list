 import React from "react";

function Main({ tasks, handleTaskChange }) {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <main className="main">
      <h2>Incompleted Tasks</h2>
      {incompleteTasks.length === 0 ? (
        <p>No incomplete tasks</p>
      ) : (
        incompleteTasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskChange(task.id)}
            />
            {task.name}
          </div>
        ))
      )}

      <h2>Completed Tasks</h2>
      {completedTasks.length === 0 ? (
        <p>No completed tasks</p>
      ) : (
        completedTasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskChange(task.id)}
              readOnly
            />
            <span style={{ textDecoration: "line-through" }}>{task.name}</span>
          </div>
        ))
      )}
    </main>
  );
}

export default Main;

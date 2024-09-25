 import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Shopping", completed: false },
    { id: 2, name: "Cooking", completed: false },
    { id: 3, name: "Watching movies", completed: false },
  ]);

  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleTaskChange = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <Main tasks={tasks} handleTaskChange={handleTaskChange} />
      <Footer addTask={addTask} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;

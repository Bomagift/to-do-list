
import { useState } from "react";
import './App.css';



function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setTaskInput(tasks[index]);
  };

  const saveEditedTask = () => {
    if (taskInput.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = taskInput;
      setTasks(updatedTasks);
      setTaskInput('');
      setEditingIndex(null);
    }
  };


  return (

    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add your new todo"
          value={taskInput}
          onChange={handleInputChange}
        />

       {editingIndex !== null ? (
          <button onClick={saveEditedTask}>Save</button>
        ) : (
        <button onClick={addTask}>Add</button>
     
        )}
         </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span>{task}</span>
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => removeTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
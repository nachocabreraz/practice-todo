// Hooks
import { useEffect, useState } from 'react';
// Styles
import './App.css'
// Components
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Form from './components/Form';

// Info
import data from './data';

function App() {
  const [listElements, setListElements] = useState(data);

  const addTask = (task) => {
    let newElements = [...listElements];
    newElements = [...newElements, { id: listElements.length + 1, task: task, complete: false }];
    setListElements(newElements);
  };

  const toggleHandler = (id) => {
    let mapped = listElements.map((task) => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task };
    });
    setListElements(mapped);
  };


  return (
    <div>
      <Header />
      <ToDoList list={listElements} toggleHandler={toggleHandler} />
      <Form addTask={addTask} />
    </div>
  )
}

export default App

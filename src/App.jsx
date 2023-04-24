// Hooks
import { useEffect, useState } from 'react';
// Styles
import './App.css'
// Components
import Header from './components/Header';
import ToDoList from './components/ToDoList';

// Info
import data from './data';

function App() {
  const [listElements, setListElements] = useState(data);

  const handleDelete = (id)=> {
    let newElements = listElements.filter((task) => task.id == id)
    setListElements(newElements);
  };

  /* useEffect(() => {

  }, [listElements]); */


  return (
    <div>
      <Header />
      <ToDoList list={listElements} />
    </div>
  )
}

export default App

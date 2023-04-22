// Hooks
import { useState } from 'react';
// Styles
import './App.css'
// Components
import Header from './components/Header';
import ToDoList from './components/ToDoList';

// Info
import data from './data';

function App() {
  const [listElements, setListElements] = useState(data);

  return (
    <div>
      <Header />
      <ToDoList list={listElements} />
    </div>
  )
}

export default App

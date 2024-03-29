import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Task from './components/Task';
import Sidebar from './components/SideBar';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Task />
        </div>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import About from './components/About';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <h1>Todo App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddTodo />
              <TodoList />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
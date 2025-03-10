import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/todoSlice';
import '../css/AddTodo.css';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
      setError('');
    } else {
      setError('Todo không được để trống');
    }
  };

  return (
    <div className="add-todo-container">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Thêm công việc mới"
            className="todo-input"
          />
          <button type="submit" className="add-button">
            Thêm
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AddTodo;
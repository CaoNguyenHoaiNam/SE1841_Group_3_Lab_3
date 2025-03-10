import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../store/slices/todoSlice';
import '../css/TodoItem.css';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    if (isEditing) {
      if (editedText.trim()) {
        dispatch(editTodo({ id, text: editedText }));
        setIsEditing(false);
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setEditedText(text);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <div className="todo-item-content">
        <div className="todo-checkbox-container">
          <input 
            type="checkbox" 
            checked={completed} 
            onChange={handleToggle} 
            className="todo-checkbox" 
            id={`todo-${id}`}
          />
          <label 
            htmlFor={`todo-${id}`} 
            className="checkbox-label"
          ></label>
        </div>
        
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="edit-todo-input"
            autoFocus
          />
        ) : (
          <span className={`todo-text ${completed ? 'completed' : ''}`}>
            {text}
          </span>
        )}
      </div>
      
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleEdit} className="save-button">
              Lưu
            </button>
            <button onClick={handleCancel} className="cancel-button">
              Hủy
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className="edit-button">
              Sửa
            </button>
            <button onClick={handleDelete} className="delete-button">
              Xóa
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
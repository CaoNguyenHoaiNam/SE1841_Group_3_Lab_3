import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import TodoItem from './TodoItem';
import '../css/TodoList.css';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-title">Danh sách công việc</h2>
      
      {todos.length === 0 ? (
        <div className="empty-state">
          <p>Chưa có công việc nào. Hãy thêm công việc mới!</p>
        </div>
      ) : (
        <div className="todo-items">
          {todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              id={todo.id} 
              text={todo.text} 
              completed={todo.completed} 
            />
          ))}
        </div>
      )}
      
      {todos.length > 0 && (
        <div className="todo-summary">
          <p>Tổng số: {todos.length} công việc</p>
          <p>Hoàn thành: {todos.filter(todo => todo.completed).length}</p>
          <p>Còn lại: {todos.filter(todo => !todo.completed).length}</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;

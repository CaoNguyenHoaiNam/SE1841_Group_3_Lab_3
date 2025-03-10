import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { addTodo, toggleTodo, editTodo, deleteTodo } from '../../src/store/slices/todoSlice';
import { useTodos } from '../../src/hooks/useTodos';

// Tạo mock store cho test
const createTestStore = () => {
  return configureStore({
    reducer: {
      todos: todoReducer
    }
  });
};

// Wrapper component để cung cấp Redux store cho hooks
const wrapper = ({ children }) => {
  const store = createTestStore();
  return <Provider store={store}>{children}</Provider>;
};

describe('useTodos hook', () => {
  test('should return todos list', () => {
    const { result } = renderHook(() => useTodos(), { wrapper });
    expect(result.current.todos).toBeDefined();
    expect(Array.isArray(result.current.todos)).toBe(true);
  });

  test('should add a new todo', () => {
    const { result } = renderHook(() => useTodos(), { wrapper });
    
    act(() => {
      result.current.addTodo('Test Todo');
    });
    
    expect(result.current.todos.length).toBeGreaterThan(0);
    expect(result.current.todos.some(todo => todo.text === 'Test Todo')).toBe(true);
  });

  test('should toggle todo completion status', () => {
    const { result } = renderHook(() => useTodos(), { wrapper });
    
    // Thêm một todo mới
    act(() => {
      result.current.addTodo('Toggle Test Todo');
    });
    
    // Lấy id của todo vừa thêm
    const todoId = result.current.todos.find(todo => todo.text === 'Toggle Test Todo')?.id;
    
    // Toggle todo
    act(() => {
      result.current.toggleTodo(todoId);
    });
    
    // Kiểm tra xem todo có được toggle không
    expect(result.current.todos.find(todo => todo.id === todoId)?.completed).toBe(true);
  });

  test('should edit todo text', () => {
    const { result } = renderHook(() => useTodos(), { wrapper });
    
    // Thêm một todo mới
    act(() => {
      result.current.addTodo('Edit Test Todo');
    });
    
    // Lấy id của todo vừa thêm
    const todoId = result.current.todos.find(todo => todo.text === 'Edit Test Todo')?.id;
    
    // Sửa todo
    act(() => {
      result.current.editTodo(todoId, 'Updated Test Todo');
    });
    
    // Kiểm tra xem todo có được cập nhật không
    expect(result.current.todos.find(todo => todo.id === todoId)?.text).toBe('Updated Test Todo');
  });

  test('should delete a todo', () => {
    const { result } = renderHook(() => useTodos(), { wrapper });
    
    // Thêm một todo mới
    act(() => {
      result.current.addTodo('Delete Test Todo');
    });
    
    // Lấy id của todo vừa thêm
    const todoId = result.current.todos.find(todo => todo.text === 'Delete Test Todo')?.id;
    const initialLength = result.current.todos.length;
    
    // Xóa todo
    act(() => {
      result.current.deleteTodo(todoId);
    });
    
    // Kiểm tra xem todo có bị xóa không
    expect(result.current.todos.length).toBe(initialLength - 1);
    expect(result.current.todos.some(todo => todo.id === todoId)).toBe(false);
  });
});
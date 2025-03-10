import { useDispatch, useSelector } from 'react-redux';
import { addTodo as addTodoAction, toggleTodo as toggleTodoAction, 
         editTodo as editTodoAction, deleteTodo as deleteTodoAction } from '../store/slices/todoSlice';

export const useTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const addTodo = (text: string) => {
    dispatch(addTodoAction(text));
  };

  const toggleTodo = (id: string) => {
    dispatch(toggleTodoAction(id));
  };

  const editTodo = (id: unknown, text: unknown) => {
    dispatch(editTodoAction({ id, text }));
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo
  };
};
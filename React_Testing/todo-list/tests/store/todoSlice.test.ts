import todoReducer, { addTodo, toggleTodo, editTodo, deleteTodo } from '../../src/store/slices/todoSlice';

test('should add a new todo', () => {
  const initialState = { todos: [] };
  const action = addTodo('Test Todo');
  const state = todoReducer(initialState, action);
  expect(state.todos.length).toBe(1);
  expect(state.todos[0].text).toBe('Test Todo');
});

test('should toggle todo completion', () => {
  const initialState = {
    todos: [{ id: '1', text: 'Test Todo', completed: false }],
  };
  const action = toggleTodo('1');
  const state = todoReducer(initialState, action);
  expect(state.todos[0].completed).toBe(true);
});

test('should edit todo text', () => {
  const initialState = {
    todos: [{ id: '1', text: 'Test Todo', completed: false }],
  };
  const action = editTodo({ id: '1', text: 'Updated Todo' });
  const state = todoReducer(initialState, action);
  expect(state.todos[0].text).toBe('Updated Todo');
});

test('should delete a todo', () => {
  const initialState = {
    todos: [{ id: '1', text: 'Test Todo', completed: false }],
  };
  const action = deleteTodo('1');
  const state = todoReducer(initialState, action);
  expect(state.todos.length).toBe(0);
});

test('should handle multiple todos', () => {
  const initialState = { todos: [] };
  let state = todoReducer(initialState, addTodo('Todo 1'));
  state = todoReducer(state, addTodo('Todo 2'));
  state = todoReducer(state, addTodo('Todo 3'));
  expect(state.todos.length).toBe(3);
});
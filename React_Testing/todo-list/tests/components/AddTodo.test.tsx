import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';
import AddTodo from '../../src/components/AddTodo';

test('adds a new todo', () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );

  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('does not add todo with empty input', () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
  
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add');
  
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);
  
    expect(screen.queryByText(/New Todo/i)).not.toBeInTheDocument();
});

test('shows error when adding todo with empty input', () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );

  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(button);

  expect(screen.getByText('Todo cannot be empty')).toBeInTheDocument();
});

test('shows error when adding todo with empty input', () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add');
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(button);
  expect(screen.getByText('Todo cannot be empty')).toBeInTheDocument();
});
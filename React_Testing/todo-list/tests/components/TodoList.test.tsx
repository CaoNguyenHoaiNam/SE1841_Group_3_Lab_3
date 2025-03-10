import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';
import TodoList from '../../src/components/TodoList';
import '@testing-library/jest-dom';


test('renders todo list', () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(screen.getByText(/Test Todo/i)).toBeInTheDocument();
});
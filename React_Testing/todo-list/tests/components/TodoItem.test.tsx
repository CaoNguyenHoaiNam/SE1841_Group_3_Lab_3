import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';
import TodoItem from '../../src/components/TodoItem';
import '@testing-library/jest-dom';

test('renders todo item and toggles completion', () => {
  render(
    <Provider store={store}>
      <TodoItem id="1" text="Test Todo" completed={false} />
    </Provider>
  );

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

test('does not crash when editing a non-existent todo', () => {
  render(
    <Provider store={store}>
      <TodoItem id="999" text="Non-existent Todo" completed={false} />
    </Provider>
  );

  const editButton = screen.getByText('Edit');
  fireEvent.click(editButton);
  expect(screen.getByText(/Non-existent Todo/i)).toBeInTheDocument();
});


// Chỉnh Sửa Todo Không Tồn Tại

test('does not crash when editing a non-existent todo', () => {
  render(
    <Provider store={store}>
      <TodoItem id="999" text="Non-existent Todo" completed={false} />
    </Provider>
  );

  const editButton = screen.getByText('Edit');
  fireEvent.click(editButton);

  expect(screen.getByText('Non-existent Todo')).toBeInTheDocument();
});

// Xóa Todo Không Tồn Tại

test('does not crash when deleting a non-existent todo', () => {
  render(
    <Provider store={store}>
      <TodoItem id="999" text="Non-existent Todo" completed={false} />
    </Provider>
  );

  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);

  
  expect(screen.getByText('Non-existent Todo')).toBeInTheDocument();
});

test('enters and exits edit mode', () => {
  render(
    <Provider store={store}>
      <TodoItem id="1" text="Test Todo" completed={false} />
    </Provider>
  );
  const editButton = screen.getByText('Edit');
  fireEvent.click(editButton);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Save'));
  expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
});
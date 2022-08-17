import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Calculate Board link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Calculate Board/i);
  expect(linkElement).toBeInTheDocument();
});

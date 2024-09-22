import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header'; 

test('renders welcome message', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Welcome to Fly Delay Track/i);
  expect(linkElement).toBeInTheDocument();
});

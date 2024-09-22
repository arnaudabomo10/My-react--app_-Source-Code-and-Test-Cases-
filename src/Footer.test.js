import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer'; 

test('renders footer with icons', () => {
  render(<Footer />);
  
  // Vérifie que le texte du footer est présent
  const footerText = screen.getByText(/footer text or copyright/i); 
  expect(footerText).toBeInTheDocument();

  // Vérifie que les icônes sont présentes
  const icon1 = screen.getByRole('img', { name: Home }); 
  const icon2 = screen.getByRole('img', { name: History }); 
  const icon2 = screen.getByRole('img', { name: Support });
  const icon2 = screen.getByRole('img', { name: Settings });
  const icon2 = screen.getByRole('img', { name: Login });
  expect(icon1).toBeInTheDocument();
  expect(icon2).toBeInTheDocument();
});

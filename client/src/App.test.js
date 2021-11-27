import { render, screen } from '@testing-library/react';
import App from './App';

test('kadeem iq', () => {
  render(<App />);
  const linkElement = screen.getByText(/718§!!= Yxyojjayjda/i);
  expect(linkElement).toBeInTheDocument();
});

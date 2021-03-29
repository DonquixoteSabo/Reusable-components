import { screen } from '@testing-library/react';
import ButtonPage from 'views/ButtonPage';
import renderWithProviders from 'renderWIthProviders';

describe('Button Page', () => {
  it('renders Button Page', () => {
    renderWithProviders(<ButtonPage />);
    expect(screen.getByText('Button component')).toBeInTheDocument();
  });
});

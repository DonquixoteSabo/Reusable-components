import { screen, fireEvent } from '@testing-library/react';
import Navigation from 'components/Navigation';
import renderWithProviders from 'renderWIthProviders';

describe('Navigation', () => {
  it('checks Navigation render', () => {
    renderWithProviders(<Navigation />);
    expect(screen.getByText('Colors')).toBeInTheDocument();
    expect(screen.getByText('Typography')).toBeInTheDocument();
    expect(screen.getByText('Spaces')).toBeInTheDocument();
    expect(screen.getByText('Buttons')).toBeInTheDocument();
    expect(screen.getByText('Inputs')).toBeInTheDocument();
    expect(screen.getByText('Grid')).toBeInTheDocument();
  });
  it('checks selecting active element', () => {
    renderWithProviders(<Navigation />);
    const buttonsLink = screen.getByText('Buttons');

    fireEvent.click(buttonsLink);
    expect(buttonsLink).toHaveClass('selected');
  });
});

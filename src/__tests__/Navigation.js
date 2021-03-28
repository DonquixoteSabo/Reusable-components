import { screen, fireEvent } from '@testing-library/react';
import Navigation from 'components/Navigation';
import renderWithProviders from 'renderWIthProviders';

describe('Navigation', () => {
  it('checks Navigation render', () => {
    renderWithProviders(<Navigation />);
    const buttonsLink = screen.getByText('Buttons');
    const colorsLink = screen.getByText('Colors');
    const typographyLink = screen.getByText('Typography');
    const spacesLink = screen.getByText('Spaces');
    const inputsLink = screen.getByText('Inputs');
    const gridLink = screen.getByText('Grid');

    expect(colorsLink).toBeInTheDocument();
    expect(typographyLink).toBeInTheDocument();
    expect(spacesLink).toBeInTheDocument();
    expect(buttonsLink).toBeInTheDocument();
    expect(inputsLink).toBeInTheDocument();
    expect(gridLink).toBeInTheDocument();
  });
  it('checks selecting active element', () => {
    renderWithProviders(<Navigation />);
    const buttonsLink = screen.getByText('Buttons');
    const colorsLink = screen.getByText('Colors');
    const typographyLink = screen.getByText('Typography');
    const spacesLink = screen.getByText('Spaces');
    const inputsLink = screen.getByText('Inputs');
    const gridLink = screen.getByText('Grid');

    fireEvent.click(buttonsLink);
    expect(buttonsLink).toHaveClass('active');
    expect(colorsLink).not.toHaveClass('active');
    expect(typographyLink).not.toHaveClass('active');
    expect(spacesLink).not.toHaveClass('active');
    expect(inputsLink).not.toHaveClass('active');
    expect(gridLink).not.toHaveClass('active');
  });
});

import { screen, fireEvent } from '@testing-library/react';
import Navigation from 'components/Navigation';
import renderWithProviders from 'renderWIthProviders';
import Root from 'Root';

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
  it('checks changing pages', () => {
    renderWithProviders(<Root />);

    const buttonsLink = screen.getByText('Buttons');
    const inputsLink = screen.getByText('Inputs');
    const colorsLink = screen.getByText('Colors');
    const typographyLink = screen.getByText('Typography');
    const spacesLink = screen.getByText('Spaces');
    const gridLink = screen.getByText('Grid');
    const pageLogo = screen.getByText('Reusable');

    //Buttons page
    fireEvent.click(buttonsLink);
    expect(screen.getByText('Button component')).toBeInTheDocument();
    //Inputs page
    fireEvent.click(inputsLink);
    expect(screen.getByText('Input component')).toBeInTheDocument();
    //Colors page
    fireEvent.click(colorsLink);
    expect(
      screen.getByText('You will see something about colors here soon!')
    ).toBeInTheDocument();
    //Typography page
    fireEvent.click(typographyLink);
    expect(
      screen.getByText('You will see something about typography here soon!')
    ).toBeInTheDocument();
    //Spaces page
    fireEvent.click(spacesLink);
    expect(
      screen.getByText('You will see something about spaces here soon!')
    ).toBeInTheDocument();
    //Grid page
    fireEvent.click(gridLink);
    expect(
      screen.getByText('You will see something about grid here soon!')
    ).toBeInTheDocument();
    //Main page
    fireEvent.click(pageLogo);
    expect(screen.getByText('Main Page')).toBeInTheDocument();
  });
});

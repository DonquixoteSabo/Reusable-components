import { screen } from '@testing-library/react';
import Button from 'components/Button';
import renderWithProviders from 'renderWIthProviders';

describe('Button', () => {
  it('checks default', () => {
    renderWithProviders(<Button>Default</Button>);
    const button = screen.getByText('Default');
    expect(button).toBeInTheDocument();
  });
});

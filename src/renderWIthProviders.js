import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

const renderWithProviders = children => {
  return render(
    <Router>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Router>
  );
};

export default renderWithProviders;

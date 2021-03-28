import Navigation from 'components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ButtonPage from 'views/ButtonPage';
import { Wrapper } from 'Root.styles.js';

function Root() {
  return (
    <Router>
      <Navigation />
      <Wrapper>
        <Switch>
          <Route path="/">
            <ButtonPage />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default Root;

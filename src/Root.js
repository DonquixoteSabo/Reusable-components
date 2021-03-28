import Navigation from 'components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ButtonPage from 'views/ButtonPage';
import { Wrapper } from 'Root.styles.js';
import MainPage from 'views/MainPage';
import InputPage from 'views/InputPage';

function Root() {
  return (
    <Router>
      <Navigation />
      <Wrapper>
        <Switch>
          <Route path="/buttons">
            <ButtonPage />
          </Route>
          <Route path="/inputs">
            <InputPage />
          </Route>
          <Route path="/typography">
            <h1>You will see something about typography here soon!</h1>
          </Route>
          <Route path="/colors">
            <h1>You will see something about colors here soon!</h1>
          </Route>
          <Route path="/spaces">
            <h1>You will see something about spaces here soon!</h1>
          </Route>
          <Route path="/grid">
            <h1>You will see something about grid here soon!</h1>
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default Root;

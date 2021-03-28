import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from 'components/Navigation';
import ButtonPage from 'views/ButtonPage';
import MainPage from 'views/MainPage';
import InputPage from 'views/InputPage';
import Title from 'components/Title';

import { Wrapper } from 'Root.styles.js';

function Root() {
  return (
    <Router>
      <Navigation />
      <Wrapper>
        <Switch>
          <Route path='/buttons'>
            <ButtonPage />
          </Route>
          <Route path='/inputs'>
            <InputPage />
          </Route>
          <Route path='/typography'>
            <Title>You will see something about typography here soon!</Title>
          </Route>
          <Route path='/colors'>
            <Title>You will see something about colors here soon!</Title>
          </Route>
          <Route path='/spaces'>
            <Title>You will see something about spaces here soon!</Title>
          </Route>
          <Route path='/grid'>
            <Title>You will see something about grid here soon!</Title>
          </Route>
          <Route path='/'>
            <MainPage />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default Root;

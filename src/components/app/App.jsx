import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharactersList from '../../containers/CharacterList';
import CharacterDetails from '../../containers/CharacterDetails';


export default function App() {
  return (
    <>
      <Router>

        <Switch>

          <Route 
            path="/"
            exact
            component={CharactersList} />

          <Route 
            path="/characters/:name"
            exact
            component={CharacterDetails} />

        </Switch>

      </Router>
    </>
  );
}

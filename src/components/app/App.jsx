import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LastAirbenderContainer from '../../containers/LastAirbenderContainer';
import LastAirbenderDetailsContainer from '../../containers/LastAirbenderDetailsContainer';

export default function App() {
  return ( 
  <Router>
    <Switch>
      <Route exact path="/:id">
        <LastAirbenderDetailsContainer />
      </Route>
      <Route exact path="/" component={LastAirbenderContainer}/>
    </Switch>
  </Router>
  )

};

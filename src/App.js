import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* <Route path="/" component={ } />
      <Route path="/" component={ } /> */}
    </Switch>
  );
}

export default App;

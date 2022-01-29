import {Switch,Route} from 'react-router-dom'
import React from 'react';
import Login from './Common/auths/Login'
import Register from './Common/auths/Register'
import Dashboard from './Common/Components/Dashboard/Dashboard';

function App() {
  return (
    <React.Fragment>
      <Route>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Route>
    </React.Fragment>
  );
}

export default App;

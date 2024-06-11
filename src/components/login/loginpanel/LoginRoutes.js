import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

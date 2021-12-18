import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Intro from './components/Intro/Intro';
import Container from './components/Container/Container';

function App() {
  
  return (

    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/home" component={Container} />
        </Switch>
      </div>
    </Router>
    
   
  );
}

export default App;

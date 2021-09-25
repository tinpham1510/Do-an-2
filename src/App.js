import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'; 
import Homepage from './Homepage/Homepage';
import Login from './DesignCSS/Login'
import Signup from './DesignCSS/Signup';
function App() {
  return (
    <div className="App">
<Router>
        
        <Switch>

          <Route key="Homepage" exact path="/" component={Homepage}/>
          <Route key ="Login" exact path="/Login" component={Login}/>
          <Route key="Signup" exact path="/Signup" component={Signup}/>
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;

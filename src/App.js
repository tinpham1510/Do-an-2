import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'; 
import Homepage from './Homepage/Homepage';
import Login from './DesignCSS/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import User from './Components/User/User'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './DesignCSS/Signup';
import * as actions from './redux/actions';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  
  dispatch(actions.getPosts.getPostsRequest());
  return (
    <div className="App">
      
<Router>
        
        <Switch>
          <Route key="Homepage" path="/Homepage" component={Homepage}/>
          <Route exact path ="/" component={Login}/>
          <Route key ="Login" exact path="/Login" component={Login}/>
          <Route key="Signup" exact path="/Signup" component={Signup}/>
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;

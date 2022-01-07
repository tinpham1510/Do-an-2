import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'; 
import Homepage from './Homepage/Homepage';
import Login from './DesignCSS/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import User from './Components/User/User'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './DesignCSS/Signup';
import { useEffect } from 'react';
import axios from 'axios'
import AuthContextProvider from './contexts/AuthContext'
import RoomDetail from './Components/Rooms/Room_element/Room__detail/Room__detail';
import RoomContextProvider, { RoomContext } from './contexts/RoomsContext';
import CustomerContextProvider from './contexts/CustomerContext';
import ServiceContextProvider from './contexts/ServiceContext';
import PostContextProvider from './contexts/PostContext';
import ReceiptContextProvider from './contexts/ReceiptContext';
import TotalContextProvider from './contexts/TotalContext';
axios.defaults.withCredentials = true;
function App() {

  return (
    <AuthContextProvider>
      <PostContextProvider>
        <RoomContextProvider>
          <CustomerContextProvider>
            <ServiceContextProvider>
              <ReceiptContextProvider>
                <TotalContextProvider>
                <div className="App">
        <Router>
          
          <Switch>
          <Route key="home" path="/" render={()=>{
              return localStorage.getItem('accessToken') ? <Homepage/> : <Login/>
              }}></Route>

            <Route key="Homepage" path ="/Homepage" component={Homepage}/>
            <Route key ="login" exact path="/Login" component={Login}/>
            <Route key="signup" exact path="/Signup" component={Signup}/>
          
            </Switch>
          </Router>
          
      </div>
                </TotalContextProvider>
              </ReceiptContextProvider>
            </ServiceContextProvider>
          </CustomerContextProvider>
        </RoomContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;

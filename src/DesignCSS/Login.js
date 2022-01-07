import React, { useContext, useState } from 'react';
import './Login.css'
import {  BrowserRouter as  Link, useHistory} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import Homepage from '../Homepage/Homepage';
import Dashboard from '../Components/Dashboard/Dashboard';
const Login = () => {
    let history = useHistory();

    const [success, setSuccess] = useState(false)
    const { loginUser } = useContext(AuthContext)

	// Local state
	const [loginForm, setLoginForm] = useState({
		username: '',
		password: ''
	})

	const [alert, setAlert] = useState(null)

	const { username, password } = loginForm

	const onChangeLoginForm = event =>
		setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

	const login = async event => {
		event.preventDefault()

		try {
			const loginData = await loginUser(loginForm)
			if (loginData.success) {
			}

		} catch (error) {
			console.log(error)
		}
	}
   
    return (
        <>
        { success ? <Homepage/>:
         <div className="login-page">
            <div className="Image-Login">

            </div>
        
        <div className="Container-login">
            <h1 className="text-login">
                Home
            </h1>
            <form onSubmit={login}>
                <div className="inputBx">
                            <h6 className="name">Username: </h6>
                            <input type="text" id="Username" name="username" value={username} onChange={onChangeLoginForm} ></input>
                        </div>
                        <div className="inputBx">
                            <h6 className="name">Password: </h6>
                            <input type="password" id="Password" name="password" value={password} onChange={onChangeLoginForm} ></input>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Login" name=""/>
                        </div>
                            <p style={{color: "whitesmoke", fontSize:"16px", marginTop: "-1%"}}>Bạn chưa có tài khoản? <a href="/Signup">
                                <Link to="/Signup">
                                Đăng kí
                                </Link>
                                </a></p>
                <h3 style={{color: "white", fontSize: "16px", marginTop: "1%"}}>Login with social media</h3>
                    <ul className="sci">
                        <a href="https://www.facebook.com" url="facebook.com"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.google.com"><i className="fa fa-google"></i></a>
                    </ul>  
                </form>
            
        </div>


        </div>
}
        </>
       
    );
};

export default Login;
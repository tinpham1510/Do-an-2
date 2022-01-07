import React, { useContext, useEffect, useState } from 'react';
import './Login.css'
import {  BrowserRouter as  Link, useHistory} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import Homepage from '../Homepage/Homepage';
import Dashboard from '../Components/Dashboard/Dashboard';
import { render } from '@testing-library/react';
import AlertTip from '../Components/AlertTip';
const Login = () => {
    let history = useHistory();

    const [success, setSuccess] = useState(false)
    const { loginUser } = useContext(AuthContext)

    const [modal, setModal] = useState(false)
    const [content, setCon] = useState()
	// Local state
	const [loginForm, setLoginForm] = useState({
		username: '',
		password: ''
	})
    const [aler, setAle] = useState()
	const [alert, setAlert] = useState(null)

	const { username, password } = loginForm

	const onChangeLoginForm = event =>
		setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

	const login = async event => {
		event.preventDefault()
		const message = await loginUser(loginForm)
        setModal(true)
        setCon(message.message)
        if(message.success)
        {
            setSuccess(true)
            history.push("/Homepage/Dashboard")
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
                Trang chủ
            </h1>
            <form onSubmit={login}>
                <div className="inputBx">
                            <h6 className="name">Tài khoản: </h6>
                            <input type="text" id="Username" name="username" value={username} onChange={onChangeLoginForm} ></input>
                        </div>
                        <div className="inputBx">
                            <h6 className="name">Mật khẩu: </h6>
                            <input type="password" id="Password" name="password" value={password} onChange={onChangeLoginForm} ></input>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Đăng nhập" name=""/>
                        </div>
                            <p style={{color: "whitesmoke", fontSize:"16px", marginTop: "-1%"}}>Bạn chưa có tài khoản? <a href="/Signup">
                                <Link to="/Signup">
                                Đăng kí
                                </Link>
                                </a></p>
                    <ul className="sci">
                        <a href="https://www.facebook.com" url="facebook.com"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.google.com"><i className="fa fa-google"></i></a>
                    </ul>  
                </form>
            
        </div>
        <AlertTip message={content} modal={modal} setModal={setModal} />

        </div>
}
        </>
       
    );
};

export default Login;
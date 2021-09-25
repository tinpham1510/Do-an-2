import React from 'react';
import './Login.css'
import {  BrowserRouter as  Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="login-page">
            <div className="Image-Login">

            </div>
        
        <div className="Container-login">
            <h1 className="text-login">
                Home
            </h1>
            <form>
                <div className="inputBx">
                            <h6 className="name">Username: </h6>
                            <input type="text" id="Username" name="Username"></input>
                        </div>
                        <div className="inputBx">
                            <h6 className="name">Password: </h6>
                            <input type="password" id="Password" name="Password"></input>
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
    );
};

export default Login;
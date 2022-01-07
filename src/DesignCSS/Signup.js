import React, { useContext, useState } from 'react';
import './Signup.css'
import {  BrowserRouter as Link  } from 'react-router-dom'
import { apiUrl } from '../contexts/constant';
import axios from 'axios';
import Homepage from '../Homepage/Homepage';
import { AuthContext } from '../contexts/AuthContext';
import AlertTip from '../Components/AlertTip';
import { useHistory} from 'react-router-dom'

const Signup = () => {
    let history = useHistory();
    const [success, setSuccess] = useState(false)
    const { registerUser } = useContext(AuthContext)
    const [modal, setModal] = useState(false)
    const [content, setCon] = useState()
    const [regis, setRegis] = useState({
        username: '',
		password: '',
        email:''
    })
    const { username, password, email } = regis 
    const onChangeLoginForm = event =>
		setRegis({ ...regis, [event.target.name]: event.target.value })


   
    const OnHandlerClick = async e =>{
        e.preventDefault();
		const message = await registerUser(regis)
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
        {
            success? <Homepage/>:
        <div className="login-page">
            <div className="Image-Login">

            </div>
        
        <div className="Container-Signup">
            <h1 className="text-login">
                Đăng ký
            </h1>
            <form onSubmit={OnHandlerClick}>
                <div className="inputBx">
                            <h6 className="name">Tên tài khoản: </h6>
                            <input type="text" id="Username" name="username" value={username} onChange={onChangeLoginForm}></input>
                        </div>
                        <div className="inputBx">
                            <h6 className="name">Email: </h6>
                            <input type="email" id="email" name="email"  value={email} onChange={onChangeLoginForm}></input>
                        </div>
                        <div className="inputBx">
                            <h6 className="name">Mật khẩu: </h6>
                            <input type="password" id="Password" name="password"  value={password} onChange={onChangeLoginForm}></input>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Đăng kí" name=""/>
                        </div>
                            <p style={{color: "whitesmoke", fontSize:"16px", marginTop: "-1%"}}>Bạn đã có tài khoản? <a href="/Login">
                                <Link to="../Login">
                                Đăng nhập
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

export default Signup;
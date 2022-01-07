import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import img1 from '../Assets/e651646ded354313b22571fbb9c22118.png'
import img2 from '../Assets/phong-tro-2.jpg'
import img3 from '../Assets/31_104880.png'
import './Homepage.css';
import Slider from 'react-slick';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from 'react-router-dom'; 
import Dashboard from '../Components/Dashboard/Dashboard';
import User from '../Components/User/User';
import Rooms from '../Components/Rooms/Room';
import Services from '../Components/Services/Service'
import { apiUrl } from '../contexts/constant';
import { AuthContext } from '../contexts/AuthContext';
import RoomContextProvider from '../contexts/RoomsContext';
import ListRoom from '../Components/ListRoom/ListRoom';
import Receipts from '../Components/Receipts/Receipts';
import Electric from '../Components/Electric/Electric';
import Water from '../Components/Water/Water';
import ListUser from '../Components/User/ListUser';
import Total from '../Components/Total/Total';
const Homepage = () => {
    const history = useHistory()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      const [ID, setID] = useState([]);
    const {
        logoutUser
    } = useContext(AuthContext)
    
    useEffect(()=>{
        axios({
            method: "GET",
            url: `${apiUrl}/auth`,
            headers: {
                'Authorization': 'Bearer '+ localStorage.getItem('accessToken')
            },
            withCredentials: true

        }).then((resp)=>{
            setID(resp.data.posts)
        })
    },[])
    function HandleLogout (){
        logoutUser()
        history.push('/Login')
    }
    function ScaleNav(){
        /*document.getElementById("sidebar").style.width = "80px";
            document.getElementById("logo_name").style.fontSize= "0px";
            document.getElementById("bx_logo").style.fontSize= "0px";
            document.getElementById("btn").style.transform = "translateX(-100%)"
            var a = document.getElementsByTagName("a");
            for(var i =0; i< a.length;i++)
            {
                a[i].style.marginLeft= "-50%";
            }
            var span = document.getElementsByTagName("span");
            for( var i=0; i<span.length;i++)
            {
                span[i].style.opacity="0";
            }
            var li = document.getElementsByTagName("li")
            for( var i = 0 ;i< li.length;i++)
            {
                li[i].style.width="70%";
            }
            document.getElementsByClassName("profile_details")[0].style.opacity="0";
            document.querySelector(".tooltip").setAttribute("style", "transform: translateX(1%);  width: 100px" );
            document.querySelector(".tooltip").setAttribute("style","opacity: 0")
            document.querySelector("#log_out").setAttribute("style", "transform: translateX(-105%);");
            document.querySelector(".body_content").setAttribute("style", "width: 1350px; transform: translateX(6%);");
            
            /*document.getElementById("tooltip").style.transform = "translateX(1%)"
            document.getElementById("tooltip").style.opacity = "1"
            document.getElementById("tooltip").style.width = "100px"*/

    }

    function CloseNav()
    {
       /* document.getElementById("sidebar").style.width = "240px"
            document.getElementById("logo_name").style.fontSize= "20px";
            document.getElementById("bx_logo").style.fontSize= "28px";
            document.getElementById("bx").style.minWidth = "50px"
            document.getElementById("btn").style.transform = "translateX(-50%)"
            var a = document.getElementsByTagName("a");
            for(var i =0; i< a.length;i++)
            {
                a[i].style.marginLeft= "-10%";
            }
            var span = document.getElementsByTagName("span");
            for( var i=0; i<span.length;i++)
            {
                span[i].style.opacity="1";
            }
            var li = document.getElementsByTagName("li")
            for( var i = 0 ;i< li.length;i++)
            {
                li[i].style.width="90%";
            }
            var tooltips = document.getElementsByClassName("tooltip");
            for(var i =0;i<tooltips.length;i++)
            {
                tooltips[i].style.opacity="0";
            }
            
            document.getElementsByClassName("profile_details")[0].style.opacity="1";
            document.querySelector("#log_out").setAttribute("style", "transform: translateX(-50%);");
            document.querySelector(".body_content").setAttribute("style", "width: 1200px; transform: translateX(20%);");*/ 
    }

    function HandleClick (){

    }
    return (
        <body>
            <div className="sidebar" id="sidebar">
            <div className="logo_content">
                <div className="logo">
                <i class='bx bx-home-smile' id="bx_logo" ></i>
                    <div className="Logo_name" id="logo_name">
                        HouseLook
                    </div>
                </div>
                <button className="btn_menu" id="btn1" onClick={HandleClick}>
                <i class='bx bx-menu' id="btn" >
  
                </i>
                </button>
            </div>
            <ul>
                <li id="li">
                    <a href = "/Homepage/Dashboard" id="button_image">
                       
                    <i class='bx bxs-bar-chart-alt-2' id="bx" ></i>
                    <span className="links_name" id="span">Trang chủ</span>
                        </a>
                    <span className="tooltip" id="tooltip">Dashboard</span>                    
                </li>
                <li id="li">
                    <a href = "/Homepage/Rooms">
                    <i class='bx bxs-data' id="bx"></i>
                    <span className="links_name" id="span">Phòng</span>
                        </a>
                        <span className="tooltip" id="tooltip">Rooms</span>                    
                </li>
                <li>
                    <a href="/Homepage/User">
                    <i class='bx bxs-user' ></i>
                    <span className="links_name">Khách thuê</span>
                        </a>
                        <span className="tooltip">User</span>                    
                </li>
                <li>
                    <a href ="/Homepage/Services">
                    <i class='bx bxs-dashboard' ></i>
                    <span className="links_name">Dịch vụ</span>
                        </a>
                        <span className="tooltip">Detail</span>                    
                </li>
                <li>
                    <a href="/Homepage/Receipts">
                    <i class='bx bx-file' ></i>
                    <span className="links_name">Phiếu thu</span>
                        </a>
                    <span className="tooltip">Info</span>                    
                </li>
                <li>
                    <a href="#">
                    <i class='bx bx-diamond' ></i>
                    <span className="links_name">Hóa đơn</span>
                        </a>
                        <span className="tooltip">Fee</span>                    
                </li>
                <li>
                    <a href="/Homepage/Electric">
                    <i class='bx bxs-bolt' ></i>
                    <span className="links_name">Chỉ số điện</span>
                        </a>
                        <span className="tooltip">Chỉ số điện</span>                    
                </li>
                <li>
                    <a href="/Homepage/Water">
                    <i class="fas fa-shower"></i>
                    <span className="links_name">Chỉ số nước</span>
                        </a>
                        <span className="tooltip">chỉ số nước</span>                    
                </li>
                <li>
                    <a href="/Homepage/Total">
                    <i class="fas fa-calculator"></i>
                    <span className="links_name">Tính tiền</span>
                        </a>
                        <span className="tooltip">Tính tiền</span>                    
                </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_details">
                            <img src={img2}/>
                            <div className="name_jobs">
                               
                                <div className="name">
                                    {ID.username}
                                </div>
                                <div className="Jobs">
                                    Admin
                                </div>

                            </div>
                        </div>
                        <button  onClick={HandleLogout} className="btn_menu1" >
                        <i class='bx bx-log-out' id="log_out" ></i>
                            </button>
                       
                    </div>

                </div>
             
        </div>
        <div className="Home_content">

        </div>
        <div className="home_body">
            <div className="body_content">
        <Router>
        <Switch>
                <Route key="Dashboard" exact path="/" component={Dashboard}/>
                <Route key="Dashboard" exact path="/Homepage/Dashboard" component={Dashboard}/>
                <Route key ="User"exact path="/Homepage/User" component={User}/>
                <Route key="ListUser" exact path ="/Homepage/List" component={ListUser} />
                <Route key="Rooms" exact path="/Homepage/Rooms" component={Rooms}/>
                <Route key="Services" exact path="/Homepage/Services" component={Services}/>
                <Route key="ListRoom" exact path ="/Homepage/ListRoom" component={ListRoom} />
                <Route key="Receipts" exact path ="/Homepage/Receipts" component={Receipts} />
                <Route key="Electric" exact path ="/Homepage/Electric" component={Electric} />
                <Route key="Water" exact path ="/Homepage/Water" component={Water} />
                <Route key="Total" exact path ="/Homepage/Total" component={Total} />
                </Switch>    
        </Router>
                
            </div>
        </div>
        
        </body>
        
       
       
            
    );
};

export default Homepage;
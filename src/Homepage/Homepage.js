import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img1 from '../Assets/e651646ded354313b22571fbb9c22118.png'
import img2 from '../Assets/phong-tro-2.jpg'
import img3 from '../Assets/31_104880.png'
import './Homepage.css';
import Slider from 'react-slick';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'; 
import Dashboard from '../Components/Dashboard/Dashboard';
import User from '../Components/User/User';
import Rooms from '../Components/Rooms/Room';
import Services from '../Components/Services/Service'
const Homepage = () => {
    const [ID, setID] = useState();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    useEffect(()=>{
        localStorage.setItem("ID", ID);
        
    })
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
        if(ID == 1){
            ScaleNav();
            setID(2);
            
            
        }
        else if(ID == 2){
            CloseNav();
            setID(1);
        }
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
                    <a href="/Homepage/Dashboard" id="button_image">
                    <i class='bx bxs-bar-chart-alt-2' id="bx" ></i>
                    <span className="links_name" id="span">Trang chủ</span>
                        </a>
                    <span className="tooltip" id="tooltip">Dashboard</span>                    
                </li>
                <li id="li">
                    <a href="/Homepage/Rooms" id="button_image">
                    <i class='bx bxs-data' id="bx"></i>
                    <span className="links_name" id="span">Phòng</span>
                        </a>
                        <span className="tooltip" id="tooltip">Rooms</span>                    
                </li>
                <li>
                    <a href="/Homepage/User">
                    <i class='bx bxs-user' ></i>
                    <span className="links_name">Người dùng</span>
                        </a>
                        <span className="tooltip">User</span>                    
                </li>
                <li>
                    <a href="/Homepage/Services">
                    <i class='bx bxs-dashboard' ></i>
                    <span className="links_name">Dịch vụ</span>
                        </a>
                        <span className="tooltip">Detail</span>                    
                </li>
                <li>
                    <a href="#">
                    <i class='bx bx-file' ></i>
                    <span className="links_name">Phiếu nhập</span>
                        </a>
                    <span className="tooltip">Info</span>                    
                </li>
                <li>
                    <a href="#">
                    <i class='bx bx-diamond' ></i>
                    <span className="links_name">Chi phí</span>
                        </a>
                        <span className="tooltip">Fee</span>                    
                </li>
                <li>
                    <a href="#">
                    <i class='bx bxs-bolt' ></i>
                    <span className="links_name">Chỉ số điện</span>
                        </a>
                        <span className="tooltip">Chỉ số điện</span>                    
                </li>
                <li>
                    <a href="#">
                    <i class="fas fa-shower"></i>
                    <span className="links_name">Chỉ số nước</span>
                        </a>
                        <span className="tooltip">chỉ số nước</span>                    
                </li>
                <li>
                    <a href="#">
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
                                    Jin Zero
                                </div>
                                <div className="Jobs">
                                    Web designer
                                </div>

                            </div>
                        </div>
                        <button className="btn_menu1" >
                        <i class='bx bx-log-out' id="log_out" ></i>
                            </button>
                       
                    </div>

                </div>
             
        </div>
        <div className="Home_content">

        </div>
        <div className="home_body">
            <div className="body_content">

            <Switch>

            <Route key="Dashboard" exact path="/Homepage/Dashboard" component={Dashboard}/>
            <Route key ="User"exact path="/Homepage/User" component={User}/>
            <Route key="Rooms" exact path="/Homepage/Rooms" component={Rooms}/>
            <Route key="Services" exact path="/Homepage/Services" component={Services}/>
            </Switch>
            
            

            </div>
        </div>
        
        </body>
        
       
       
            
    );
};

export default Homepage;
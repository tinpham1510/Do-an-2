import React from 'react';
import img1 from '../Assets/e651646ded354313b22571fbb9c22118.png'
import './Homepage.css'
const Homepage = () => {
    return (
        <div> 
        <div className="Header">
            <div className="Navbar-homepage">
                <div className="left-navbar">
                    HouseLook
                </div>
                <div className="right-navbar">
                    Hello
                </div>
            </div>
            <div className="Image-homepage"></div>
            <div className="Banner">
                <img style={{marginTop: "-2%"}} className="Logo" src={img1}/>
                <div className="banner-text">
                    Welcome to HouseLook {">.<"}
                </div>
                <div className="banner-descrip">
                    At my website, you will see the whole things you need about Your home where you are looking for
                    and something we need about you Customer!!!
                </div>
                                 
            </div>
            </div>
            <div className="container-App">
                    Hello
            </div>
            </div>
       
            
    );
};

export default Homepage;
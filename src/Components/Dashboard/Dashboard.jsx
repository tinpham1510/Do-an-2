import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import img2 from '../../Assets/phong-tro-2.jpg'
const Dashboard = () => {
    
    const [sayID, setID] = useState(localStorage.getItem("ID"));
    useEffect(()=>{
        console.log(sayID);
        if(localStorage.getItem("ID")==2)
        {
            var ID = document.getElementsByClassName("container_dash");
            for(var i=0 ; i<ID.length;i++)
            {
                ID[i].setAttribute("style", "margin-left: 3%")
            }
        }
        else if(localStorage.getItem("ID")==1)
        {

            var ID1 = document.getElementsByClassName("container_dash");
            for(var i=0 ; i<ID1.length;i++)
            {
                ID1[i].setAttribute("style", "margin-left: 10%")
            }
        }
    
})
    return (
        <div>
             <h2 className="container_content">Dashboard</h2>
            <div className="Container">
                
                        <div className="container_dash">
                            <div className="container__dashboard">
                                <img className="container__img" src={img2}></img>

                            </div>
                        </div>
                        <div className="container_dash">
                            <div className="container__dashboard">
                                <img className="container__img" src={img2}></img>

                            </div>
                        </div>


                </div>
        </div>
      
        
    );
}

export default Dashboard;

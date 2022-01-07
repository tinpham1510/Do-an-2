import React, { useContext, useEffect, useState } from 'react';
import './Room_element.css'
import { Button, Col, Row } from 'react-bootstrap'
import Actionbutton from './ActionButton';
import Actionbuttonbottom from './ActionButtonBottom';
import Loading from '../../Loading/Loading';
import { postContext } from '../../../contexts/PostContext';
import axios from 'axios';
import { apiUrl } from '../../../contexts/constant';
const RoomContainer = ({room: {_id, status, name, area, description, height, width, cost}}) => {

    const [needButton, setButton] = useState(true)
    const [loading, setLoading] = useState(false)
    const [changeButton, setChange] = useState(false)
    const {
        postState: {posts},
        getPosts
    } = useContext(postContext)

    const [customer, setCustomer] = useState()
    useEffect(()=>{
        axios({
            method: 'GET',
            url: `${apiUrl}/posts/room${_id}`,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
            withCredentials: true
        })
        .then(resp=>{
            setCustomer(resp.data.posts[0]  )
            
        })
    },[posts])

    useEffect(()=>{
        getPosts()
        function Load()
        {
            setLoading(true);
            setTimeout(()=>{
                setLoading(false);
            },500)
        }
        Load()
    },[])

    let number = Intl.NumberFormat()
    const [info, setInfo] = useState()
    useEffect(()=>{
        axios({
            method: "GET",
            url: `${apiUrl}/rooms/${_id}`,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
            withCredentials: true
        })
        .then(resp=>{
            setInfo(resp.data.data)
        })
        
    },[100])

    return (
        <div>
            { loading? <Loading/>:
               <div className="Element__page__container" id='page' >
                    <div className="Element__container_content">
                        <div className="Element__container__con">
                            <i class='bx bxs-home' ></i>
                            <div style={{fontWeight:"bold" ,fontSize: "18px"}}>
                                Phòng {name}
                            </div>
                        </div>
                        
                        <div className="Element__container__button">
                            <Actionbutton _id={_id} needButton={needButton} name={name} />
                        </div>
                        <div className="Element__container__con">
                            <i class='bx bxs-user' ></i>
                            {
                                info!=null&&info[0].status === 'Đang thuê'?
                                <div style={{fontSize: "14px",marginLeft: "5px" , marginTop: '-5px', color:"red"}}>
                                    {customer!=null? 
                                    <>{customer.customer.name}</>
                                    :
                                    <></>
                                }
                                </div>:
                                <></>
                            }
                        </div>
                        <div className="Element__container__details">
                            <i class='bx bx-money' ></i>
                                <div style={{fontSize: "14px",marginLeft: "5px", marginBottom: "2px", color:"red"}}>
                                    {number.format(cost)}
                                </div>
                        </div>
                        <div className="Element__container__con">
                            <Actionbuttonbottom _id={_id} isService={false} />
                        </div>
                    </div>
                    </div>
}
        </div>
    );
}

export default RoomContainer;

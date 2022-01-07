import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { apiUrl } from '../../contexts/constant';
import { postContext } from '../../contexts/PostContext';
import { RoomContext } from '../../contexts/RoomsContext';

import Actionbuttonbottom from '../Rooms/Room_element/ActionButtonBottom';
import './Water.css'

const Water = () => {
    const [bill, setBill] = useState({
        index: 0,
        total: 0
    })

    const {index, total} = bill

    const [change, setChange] = useState(false)
    const [update, setUpdated] = useState()

    const {
        roomState: {room},
        findRooms,
        updateRooms
    } = useContext(RoomContext)
    const {
         postState: {posts},
         getPosts
    } = useContext(postContext)
    useEffect(()=>{
        getPosts()
    }, [posts])

    const HandleChange = e =>{
        setBill({
            index: index
            , [e.target.name]: e.target.value})
    }

    const chooseRoom = async roomId =>{
        findRooms(roomId)
        setUpdated(roomId)
    }

    const HandleSave = async e =>{
        e.preventDefault()
        if(update!=null)
        {
            const updateVaue = {
                name: update.name,
                valueWater: index
            }
            
            axios({
                method: "PUT",
                url: `${apiUrl}/rooms/${update._id}`,
                data: updateVaue,
                headers: {
                    'Authorization': 'Bearer '+ localStorage.getItem('accessToken')
                },
            })
            .then(resp=>{
                setBill({
                    total: index * 6000
                })
            })
        }
        setChange(false)
    }

    const HandleUpdate = e =>{
        e.preventDefault()
        const value = posts.map(item => item.room.valueWater).reduce((a,b)=> a + b)
        setBill({
            index: value,
            total: value* 6000
            , [e.target.name]: e.target.value})
        setChange(true)
    }

    return (
        <div className='water_page'>
            <div className="water__page_content">
                    
                </div>
                <div className="water__page_container">
                <div className="water__container_top">
                    <div className="water__container_content">
                        Chỉ số nước
                    </div>
                    <div className="water__container_button">
                    </div>
                </div>
                <div className="water__container_bottom">
                    <table className="table table-bordered" style={{margin: "30px 5%" , width: "90%"}}>
                    <thead>
                            <tr>
                                <th>Nhà</th>
                                <th>Phòng</th>
                                <th>Khách thuê</th>
                                <th>Chỉ số (m3/tháng)</th>
                                <th>Số tiền (VND)</th>
                            </tr>
                    </thead>     
                    { posts!=null&&posts.map((info)=>(
                    <tbody>
                         { info.room!=null?
                        <tr>
                            <td>{info.room.area}</td>
                            <td>{info.room.name}</td>
                            <td>{info.customer.name}</td>
                            <td>{info.room.valueWater}</td>
                            <td>
                                <Actionbuttonbottom _id={info._id} isValueW={true}/>
                            </td>
                        </tr>:null
}
                    </tbody>   
                    ))}  
                </table>
                </div>
            </div>
        </div>
    );
}

export default Water;

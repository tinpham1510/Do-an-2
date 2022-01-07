import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { postContext } from '../../contexts/PostContext';
import Actionbuttonbottom from '../Rooms/Room_element/ActionButtonBottom';
import { Form  } from 'react-bootstrap'
import './Electric.css'
import { RoomContext } from '../../contexts/RoomsContext';
import axios from 'axios';
import { apiUrl } from '../../contexts/constant';
const Electric = () => {
    const [bill, setBill] = useState({
        index: 0,
        total: 0
    })

    
    const {index, total} = bill

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

    return (
        <div className='electric_page'>
            <div className="electric__page_content">
                    
                </div>
                <div className="electric__page_container">
                <div className="electric__container_top">
                    <div className="electric__container_content">
                        Chỉ số điện
                    </div>
                    <div className="electric__container_button">
                    </div>
                </div>
                <div className="electric__container_bottom">
                    <table className="table table-bordered" style={{margin: "30px 5%" , width: "90%"}}>
                    <thead>
                            <tr>
                                <th>Nhà</th>
                                <th>Phòng</th>
                                <th>Khách thuê</th>
                                <th>Chỉ số (kWh/tháng)</th>
                                <th>Chi tiết</th>
                            </tr>
                    </thead> 
                    { posts!=null&&posts.map((info)=>(
                    <tbody>
                         { info.room!=null?
                        <tr>
                            <td>{info.room.area}</td>
                            <td>{info.room.name}</td>
                            <td>{info.customer.name}</td>
                            <td>{info.room.valueElectric}</td>
                            <td>
                                <Actionbuttonbottom _id={info._id} isValueE={true}/>
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

export default Electric;

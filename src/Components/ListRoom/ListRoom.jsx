import React, { useContext, useEffect } from 'react';
import { RoomContext } from '../../contexts/RoomsContext';
import Actionbutton from '../Rooms/Room_element/ActionButton';
import Actionbuttonbottom from '../Rooms/Room_element/ActionButtonBottom';

import './ListRoom.css'
const ListRoom = () => {
    const {
        roomState : {rooms, roomsLoading},
        getRooms

    } = useContext(RoomContext)
 
    useEffect(()=>{ 
        getRooms()
    })
    return (
        <div>
            
            <div className="List__page">
            <div className="List__page_content">
                Danh sách các phòng
                </div> 
            <div className="List__page_container">
                <div className='List__page_contain'>
                 <table className="table table-bordered">
                <thead>
                        <tr>
                            <th>Phòng số</th>
                            <th>Khu vực</th>
                            <th>Chiều dài {"(m)"}</th>
                            <th>Chiều rộng {"(m)"}</th>
                            <th>Tiền phòng</th>
                            <th>Chi tiết</th>
                        </tr>
                </thead>
                { rooms!=null&&rooms.map((room)=>(
                <tbody>
                            <tr>
                                <td>{room.name}</td>
                                <td>{room.area}</td>
                                <td>{room.width} </td>
                                <td>{room.height}</td>
                                <td>{room.cost}</td>
                                <td>
                                    <div>
                                        <Actionbuttonbottom _id={room._id}/>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                                    ))}
            </table>
            </div>
            </div>
           
        </div>
        </div>
    );
}

export default ListRoom;

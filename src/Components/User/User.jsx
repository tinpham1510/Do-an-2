import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { apiUrl } from '../../contexts/constant';
import { CustomerContext } from '../../contexts/CustomerContext';
import { postContext } from '../../contexts/PostContext';
import { RoomContext } from '../../contexts/RoomsContext';
import Actionbutton from '../Rooms/Room_element/ActionButton';
import './User.css'

const User = () => {
    const [hasItem, setItem] = useState(false)
    const {
        postState: {posts},
        getPosts
    } = useContext(postContext)
    useEffect(()=>{ 
        getPosts()
        setItem(true)
    },[posts])

    return (
        <div className="User__page">
            <div className="User__page_content">
                Khách hàng
                </div> 
                {hasItem?
            <div className="User__page_container">
                 <table className="table table-bordered">
                <thead>
                        <tr>
                            <th>Phòng số</th>
                            <th>Khu vực</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Ngày bắt đầu</th>
                            <th>Tiền phòng</th>
                            <th>Đặt cọc</th>
                            <th>Chi tiết</th>
                        </tr>
                </thead>
                { posts!=null&&posts.map((info)=>(
                <tbody>
                    { info.room!=null?
                            <tr>
                                <td>{info.room.name}</td>
                                <td>{info.room.area}</td>
                                <td>{info.customer.name}</td>
                                <td>{info.customer.sdt}</td>
                                <td>{info.customer.createdAt}</td>
                                <td>{info.room.cost}</td>
                                <td>0</td>
                                <td>
                                    <Actionbutton  needButton={false} />
                                </td>

                            </tr>
                            :null
}
                        </tbody>
                        
                ))}
            </table>
            </div> :  <div className="User__page_container">
                 <table className="table table-bordered">
                <thead>
                        <tr>
                            <th>Phòng số</th>
                            <th>Khu vực</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Ngày bắt đầu</th>
                            <th>Tiền phòng</th>
                            <th>Đặt cọc</th>
                            <th>Chi tiết</th>
                        </tr>
                </thead>
                </table>
                </div>
}
        </div>
    );
}

export default User;

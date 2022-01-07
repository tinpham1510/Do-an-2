import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { CustomerContext } from '../../contexts/CustomerContext';
import Actionbuttonbottom from '../Rooms/Room_element/ActionButtonBottom';
import './ListUser.css'
import UserAdd from './User__add';

const ListUser = () => {
    const [modal, setModal] = useState(false)
    const {
        customerState: {customers},
        getCustomers
    } = useContext(CustomerContext)

    useEffect(()=>{
        getCustomers()
    },[customers])

    const HandleModal = e =>{
        setModal(true)
    }
    return (
        <div className="list_page">
        <div className="list__page_content">
            Khách hàng
        </div>
    <div className="list__page_container">
        <div className="list__container_top">
            <div className="list__container_content">
                Danh sách khách thuê
            </div>
            <div className="list__container_button">
                <Button onClick={HandleModal}  variant="success">
                    Thêm khách thuê
                </Button>
                <UserAdd modal={modal} setModal={setModal}/>
            </div>
        </div>
        <div className="list__container_bottom">
            <table className="table table-bordered" style={{margin: "30px 5%" , width: "90%"}}>
            <thead>
                    <tr>
                        <th>Tên khách thuê</th>
                        <th>CMND</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Ghi chú</th>
                        <th>Chi tiết</th>
                    </tr>
            </thead>
            { customers!=null&&customers.map((info)=>(
            <tbody>
                <tr>
                    <td>{info.name}</td>
                    <td>{info.cmnd}</td>
                    <td>{info.email}</td>
                    <td>{info.sdt}</td>
                    <td>{info.note}</td>
                    <td>
                        <Actionbuttonbottom _id={info._id} isCustomer={true}/>
                    </td>
                </tr>
            </tbody>   
            ))}            
        </table>
        </div>
    </div>
</div>
    );
}

export default ListUser;

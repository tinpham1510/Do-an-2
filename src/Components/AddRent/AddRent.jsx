import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Modal, Row, Col, Offcanvas } from 'react-bootstrap';
import { apiUrl } from '../../contexts/constant';
import { CustomerContext } from '../../contexts/CustomerContext';
import { RoomContext } from '../../contexts/RoomsContext';
import { TotalContext } from '../../contexts/TotalContext';

import './AddRent.css';
import Listcustomer from './ListCustomer';

const Addrent = ({_id, modal, setModal}) => {


    const {
        roomState: {room}
    } = useContext(RoomContext)

    const {
        addTotals
    } = useContext(TotalContext)

    const {
        customerState: {customer}
    } = useContext(CustomerContext)
    useEffect(()=>{
        if(showDetail)
        {
            setDetail(customer)
        }
    })


    const [show, setShow] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [detail, setDetail] = useState({
        name: '',
        cmnd: '',
        email: '',
        sdt: '',
        address: '',
        note: ''

    })
   
    const {name, cmnd, email, sdt, address, note} = detail


    const HandleChange = e =>{
        setDetail({
            ...detail,
            [e.target.name]: e.targer.value
        })
    }

    function Clear()
    {
        
    }
    

    function TakeListCustomer()
    {
        setShow(true)
    }

    function HandleClose()
    {
        Clear()
        setModal(false)

    }

    function Save()
    {
        let token = localStorage.getItem("accessToken")
        axios(
            {
                method: "POST",
                url: `${apiUrl}/posts`,
                data: {
                    room: room._id,
                    customer: customer._id
                },
                headers:{
                    'Authorization': 'Bearer ' + token ,
                },
            }
        ).then(resp=>{
            if(resp.data.success == true)
            {
                localStorage.setItem("Thành công", "item")
            }
        })

        let update = {
            name: room.name,
            status: 'Đang thuê'
        }
        axios({
            method: "PUT",
            url: `${apiUrl}/rooms/${room._id}`,
            data: update,
            headers:{
                'Authorization': 'Bearer ' + token ,
            },
        })

        axios(
            {
                method: "POST",
                url: `${apiUrl}/totals`,
                data: {
                    room: room._id,
                    customer: customer._id
                },
                headers:{
                    'Authorization': 'Bearer ' + token ,
                },
            }
        ).then(resp=>{
        })


        setModal(false)
    }
    return (
        <div className='AddRent__page'>
            <div className='AddRent__page__container'>
            <Offcanvas show={modal} onHide={setModal} backdrop="static"
        keyboard={false} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Thêm khách thuê</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form>
            <Form.Group className="mb-3" style={{ marginTop: '-15px',display: "flex", justifyContent: "right"}} >
                <Button variant="warning" onClick={TakeListCustomer} style={{fontSize: '14px'}}>
                        Lấy khách cũ
            </Button>
            <Listcustomer show={show} setShow={setShow} showDetail={showDetail} setShowDetail={setShowDetail}/>
            </Form.Group>
                <Form.Group  className="mb-3" >
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control type = "text" name="name" value={name} onChange={HandleChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                <Form.Label>CMND/CCCD</Form.Label>
                <Form.Control type = "text" name="cmnd" value={cmnd}  onChange={HandleChange} />
                </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control  type = "email" name="email" value={email}  onChange={HandleChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control  type = "text" name="address" value={address}  onChange={HandleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control  type = "text" name="sdt" value={sdt}  onChange={HandleChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Ghi chú</Form.Label>
                <Form.Control name="note" value={note}   as="textarea" rows={3}  onChange={HandleChange}/>
            </Form.Group>
            { room!=null?
            <Row>
                <Form.Group as={Col} >
                    <Form.Label>Phòng</Form.Label>
                    <Form.Control  type = "text" name="nameroom" value={room.name} />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Giá</Form.Label>
                    <Form.Control  type = "text" name="cost" value={room.cost} />
                </Form.Group>
            </Row>: null
}
            <Form.Group className="mb-3" style={{ display: "flex", justifyContent: "right"}} >
                <Button variant="primary" onClick={Save} style={{marginTop: "22px", marginRight: "10px"}}>
                        Lưu thay đổi
            </Button>

            <Button variant="danger" onClick={HandleClose} style={{marginTop: "22px"}}>
                        Đóng
            </Button>
            </Form.Group>
            </Form> 
        </Offcanvas.Body>
      </Offcanvas>
            </div>
        </div>
    );
}
export default Addrent;

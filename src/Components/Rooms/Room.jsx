import React, { useContext, useEffect, useState } from 'react';
import './Room.css'
import Element from '../Rooms/Room_element/Room_element';
import { Row, Form, Col, Button, Tabs, Tab   } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from 'react-router-dom'; 
import { RoomContext } from '../../contexts/RoomsContext';
import RoomAdd from './Room_element/Room__detail/Room__add';
import RoomContainer from './Room_element/Room_container';
import axios from 'axios';
import { apiUrl } from '../../contexts/constant';
import ToastJS from '../ToastMessage/Toast';

const Room = () => {
    const history = useHistory()

    const [value, setValue] = useState({
        name: ''
    })
    

    const [hasItem, setItem] = useState(false)
    const [modal1, setModal1] = useState(false);
    const [id, setid] = useState("");
    
    const {
        roomState : {rooms, roomsLoading},
        getRooms,
        getRoomsName,
        getRoomsStatus

    } = useContext(RoomContext)
    useEffect(()=>{ 
        let idStatus = document.getElementById('hello').value;
        if(name === '' && idStatus === '-Tình trạng phòng-')
        {
            getRooms()
        }

        if(localStorage.getItem("Thành công")!= null)
        {
            setItem(true)
        }
    })

    

    const [totalNone, setNone] = useState(0)
    const [totalNone1, setNone1] = useState(0)
    let none = 'còn trống'
    let none1 = 'Đang thuê'
    useEffect(()=>{
        axios({
            method: "GET",
            url: `${apiUrl}/rooms/status${none}`,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
            withCredentials: true
        })
        .then(resp=>{
            setNone(parseInt(resp.data.total))
        })

        axios({
            method: "GET",
            url: `${apiUrl}/rooms/status${none1}`,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
            withCredentials: true
        })
        .then(resp=>{
            setNone1(parseInt(resp.data.total))
        })
    })

    function handleClickAdd(){
        if(modal1)
        {
            setModal1(false)
        }
        else
        {
            setModal1(true)
            
        }
    }


    useEffect(()=>{
        let idStatus = document.getElementById('hello').value;
        if(idStatus!='-Tình trạng phòng-')
        {
            getRoomsStatus(idStatus)
        }
    })

    const { name } = value
    const HandleChane = e =>{
        e.preventDefault()
        setValue({...value, [e.target.name]: e.target.value})
    }

    const [showToast, setToast] = useState(false)
    const HandleFind = e =>{
        e.preventDefault()
        getRoomsName(name)
    }

    function ChangePage()
    {
        history.push("/Homepage/Listroom")
    }

    const HandleGoto = e =>{
        e.preventDefault()
        history.push("/Homepage/List")
    }
    return (
        <div>
            <div className="room_page">
                <div className="room_content">
                    Phòng
                </div>
                <div className="room_page_container">
                    
                    <div className="room__container_top">
                    <Form style={{paddingBottom:"1%"}}>
                    <Row className="align-items-center">
                    <Col sm={3}>
                        <Form.Group controlId="formGridState">
                                <Form.Select defaultValue="Choose..." id='hello' >
                                    <option>-Tình trạng phòng-</option>
                                    <option>còn trống</option>
                                    <option>Đang thuê</option>
                                </Form.Select>
                                
                            
                            </Form.Group>
                            </Col>
                            <Col sm={3}>
                            <Form.Group controlId="formGridState">
                            <Form.Select defaultValue="Choose..." >
                                <option>-Tình trạng phí-</option>
                                <option>Chưa trả phí</option>
                            </Form.Select>
                            </Form.Group>
                            </Col>
                            <Col sm={3}>
                            <Form.Group controlId="formGridZip">
                            <Form.Control placeholder="Phòng..." name='name' value={name} onChange={HandleChane} />
                            </Form.Group>
                            </Col>
                            <Col xs="auto">
                            
                            <Button onClick={HandleFind} variant="primary" >
                                Tìm kiếm
                            </Button>
                            </Col>
                        </Row>
                        </Form>
                        <div className="room_page__text">
                                <div className="room__text_left">
                                    <div>
                                        Trống: {totalNone} |
                                    </div>
                                    <div>
                                        Đã thuê: {totalNone1} |
                                    </div>
                                    <div>
                                        Chưa trả phí: 0 |
                                    </div>
                                </div>
                                <div className="room__text_right">
                                <Button onClick={ChangePage} >
                                    Phòng
                                </Button>
                                <Button onClick={HandleGoto} variant="info">
                                    Khách hàng
                                </Button>
                                
                                <Button variant= "success">
                                    Thêm tầng
                                </Button>
                                </div>
                                
                        </div>

                        
                    </div>
                    <div className="room__container_bottom">
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                        >
                        <Tab eventKey="home" title="Tầng 1">
                            <div>
                            <>
        { !roomsLoading?
            <div className="Element__page">
            <div className="Element__page_top">
                <div className="Element__page__top_left">
                </div>
                <div className="Element__page__top_right">
                <Button onClick={handleClickAdd} variant="success">
                    Thêm phòng
                </Button>
                </div>
            </div>
            {
                <>
                 <div className="Element__page_bottom"> 
                {
                    rooms!=null&&rooms.map((room)=>(
                        <Col key={room._id} className='my-2' >
                            <RoomContainer room={room} />
                        </Col>
                    ))}  
            </div>
                <RoomAdd modal={modal1} setModal={setModal1} />
                </>
                    }
        </div>
        : null}
        </>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Tầng 2">
                            <div>
                                <Element/>
                            </div>
                        </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Room;

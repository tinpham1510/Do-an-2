import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Fade, Form, Modal, Col, Row, InputGroup, FormControl, FormGroup } from 'react-bootstrap';
import { isNonNullChain } from 'typescript';
import { apiUrl } from '../../contexts/constant';
import { postContext } from '../../contexts/PostContext';
import { RoomContext } from '../../contexts/RoomsContext';
import Listposts from './ListPosts';
import { ReceiptContext } from '../../contexts/ReceiptContext'
const ReceiptsAdd = ({modal, setModal}) => {
    const HandleClose = ()=>{
        Clear()
        setModal(false)
    }
    const {
        roomState: {rooms},
        getRooms,
        getRoomsName
    } = useContext(RoomContext)

    const {
        postState: {post}
    } = useContext(postContext)

    const {
        addReceipts
    } = useContext(ReceiptContext)

    useEffect(()=>{
        getRooms()
    },[rooms])

    useEffect(()=>{
        if(detail)
        {
            setAdd({
                room: post.room.name,
                customer: post.customer.name
            })
        }
    },[post])

    const [add, setAdd] = useState({
        room: '',
        customer:'',
        cost: 0,
        reason: ''
    })

    const { room, customer, cost, reason} = add

    const HandleChange = e =>{
        setAdd({
            ...add,
            [e.target.name]: e.target.value
        })
    }

    const [show, setShow] = useState(false)
    const [detail, setDetail] = useState(false)

    const HandleShow = () =>{
        setShow(true)
    }

    const HandleSave = async e =>{
        e.preventDefault()
        let addRe = {
            room: post.room._id,
            customer: post.customer._id,
            cost: cost,
            reason: reason
        }

        const message = await addReceipts(addRe)
        alert(message.message)
        setModal(false)
        Clear()
    }

    const Clear = ()=>{
        setAdd({
            room: '--Phòng--',
            customer: '',
            cost: 0,
            reason: ''
        })
    }

    return (
        <div>
        <Modal
   show={modal}
   onHide={setModal}
   backdrop="static"
   keyboard={false}
   animation = {true}
   centered
   size='lg'
 >
   <Modal.Header closeButton ></Modal.Header>
       <Modal.Body>
       <Form>
        <Form.Group className="mb-3" style={{ display: "flex" , justifyContent: "right"}} >
                <Button variant="warning" onClick={HandleShow} style={{fontSize: '16px'}}>
                        Danh sách phòng thuê
            </Button>
            <Listposts show={show} setShow={setShow} detail={detail} setDetail={setDetail} />
            </Form.Group>
           <Row>
           <Form.Group as={Col} >
            <Form.Label>Phòng</Form.Label>
            <Form.Select defaultValue="Phòng..." name='room' value={room} onChange={HandleChange}>
                <option>--Phòng--</option>
                {rooms!=null&&rooms.map((info)=>(
                <option>{info.name}</option>
                ))}
            </Form.Select>
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label>Tên người nộp</Form.Label>
                <Form.Control  type = "text" name="customer" value={customer} onChange={HandleChange} />
            </Form.Group>

            <FormGroup as={Col}>
            <Form.Label>Số tiền</Form.Label>
            <InputGroup className="mb-3">

                    <FormControl type="text" name="cost" value={cost} onChange={HandleChange}/>
                    <InputGroup.Text >VND</InputGroup.Text>
                </InputGroup>
            </FormGroup>
           </Row>

       <Form.Group className="mb-3" >
            <Form.Label>Nội dung</Form.Label>
            <Form.Control as="textarea" name='reason' value={reason} rows={3}  onChange={HandleChange} />
        </Form.Group>
       </Form>
       </Modal.Body>
       <Modal.Footer>
     <Button onClick={HandleSave} variant="primary" >
       Lưu thay đổi
     </Button>
     <Button onClick={HandleClose}  variant="danger" >
       Đóng
     </Button>
   </Modal.Footer>
   </Modal>
   </div>
    );
}

export default ReceiptsAdd;

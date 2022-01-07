import { lineHeight } from '@mui/system';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Modal, Form, Button, Col, Row, Alert } from 'react-bootstrap';
import { apiUrl } from '../../../../contexts/constant';
import { RoomContext } from '../../../../contexts/RoomsContext';
import ToastUpdate from '../../../ToastMessage/Toast__update';

const RoomEdit = ({_id, modal, setModal}) => {

    const {
        roomState: { room },
        getRooms,
        updateRooms
    } = useContext(RoomContext)

    const [updatedRoom, setUpdatedRoom] = useState({
        name: '',
        area: '',
        description: '',
        status: '',
        width: '',
        height: '',
        cost: ''
    })

    useEffect(()=>{
        if(modal)
        {
            setUpdatedRoom(room)
        }
        //getRooms()
    },[room])

    const { area, cost, description, height, name, num, status, url, user, width } = updatedRoom

    const HandleChange = e =>{
        setUpdatedRoom({
            ...updatedRoom
        , [e.target.name]: e.target.value})
    }
    const handleUpdate = async e =>{
        e.preventDefault()
        const message = await updateRooms(updatedRoom)
        alert(message.message)
        setModal(false)
        setToast(true)
    }
    
    const [showToast, setToast] = useState(false)
    const closeDialog = () => {
		setUpdatedRoom(room)
		setModal(false)
	}

    return (    
        <>
        <ToastUpdate setToast={setToast} showToast={showToast}/>
        { modal?
        <div className='room__detail'>
            <Modal
        show={modal}
        onHide={closeDialog}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton/>
            <Modal.Body>
                {  (
            <Form>
            <Row className="mb-3">
                <Form.Group as={Col}  >
                <Form.Label>Tên phòng</Form.Label>
                <Form.Control type = "text" name="name" value={name} onChange={HandleChange} />
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label>Khu vực</Form.Label>
                <Form.Control type = "text" name="area" value={area} onChange={HandleChange} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" >
                <Form.Label>Mô tả</Form.Label>
                <Form.Control  type = "text" name="description" value={description} onChange={HandleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Tình trạng</Form.Label>
                {
                    room!=null&&room.status === 'Đang thuê'?
                    <Form.Control  type = "text" name="status" value={status} disabled onChange={HandleChange}/>
                    :
                <Form.Control  type = "text" name="status" value={status} onChange={HandleChange}/>
}
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} >
                <Form.Label>Chiều dài</Form.Label>
                <Form.Control  type = "text" name="height" value={height} onChange={HandleChange}/>
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label>Chiều rộng</Form.Label>
                <Form.Control  type = "text" name="width" value={width} onChange={HandleChange} />
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label>Giá</Form.Label>
                <Form.Control  type = "text" name="cost" value={cost} onChange={HandleChange} />
                </Form.Group>
            </Row>
            </Form> 
                )}
            </Modal.Body>
            <Modal.Footer>
          <Button onClick={handleUpdate}  variant="primary" >
                    Lưu thay đổi
          </Button>
        </Modal.Footer>
        </Modal>
        </div>
        :null
}
        </>
        
    );
}

export default RoomEdit;

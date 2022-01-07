import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Row, Col, Modal } from 'react-bootstrap';
import { apiUrl } from '../../../../contexts/constant';
import { useHistory } from 'react-router-dom'
import { RoomContext } from '../../../../contexts/RoomsContext';
const RoomDetail = ({ _id ,modal, setModal}) => {
    const history = useHistory()
    const {
        roomState: {room}
    } = useContext(RoomContext)

    const [detail, setDetail] = useState({
        name: '',
        description: '',
        area: '',
        width: '',
        height: '',
        status: '',
        cost: ''
    })

    const { name, description, area, cost, height, width, status} = detail
    useEffect(()=>{
        if(modal)
        {
            setDetail(room)
        }
    },[room])
    const Close = e =>{
        e.preventDefault()
        setDetail(room)
        setModal(false)
    }
    return (
        <>
        { modal?
        <div className='room__detail'>
            <Modal
        show={modal}
        onHide={setModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton/>
            <Modal.Body>
                { room && (
            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tên phòng</Form.Label>
                <Form.Control type="text" value={name} disabled />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Khu vực</Form.Label>
                <Form.Control value = {area} disabled  />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Mô tả</Form.Label>
                <Form.Control value={description} disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Tình trạng</Form.Label>
                <Form.Control value={status} disabled  />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Chiều dài</Form.Label>
                <Form.Control value={height}  disabled />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Chiều rộng</Form.Label>
                <Form.Control value={width} disabled  />
                </Form.Group>

                <Form.Group as={Col} controlId="formZip">
                <Form.Label>Giá</Form.Label>
                <Form.Control value={cost} disabled />
                </Form.Group>
            </Row>
            </Form> 
                )}
            </Modal.Body>
            <Modal.Footer>
          <Button onClick={Close} variant="danger" >
            Close
          </Button>
        </Modal.Footer>
        </Modal>
        </div>
        :null
}
        </>
        
    );
}

export default RoomDetail;

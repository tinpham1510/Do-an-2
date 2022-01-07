import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Row, Col, Modal } from 'react-bootstrap';
import { apiUrl } from '../../../../contexts/constant';
import './Room__add.css'
import { useHistory } from 'react-router-dom';
import { RoomContext } from '../../../../contexts/RoomsContext';
const RoomAdd = ({modal, setModal}) => {
    const history = useHistory()
    const [room, setID] = useState([]);
    const {addRooms} = useContext(RoomContext)
    const [addform, setAdd] = useState({
        name: '',
        description: '',
        area: '',
        status: '',
        height: '',
        width: '',
        cost: '',
        url: 'google.com',
        num: 0
    })
    useEffect(()=>{
        if(!modal)
        {
            Clear()
        }
        console.log(num)
    },[])
    const {name, description, area, status, height, width, cost, num} = addform

    const HandleChange = e =>{
        setAdd({
            name: name,
            description: description,
            area: area,
            status: status,
            height: height,
            width: width,
            cost: cost,
            url: 'google.com',
            num: parseInt(name)
        , [e.target.name]: e.target.value})
    }
    const handleAdd = async e =>
    {
        e.preventDefault();
        const success = await addRooms(addform)
        alert(success.message)
        setModal(false)
        Clear()
    }

    function Clear()
    {       
        setAdd({
            name: '',
            description: '',
            area: '',
            status: '',
            height: '',
            width: '',
            cost: '',
            url: 'google.com',
        })
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
                <Form.Control  type = "text" name="status" value={status} onChange={HandleChange}/>
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
                
            </Modal.Body>
            <Modal.Footer>
          <Button onClick={handleAdd} variant="primary" >
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

export default RoomAdd;

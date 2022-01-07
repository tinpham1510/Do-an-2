import { lineHeight } from '@mui/system';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Modal, Form, Button, Col, Row, Alert } from 'react-bootstrap';
import { ReceiptContext } from '../../contexts/ReceiptContext';


const ReceiptEdit = ({_id, modal, setModal}) => {

    const {
        receiptState: { receipt },
        getRooms,
        updateReceipts
    } = useContext(ReceiptContext)

    const [updated, setUpdated] = useState({
       room: '',
       customer: '',
       cost: 0,
       reason: ''
    })

    useEffect(()=>{
        if(modal)
        {
            setUpdated(receipt)
        }
        //getRooms()
    },[receipt])

    const { room, customer, cost, reason } = updated

    const HandleChange = e =>{
        setUpdated({
            ...updated
        , [e.target.name]: e.target.value})
    }
    const handleUpdate = async e =>{
        e.preventDefault()
        const updatedReceipts ={
            _id: receipt._id,
            room: room._id,
            cost: cost,
            reason: reason
        }
        const message = await updateReceipts(updatedReceipts)
        alert(message.message)
        setModal(false)

    }

    const closeDialog = () => {
		setUpdated(receipt)
		setModal(false)
        console.log(room._id)
	}

    return (    
        <>
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
                <Form.Control type = "text" name="name" value={room.name} disabled onChange={HandleChange} />
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label>Khu vực</Form.Label>
                <Form.Control type = "text" name="area" value={room.area} disabled onChange={HandleChange} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" >
                <Form.Label>Tên người nộp</Form.Label>
                <Form.Control  type = "text" name="description" disabled value={customer.name} onChange={HandleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Số tiền (VND)</Form.Label>
                <Form.Control  type = "text" name="cost" value={cost} onChange={HandleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Nội dung</Form.Label>
                <Form.Control  as="textarea" name='reason' value={reason} rows={3} onChange={HandleChange}/>
            </Form.Group>
            </Form> 
            
                )}
            </Modal.Body>
            <Modal.Footer>
          <Button onClick={handleUpdate}  variant="primary" >
                    Lưu thay đổi
          </Button>
          <Button onClick={closeDialog}  variant="danger" >
                    Đóng
          </Button>
        </Modal.Footer>
        </Modal>
        </div>
        :null
}
        </>
        
    );
}

export default ReceiptEdit;

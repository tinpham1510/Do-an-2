import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Row, Col, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { ReceiptContext } from '../../contexts/ReceiptContext';
const ReceiptDetail = ({ _id ,modal, setModal}) => {
    const history = useHistory()
    const {
        receiptState: {receipt}
    } = useContext(ReceiptContext)

    const [detail, setDetail] = useState({
        room: '',
        customer: '',
        cost: 0,
        reason: ''
    })

    const [date, setDate] = useState()
    const { room , customer, cost, reason} = detail
    useEffect(()=>{
        if(modal)
        {
            setDetail(receipt)
            let currentTimestamp = new Date(receipt.createdAt)    
            let date1 = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
            setDate(date1)
        }
    },[receipt])
    const Close = e =>{
        e.preventDefault()
        setDetail(receipt)
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
                <Form.Control type="text" value={room.name} disabled />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Khu vực</Form.Label>
                <Form.Control value = {room.area} disabled  />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Tên người nộp</Form.Label>
                <Form.Control value={customer.name} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Nội dung</Form.Label>
                <Form.Control value={reason} disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Số tiền (VND)</Form.Label>
                <Form.Control value={cost} disabled  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Ngày tạo</Form.Label>
                <Form.Control value={date} disabled  />
            </Form.Group>
            </Form> 
                )}
            </Modal.Body>
            <Modal.Footer>
          <Button onClick={Close} variant="danger" >
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

export default ReceiptDetail;

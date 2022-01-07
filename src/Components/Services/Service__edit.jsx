import React, { useContext, useEffect, useState } from 'react';
import { Modal, Form, Button, Col, Row, Alert } from 'react-bootstrap';
import { ServiceContext } from '../../contexts/ServiceContext';
import ToastUpdate from '../ToastMessage/Toast__update';
const ServiceEdit = ({_id ,modal, setModal}) => {
    const {
        serviceState: {service},
        updateServices,
        findServices
    } = useContext(ServiceContext)
    const [updateForm, setUpdate] = useState({
        name: '',
        type: '',
        cost: ''
    })
    const {name, type, cost} =  updateForm
    useEffect(()=>{
        if(modal)
        {
            setUpdate(service)
        }
        //console.log(updateForm)
    }, [service])
    const HandleChange = e =>{
        setUpdate({...updateForm, [e.target.name]: e.target.value})
    }

    const HandleUpdate = async e =>{
        e.preventDefault()
        const message = await updateServices(updateForm)
        setModal(false)
        setToast(true)
    }

    const [showToast, setToast] = useState(false)
    const HandleClose = ()=>{
        setUpdate(service)
        setModal(false)
    }
    return (
        <div>
            <ToastUpdate showToast={showToast} setToast={setToast}/>
                {modal?
            <div className='room__detail'>
                <Modal
            show={modal}
            onHide={setModal}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton/>
                <Modal.Body>
                    { service!=null ?
                <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Tên dịch vụ</Form.Label>
                    <Form.Control  type = "text" name="name" value={service.name} onChange={HandleChange} disabled/>
                    </Form.Group>

                    <Form.Group className="mb-3"  >
                            <Form.Label>Loại dịch vụ</Form.Label>
                            <Form.Control as="select" name='type' onChange={HandleChange}>
                                <option id="laptop1">--Loại--</option>
                                <option id="laptop">Điện</option>
                                <option id="phone">Nước</option>
                                <option id="Earbuds">Khác</option>
                            </Form.Control>
            </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Giá tiền (VND)</Form.Label>
                    <Form.Control  type = "text" name="cost" value={cost} onChange={HandleChange}/>
                </Form.Group>
                </Form>
                : null
}
                </Modal.Body>
                <Modal.Footer>
            <Button onClick={HandleUpdate}  variant="primary" >
                Lưu thay đổi
            </Button>
            <Button onClick={HandleClose} variant="danger" >
                Đóng
            </Button>
            </Modal.Footer>
            </Modal>
            </div>
            :null
}
    </div>
    );
}

export default ServiceEdit;

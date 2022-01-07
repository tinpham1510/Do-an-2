import React, { useContext, useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { ServiceContext } from '../../contexts/ServiceContext';
import ToastJS from '../ToastMessage/Toast';

const ServiceAdd = ({modal, setModal}) => {
    const [add, setAdd] = useState({
        name: '',
        type: '',
        cost: ''
    })
    const {name, type, cost} = add
    const HandleChange = e =>{
        setAdd({...add, [e.target.name]: e.target.value})
    }

    const {
        addServices
    } = useContext(ServiceContext)

    const AddService = async e =>{
        e.preventDefault()
        const  message  = await addServices(add)
        setModal(false)
        setToast(true)
        Clear()
    }
    const [showToast, setToast] = useState(false)
    function Clear()
    {
        setAdd({
            name: '',
            type: '',
            cost: ''
        })
    }
    return (
        <div>
            <ToastJS showToast={showToast} setToast={setToast} />
             <Modal
        show={modal}
        onHide={setModal}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton/>
            <Modal.Body>
            <Form>

            <Form.Group className="mb-3" >
                <Form.Label>Tên dịch vụ</Form.Label>
                <Form.Control  type = "text" name="name" value={name} onChange={HandleChange}/>
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
                <Form.Label>Giá tiền</Form.Label>
                <Form.Control  type = "text" name="cost" value={cost}  onChange={HandleChange}/>
            </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
          <Button onClick={AddService}  variant="primary" >
            Lưu thay đổi
          </Button>
        </Modal.Footer>
        </Modal>
        </div>
    );
}

export default ServiceAdd;

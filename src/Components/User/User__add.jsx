import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { CustomerContext } from '../../contexts/CustomerContext';
import ToastJS from '../ToastMessage/Toast';

const UserAdd = ({modal, setModal}) => {
    const [check, setCheck] = useState(false)
    const [add, setAdd] = useState({
        name: '',
        cmnd: '',
        email: '',
        sdt:'',
        address: '',
        note: ''
    })
    const {name, cmnd, email, sdt, address, note} = add
    const HandleChange = e =>{
        setAdd({...add, [e.target.name]: e.target.value})
    }

    const {
        addCustomers
    } = useContext(CustomerContext)
    const AddService = async e =>{
        e.preventDefault()
        const message = await addCustomers(add)
        setModal(false)
        setToast(true)
        Clear()
    }
    function Clear()
    {
        setAdd({
            name: '',
            cmnd: '',
            email: '',
            sdt:'',
            address:'',
            note: ''
        })
        setModal(false)
        setCheck(false)
    }

    const [showToast, setToast] = useState(false)
    function CheckBranch(){
        if(name === '')
        {
            setCheck(true)
        }
    }
    return (
        <div>
            <ToastJS showToast={showToast} setToast={setToast}/>
             <Modal
        show={modal}
        onHide={setModal}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton/>
            <Modal.Body>
            <Form>

            <Form.Group className="mb-3" >
                <Form.Label>Tên khách thuê</Form.Label>
                <Form.Control  type = "text" name="name" value={name} onChange={HandleChange}/>
                <Form.Text style={{fontSize: "12px"}}  muted>
                        *Bắt buộc
                    </Form.Text>
            </Form.Group>
            <Row>
                <Form.Group as={Col} >
                    <Form.Label>CMND/CCCD</Form.Label>
                    <Form.Control type="text" name='cmnd' value={cmnd} onChange={HandleChange}>
                    </Form.Control>
                    <Form.Text style={{fontSize: "12px"}}  muted>
                        CMND/CCCD phải có ít nhất 6 chữ số
                    </Form.Text>
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control type="text" name='sdt' value={sdt} onChange={HandleChange}>
                    </Form.Control>
                    <Form.Text  style={{fontSize: "12px"}} muted>
                        Số điện thoại phải từ 9 - 11 chữ số
                    </Form.Text>
                </Form.Group>
            </Row>
            <br/>
            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control  type = "email" name="email" value={email}  onChange={HandleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control  type = "text" name="address" value={address}  onChange={HandleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Ghi chú</Form.Label>
                <Form.Control  as = "textarea" rows={2} name="note" value={note}  onChange={HandleChange}/>
            </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
          <Button onClick={AddService}  variant="primary" >
            Lưu thay đổi
          </Button>
          <Button onClick={Clear}  variant="danger" >
            Đóng
          </Button>
        </Modal.Footer>
        </Modal>
        </div>
    );
}

export default UserAdd;

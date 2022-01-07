import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { CustomerContext } from '../../contexts/CustomerContext';
const UserEdit = ({modal, setModal}) => {
    const {
        customerState: {customer},
        updateCustomers
    } = useContext(CustomerContext)

    const [update, setUpdate] = useState({
        name: '',
        cmnd: '',
        sdt: '',
        email: '',
        address: '',
        note: ''
    })

    const { name, cmnd, sdt, email, address, note } = update

    useEffect(()=>{
        if(modal)
        {
            setUpdate(customer)
        }
    },[customer])

    const HandleChange = e =>{
        setUpdate({
            ...update,
            [e.target.name] : e.target.value
        })
    }

    const Clear = () => {
        setUpdate(customer)
        setModal(false)
    }

    const UpdateCustomer = async e =>{
        e.preventDefault()
        const message = await updateCustomers(update)
        setModal(false)
    }
    return (
        <div>
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
     <Button onClick={UpdateCustomer}  variant="primary" >
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

export default UserEdit;

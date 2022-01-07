import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { TotalContext } from '../../contexts/TotalContext';
import ToastUpdate from '../ToastMessage/Toast__update';

const Paymoney = ({modal, setModal}) => {
    const day = Date.now()
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(day)
    const [add, setCost] = useState({
        pay: 0
    })

    let number = new Intl.NumberFormat()
    const {
        totalState: {total},
        updateTotals
    } = useContext(TotalContext)

    const { pay } = add
    const HandleChange = e =>{
        setCost({
            _id: total._id,
            room: total.room._id,
            pay: pay,
            [e.target.name]: e.target.value
        })
    }

    const Clear = ()=>{
        setCost({
            pay: 0
        })
        setModal(false)
    }
    const [showToast, setToast] = useState(false)
    const Save = async e =>{
        e.preventDefault()
        const message = await updateTotals(add)
        alert(message.message)
        Clear()
        setModal(false)
        setToast(true)
    }
    return (
        <div>
        <ToastUpdate showToast={showToast} setToast={setToast}/>
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
                <Form.Label>Ngày</Form.Label>
                <Form.Control  type = "text" name="date" disabled value={date}/>
            </Form.Group>
       </Form>
       <Form.Group className="mb-3" >
                <Form.Label>Số tiền</Form.Label>
                <Form.Control  type = "text" name="pay" value={pay}  onChange={HandleChange}/>
            </Form.Group>
       </Modal.Body>
       <Modal.Footer>
     <Button onClick={Save}  variant="primary" >
       Lưu thay đổi
     </Button>
     <Button onClick={Clear}   variant="danger" >
       Đóng
     </Button>
   </Modal.Footer>
   </Modal>
   </div>
    );
}

export default Paymoney;

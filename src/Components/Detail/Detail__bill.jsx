import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { BillContext } from '../../contexts/BillContext';
import { apiUrl, TOTAL_LOAD_SUCCESS } from '../../contexts/constant';
import { TotalContext } from '../../contexts/TotalContext';

const DetailBill = ({modal, setModal}) => {
    const {
        billState: {bill}
    } = useContext(BillContext)
    let number = Intl.NumberFormat()
    const [date, setDate] = useState()
    const [up, setUp] = useState()
    useEffect(()=>{
        if(modal)
        {
           axios({
            method: "GET",
            url: `${apiUrl}/totals/${bill.total._id}`,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
            withCredentials: true
           })
           .then(resp=>{
               setUp(resp.data.data[0])
               console.log(up)
           })
           let currentTimestamp = new Date(bill.createdAt)    
            let date1 = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
           setDate(date1)
        }
    })

    const HandleClose = () =>{
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
   size='lg'
 >
   <Modal.Header closeButton> <div style={{color: 'red', fontSize: '28px', fontWeight: '500'}}>
                Chi tiết hóa đơn
            </div> </Modal.Header>
       <Modal.Body>
           {up!=null&&up.room!=null&&up.customer!=null?
       <Form>
           <Row>
           <Form.Group as={Col} >
           <Form.Label>Tầng</Form.Label>
           <Form.Control  type = "text" value={up.room.area} />
       </Form.Group>

       <Form.Group as={Col} >
           <Form.Label>Phòng</Form.Label>
           <Form.Control  type = "text" value={up.room.name} />
       </Form.Group>
       <Form.Group as={Col} >
           <Form.Label>Tên khách thuê</Form.Label>
           <Form.Control  type = "text" value={up.customer.name}/>
       </Form.Group>
           </Row>
           <br/>
       <Form.Group className="mb-3" >
           <Form.Label>Tổng số tiền (VNĐ)</Form.Label>
           <Form.Control  type = "text" value={number.format(bill.total.sum)}/>
       </Form.Group>

       <Form.Group className="mb-3" >
           <Form.Label>Ngày tạo</Form.Label>
           <Form.Control  type = "text" value={date}/>
       </Form.Group>

       <Form.Group className="mb-3" >
           <Form.Label>Người tạo</Form.Label>
           <Form.Control  type = "text"  value={bill.user.username}/>
       </Form.Group>
       </Form>:null
}
       </Modal.Body>
       <Modal.Footer>
     <Button  onClick={HandleClose}  variant="danger" >
       Đóng
     </Button>
   </Modal.Footer>
   </Modal>
   </div>
    );
}

export default DetailBill;

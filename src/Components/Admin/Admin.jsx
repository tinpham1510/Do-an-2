import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { apiUrl } from '../../contexts/constant';
const Admin = ({modal, setModal}) => {
    const HandleClose = () =>{
        setModal(false)
    }
    const [date, setDate] = useState()
    const [id, setID] = useState()
    useEffect(()=>{
        if(modal)
        {
            axios({
                method: "GET",
                url: `${apiUrl}/auth`,
                headers: {
                    'Authorization': 'Bearer '+ localStorage.getItem('accessToken')
                },
                withCredentials: true

            }).then((resp)=>{
                setID(resp.data.posts)
                let currentTimestamp = new Date(resp.data.posts.createdAt)    
                let date1 = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
                setDate(date1)
            })
    }
    })
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
           {id!=null?
        <Form>
        <Form.Group className="mb-3" >
           <Form.Label>Tên tài khoản</Form.Label>
           <Form.Control  type = "text" value={id.username} />
       </Form.Group>

       <Form.Group className="mb-3" >
           <Form.Label>Email</Form.Label>
           <Form.Control  type = "text" value={id.email}/>
       </Form.Group>

       <Form.Group className="mb-3" >
           <Form.Label>Ngày tạo</Form.Label>
           <Form.Control  type = "text" value={date} />
       </Form.Group>
        </Form>
        :null
}
       </Modal.Body>
       <Modal.Footer>
     <Button  onClick={HandleClose} variant="danger" >
       Đóng
     </Button>
   </Modal.Footer>
   </Modal>
   </div>
    );
}

export default Admin;

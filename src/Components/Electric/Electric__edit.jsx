import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { apiUrl } from '../../contexts/constant';
import { postContext } from '../../contexts/PostContext';
import { RoomContext } from '../../contexts/RoomsContext';

const ElectricEdit = ({_id, modal, setModal}) => {


    const {
        postState: {post},
    } = useContext(postContext)

    const [update, setUpdate] = useState({
        valueElectric: 0
    })

    const {valueElectric} = update
    useEffect(()=>{
        if(modal)
        {
            axios({
                method: "GET",
                url: `${apiUrl}/rooms/${post.room._id}`,
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
                },
                withCredentials: true
            })
            .then(resp=>{
                setUpdate({
                    valueElectric: resp.data.data[0].valueElectric
                })
            })
        }
    },[post])

    const HandleChange = e =>{
        setUpdate({
            ...update,
            [e.target.name]: e.target.value
        })
    }
    const HandleSave = async e =>{
       e.preventDefault()
       let up = {
           name: post.room.name,
           valueElectric: valueElectric
       }
       axios({
        method: "PUT",
        url: `${apiUrl}/rooms/${post.room._id}`,
        data: up,
        headers:{
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
        },
       })

       setModal(false)

    }

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
   centered
 >
   <Modal.Header closeButton/>
       <Modal.Body>
       <Form.Group className="mb-3" >
                <Form.Label>Chỉ số (kWh/tháng)</Form.Label>
                <Form.Control  type = "text" name="valueElectric" value={valueElectric}  onChange={HandleChange}/>
            </Form.Group>
       </Modal.Body>
       <Modal.Footer>
     <Button onClick={HandleSave}  variant="primary" >
       Lưu thông tin
     </Button>
     <Button onClick={HandleClose} variant="danger" >
       Đóng
     </Button>
   </Modal.Footer>
   </Modal>
   </div>
    );
}

export default ElectricEdit;

import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { apiUrl } from '../../contexts/constant';
import { postContext } from '../../contexts/PostContext';

const ElectricDelete = ({_id ,modal, setModal}) => {
    const {
        postState: {post},
    } = useContext(postContext)
    const HandleSave = async e =>{
        e.preventDefault()
        let up = {
            name: post.room.name,
            valueElectric: 0
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
       <div style={{fontSize: '18px'}}>
               Bạn có đồng ý xóa dữ liệu hiện có?
           </div>
       </Modal.Body>
       <Modal.Footer>
     <Button onClick={HandleSave}  variant="primary" >
       Đồng ý
     </Button>
     <Button onClick={HandleClose} variant="danger" >
       Từ chối
     </Button>
   </Modal.Footer>
   </Modal>
   </div>
    );
}

export default ElectricDelete;

import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { apiUrl } from '../../contexts/constant';
import { TotalContext } from '../../contexts/TotalContext';

const Deletemoney = ({modal, setModal}) => {
    
    const {
        totalState: {total},
    } = useContext(TotalContext)
    const HandleSave = async e =>{
        e.preventDefault()
        let up = {
            room: total.room._id,
            sum: 0,
            pay: 0
        }
        axios({
         method: "PUT",
         url: `${apiUrl}/totals/${total._id}`,
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

export default Deletemoney;

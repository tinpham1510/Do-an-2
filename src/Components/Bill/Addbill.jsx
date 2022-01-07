import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { apiUrl } from '../../contexts/constant';
import { TotalContext } from '../../contexts/TotalContext';

const Addbill = ({modal, setModal}) => {
    const {
        totalState:{total},
        deleteTotals
    } = useContext(TotalContext)


    const HandleSave = async e =>{
        e.preventDefault()
        let post = {
            total: total._id
        }
        axios({
            method: "POST",
            url: `${apiUrl}/bills`,
            data: post,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
        })
        let post1 ={
            room: total.room._id,
            pay: total.sum
        }
        axios({
            method: "PUT",
            url: `${apiUrl}/totals/${total._id}`,
            data: post1,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
        })
        setModal(false)
    }

    const HandleClose = ()=>{
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
           <div style={{fontSize: '18px'}}>
            Bạn có muốn cập nhật đã thu tiền cho hóa đơn đã chọn này ? 
           </div>
       </Modal.Body>
       <Modal.Footer>
     <Button onClick={HandleSave}  variant="primary" >
       Đồng ý
     </Button>
     <Button  onClick={HandleClose} variant="danger" >
       Từ chối
     </Button>
   </Modal.Footer>
   </Modal>
   </div>
    );
}

export default Addbill;

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { apiUrl } from '../../contexts/constant';
import { ReceiptContext } from '../../contexts/ReceiptContext';
import { TotalContext } from '../../contexts/TotalContext';

const Totalmoney = ({modal, setModal}) => {
    const {
        totalState: {total},
        updateTotals
    } = useContext(TotalContext)
    const [receipt, setRe] = useState(0)
    const [up, setUp] = useState([])

    const Save = async () =>{
        const electric = total.room.valueElectric * 1800;
        const water = total.room.valueWater * 6000;
        const fee = parseInt(total.room.cost);
        const sum = electric + water + fee 
        let update = {
            _id: total._id,
            room: total.room._id,
            sum: sum
        }
        const message = await updateTotals(update)
        setModal(false)
    }
    const Clear = ()=>{
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
               Bạn có đồng ý tính tiền cho phòng này?
           </div>
       </Modal.Body>
       <Modal.Footer>
     <Button onClick={Save}  variant="primary" >
       Đồng ý
     </Button>
     <Button onClick={Clear}   variant="danger" >
       Từ chối
     </Button>
   </Modal.Footer>
   </Modal>
   </div>
    );
}

export default Totalmoney;

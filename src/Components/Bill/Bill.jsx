import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { TotalContext } from '../../contexts/TotalContext';
import './Bill.css'
const Bill = ({modal, setModal}) => {
    const HandleClose = ()=>{
        setModal(false)
    }
    const {
        totalState: {total}
    } = useContext(TotalContext)

    const [fee, setFee] = useState(0)
    const [sum, setSum] = useState(0)
    const [elec, setElec] = useState(0)
    const [water, setWater] = useState(0)
    let number = Intl.NumberFormat();
    useEffect(()=>{
    if(modal)
    {
        const electric = total.room.valueElectric * 1800;
        const water = total.room.valueWater * 6000;
        const fee = parseInt(total.room.cost);
        const sum = total.sum;
        setFee(fee)
        setSum(sum)
        setWater(water)
        setElec(electric)
    }
},[total])

    
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
   <Modal.Header closeButton>  <div style={{color: 'red', fontSize: '28px', fontWeight: '500'}}>
                Hóa đơn
            </div> </Modal.Header>
       <Modal.Body>
           { total!=null?
            <div className='bill__container'>
                <div className='bill__container__text'>
                    <div>
                        {total.room.area}
                    </div>
                </div>
                <div className='bill__container__title'>
                        Hóa đơn tiền nhà
                </div>
                <div className='bill__container__title'>
                        <div style={{fontSize: '16px'}}>Tháng 2/2022</div>
                </div>
                <div className='bill__container__content'>
                    <div>Họ tên: {total.customer.name}</div>
                    <div>Phòng: {total.room.name}</div>
                </div>
                <div className='bill__container__member'>
                    <div>
                        Tiền nhà (từ đầu tháng đến mùng 1 tháng tiếp theo) 
                    </div>
                    <div>
                        {number.format(fee)}
                    </div>
                </div>
                <div className='bill__container__member'>
                    <div>
                        Điện
                    </div>
                    <div>
                    {number.format(elec)}
                    </div>
                </div>
                <div className='bill__container__member'>
                    <div>
                        Nước
                    </div>
                    <div>
                    {number.format(water)}
                    </div>
                </div>
                <div className='bill__container__total'>
                   <div>Tổng cộng</div>
                   <div>{number.format(sum)}</div>
                </div>
            </div>:null
}
       </Modal.Body>
       <Modal.Footer>
     <Button   variant="primary" >
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

export default Bill;

import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ReceiptContext } from '../../contexts/ReceiptContext';
import Actionbuttonbottom from '../Rooms/Room_element/ActionButtonBottom';
import './Receipts.css'
import ReceiptsAdd from './Receipts__add';

const Receipts = () => {

    let idroom = "61d5bda58e7b3d5540b44ef4"
    let idCustomer = "61c69c399309db2f2a54c5f7"
    const [modal, setModal] = useState(false)
    
    const {
        receiptState: {receipts},
        getReceipts
    } = useContext(ReceiptContext)
    const [date, setDate] = useState()
    useEffect(()=>{
        getReceipts()
    },[receipts])
    const HandleClick = e =>{
        setModal(true)
        HandleDate()
    }

    const HandleDate =()=>{

    }
    let number = Intl.NumberFormat()
    return (
        <div className='receipts_page'>
            <div className="receipts__page_content">
                    Phiếu thu
                </div>
                <div className="receipts__page_container">
                <div className="receipts__container_top">
                    <div className="receipts__container_content">
                        Danh sách phiếu thu
                    </div>
                    <div className="receipts__container_button">
                        <Button  onClick={HandleClick} variant="success">
                            Thêm phiếu thu
                        </Button>
                        <ReceiptsAdd modal={modal} setModal={setModal}/>
                    </div>
                </div>
                <div className="receipts__container_bottom">
                    <table className="table table-bordered" style={{margin: "30px 5%" , width: "90%"}}>
                    <thead>
                            <tr>
                                <th>Tầng</th>
                                <th>Phòng</th>
                                <th>Người nộp tiền</th>
                                <th>Nội dung</th>
                                <th>Số tiền (VND)</th>
                                <th>Chi tiết</th>
                            </tr>
                    </thead>
                    {receipts!=null&&receipts.map((info)=>(
                    <tbody>
                        { info.room!=null&&info.customer!=null?
                        <tr>
                            <td>{info.room.area}</td>
                            <td>{info.room.name}</td>
                            <td>{info.customer.name}</td>
                            <td>{info.reason}</td>
                            <td>{number.format(info.cost)}</td>
                            <td>
                                <Actionbuttonbottom _id={info._id} isReceipt={true}/>
                            </td>
                        </tr>
                        :null
}
                    </tbody>   
                    ))}
                </table>
                </div>
            </div>
        </div>
    );
}

export default Receipts;

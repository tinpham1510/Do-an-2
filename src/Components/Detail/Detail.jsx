import React, { useContext, useEffect } from 'react';
import { BillContext } from '../../contexts/BillContext';
import Actionbuttonbottom from '../Rooms/Room_element/ActionButtonBottom';
import './Detail.css'
const Detail = () => {
    const { 
        billState: {bills},
        getBills
    } = useContext(BillContext)
    useEffect(()=>{
        getBills()
    },[bills])
    let number = Intl.NumberFormat()
    return (
        <div className='detail_page'>
            <div className="detail__page_content">
                    
                </div>
                <div className="detail__page_container">
                <div className="detail__container_top">
                    <div className="detail__container_content">
                        Hóa đơn
                    </div>
                    <div className="detail__container_button">
                    </div>
                </div>
                <div className="detail__container_bottom">
                    <table className="table table-bordered" style={{margin: "30px 5%" , width: "90%"}}>
                    <thead>
                            <tr>
                                <th>Mã hóa đơn</th>
                                <th>Mã phòng</th>
                                <th>Mã Khách</th>
                                <th>Tổng</th>
                                <th>Chi tiết</th>
                            </tr>
                    </thead> 
                    {bills!=null&&bills.map((info)=>(
                    <tbody>
                        {info.total!=null?
                        <tr>
                            <td>{info.total._id}</td>
                            <td>{info.total.room}</td>
                            <td>{info.total.customer}</td>
                            <td>{number.format(info.total.sum)}</td>
                            <td>
                                <Actionbuttonbottom _id={info._id} isBill={true} />
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

export default Detail;

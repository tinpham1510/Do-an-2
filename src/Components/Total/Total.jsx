import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { TotalContext } from '../../contexts/TotalContext';
import Actionbuttonbottom from '../Rooms/Room_element/ActionButtonBottom';
import Actionbuttonchoose from './ActionButtonChoose';
import './Total.css'

const Total = () => {
    const {
        totalState: {totals},
        getTotals
    } = useContext(TotalContext)
    useEffect(()=>{
        getTotals()
    },[totals])

    let number = new Intl.NumberFormat();
    return (
        <div className="total_page">
                <div className="total__page_content">
                    Tính tiền
                </div>
            <div className="total__page_container">
                <div className="total__container_top">
                    <div className="total__container_content">
                        Danh sách phòng thuê
                    </div>
                    <div className="total__container_button">
                    </div>
                </div>
                <div className="total__container_bottom">
                    <table className="table table-bordered" style={{margin: "30px 5%" , width: "90%"}}>
                    <thead>
                            <tr>
                                <th></th>
                                <th>Tầng</th>
                                <th>Phòng</th>
                                <th>Tên khách</th>
                                <th>Số tiền (VND)</th>
                                <th>Đã trả (VND)</th>
                                <th>Còn lại (VND)</th>
                                <th>Chi tiết</th>
                            </tr>
                    </thead>
                    { totals!=null&&totals.map((info)=>(
                    <tbody>
                        { info.room!=null&&info.customer!=null?
                                <tr>    
                                    <td>
                                       <Actionbuttonchoose _id={info._id}/>
                                    </td>
                                    <td>{info.room.area}</td>
                                    <td>{info.room.name}</td>
                                    <td>{info.customer.name}</td>
                                    <td>{number.format(info.sum)}</td>
                                    <td>{number.format(info.pay)}</td>
                                    <td className='remain'>{number.format(info.sum - info.pay)}</td>
                                    <td>
                                        <Actionbuttonbottom _id={info._id} isTotal={true} />
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

export default Total;

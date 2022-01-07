import Button from  'react-bootstrap/Button';
import React, { useContext, useEffect, useState } from 'react';
import './Service.css'
import Actionbuttonbottom from '../Rooms/Room_element/ActionButtonBottom';
import { ServiceContext } from '../../contexts/ServiceContext';
import ServiceAdd from './Service__add';
import Loading from '../Loading/Loading';
import { breadcrumbsClasses } from '@mui/material';
const Service = () => {
    const [modal, setModal] = useState(false)
    const {
        serviceState: { services, servicesLoading },
        getServices
    } = useContext(ServiceContext)

    let number = Intl.NumberFormat()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getServices()
    })
   
    const handleAdd = e => {
        e.preventDefault()
        setModal(true)
        
    }
    return (
        <div className="Service_page">
                <div className="Service__page_content">
                    Dịch vụ
                </div>
            <div className="Service__page_container">
                <div className="Service__container_top">
                    <div className="Service__container_content">
                        Danh sách dịch vụ
                    </div>
                    <div className="Service__container_button">
                        <Button onClick={handleAdd} variant="success">
                            Thêm dịch vụ
                        </Button>
                        <ServiceAdd modal={modal} setModal={setModal}/>
                    </div>
                </div>
                <div className="Service__container_bottom">
                    <table className="table table-bordered" style={{margin: "30px 5%" , width: "90%"}}>
                    <thead>
                            <tr>
                                <th>Tên dịch vụ</th>
                                <th>Loại dịch vụ</th>
                                <th>Giá tiền (VND)</th>
                                <th>Tình trạng</th>
                                <th>Chi tiết</th>
                            </tr>
                    </thead>
                    { services!=null&&services.map((service)=>(
                    <tbody>
                                <tr>
                                    <td>{service.name}</td>
                                    <td>{service.type}</td>
                                    { service.type === 'Điện'?
                                    <td>{number.format(service.cost)}/kWh</td>
                                    : service.type === 'Nước'?
                                    <td>{number.format(service.cost)}/m3</td>
                                    : <td>{number.format(service.cost)}</td>
}
                                    <th>Đang sử dụng</th>
                                    <td>
                                        <div>
                                            <Actionbuttonbottom _id={service._id} isService={true} />
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                                        ))}
                        
                                        
                </table>
                </div>
            </div>
        </div>
    );
}

export default Service;

import React, { useContext, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { CustomerContext } from '../../contexts/CustomerContext';
import './ListCustomer.css'
const Listcustomer = ({show, setShow, showDetail, setShowDetail}) => {
    const {
        customerState:{customers},
        getCustomers,
        findCustomers
    } = useContext(CustomerContext)
    useEffect(()=>{
        getCustomers()
    },[customers])

    const chooseCustomer = async customerId=>{
        findCustomers(customerId)
        setShow(false)
        setShowDetail(true)
    }

    const HandleClose = () =>{
        setShow(false)
    }
    return (
        <div>
        {show?
    <div className='room__detail'>
        <Modal
    show={show}
    onHide={setShow}
    backdrop="static"
    keyboard={false}
    centered
    size='lg'
>
    <Modal.Header closeButton/>
        <Modal.Body>
        <div style={{fontSize: '20px', marginLeft: '22px', color: 'gray'}}>
            Danh sách khách thuê
        </div>
        <div className="listcustomer__container_bottom">
                    <table className="table table-bordered" style={{margin: "30px 5%" , width: "90%"}}>
                    <thead>
                            <tr>
                                <th>Tên khách thuê</th>
                                <th>CMND</th>
                                <th>Số điện thoại</th>
                                <th>Chi tiết</th>
                            </tr>
                    </thead>
                    {customers!=null&&customers.map((info)=>(
                    <tbody>
                                <tr>
                                    <td>{info.name}</td>
                                    <td>{info.cmnd}</td>
                                    <td>{info.sdt}</td>
                                    <td>
                                        <Button onClick={chooseCustomer.bind(this,info._id)} variant='info'>
                                            Chọn
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>     
                    ))}
                </table>
                </div>
        </Modal.Body>
        <Modal.Footer>
    <Button onClick={HandleClose} variant="danger" >
        Đóng
    </Button>
    </Modal.Footer>
    </Modal>
    </div>
    :null
}
</div>
    );
}

export default Listcustomer;

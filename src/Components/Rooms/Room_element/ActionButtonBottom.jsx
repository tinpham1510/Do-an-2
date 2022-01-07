import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { apiUrl } from '../../../contexts/constant';
import { RoomContext } from '../../../contexts/RoomsContext';
import { useHistory } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import RoomEdit from './Room__detail/Room__edit';
import { ServiceContext } from '../../../contexts/ServiceContext';
import ServiceEdit from '../../Services/Service__edit';
import { CustomerContext } from '../../../contexts/CustomerContext';
import UserAdd from '../../User/User__add';
import UserEdit from '../../User/User__edit';
import { postContext } from '../../../contexts/PostContext';
import { ReceiptContext } from '../../../contexts/ReceiptContext';
import ReceiptDetail from '../../Receipts/Receipts__detail';
import ReceiptEdit from '../../Receipts/Receipts__edit';
import { TotalContext } from '../../../contexts/TotalContext'
import Paymoney from '../../Total/PayMoney';
import { transpileModule } from 'typescript';
import Totalmoney from '../../Total/TotalMoney';
import ElectricEdit from '../../Electric/Electric__edit';
import ElectricDelete from '../../Electric/Electric__delete';
import WaterEdit from '../../Water/Water__edit';
import WaterDelete from '../../Water/Water__delete';
import Deletemoney from '../../Total/DeleteMoney';
import Bill from '../../Bill/Bill';
import { BillContext } from '../../../contexts/BillContext';
import DetailBill from '../../Detail/Detail__bill';

const Actionbuttonbottom = ({_id, isService, isCustomer, isReceipt, isTotal, isValueE, isValueW, isBill}) => {
    const history = useHistory()
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const {
        
        deleteRooms, 
        findRooms
    } = useContext(RoomContext)


    const chooseRooms = roomId => {
		findRooms(roomId)
		setModal(true)
	}

    const [info, setInfo] = useState()
    useEffect(()=>{
        axios({
            method: "GET",
            url: `${apiUrl}/rooms/${_id}`,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
            withCredentials: true
        })
        .then(resp=>{
            setInfo(resp.data.data)
        })
    },[100])
    const Deleterooms = roomId => {
        if(info[0].status === 'Đang thuê')
        {
            axios({
                method: "GET",
                url: `${apiUrl}/posts/room${roomId}`,
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
                },
                withCredentials: true
            })
            .then(resp=>{
               axios({
                   method: "DELETE",
                   url: `${apiUrl}/posts/${resp.data.posts[0]._id}`,
                   headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
                },
               })
            })
            deleteRooms(roomId)
        }
        else
        {
            deleteRooms(roomId)
        }
        
    }
    const chooseServices = serviceId => {
		findServices(serviceId)
		setModal1(true)
	}

    const chooseCustomers = customerId => {
		findCustomers(customerId)
		setModal(true)
	}
    const {
        serviceState: {service},
        deleteServices,
        findServices
    } = useContext(ServiceContext)

    const {
        deleteCustomers,
        findCustomers
    } = useContext(CustomerContext)

    const {
        receiptState: {receipt},
        findReceipts,
        deleteReceipts
    } = useContext(ReceiptContext)

    const HandleDetail = async receiptId => {
        findReceipts(receiptId)
        setModal(true)
    }

    const HandleEdit = async receiptId => {
        findReceipts(receiptId)
        setModal1(true)
    }
    /// tiền điện
    
    const {
        findPosts
    } = useContext(postContext)

    const chooseRoomValue = () =>{
        findPosts(_id)
        setModal(true)
    }

    const deleteRoomValue = ()=>{
        findPosts(_id)
        setModal1(true)
    }
    /// tiền nước


    /// tính tiền tổng 

    const {
        totalState: {totals, total},
        findTotals,
        updateTotals,
        deleteTotals
    } = useContext(TotalContext)
    const [sumMoney, setSum] = useState(0)
    const SumMoney = totalId =>{
        findTotals(totalId)
        setModal1(true)
    }

    const Pay = () =>{
        findTotals(_id)
        setModal(true)
    }

    const deleteMoney = totalId => {
        findTotals(totalId)
        setModal2(true)
    }

    const Bills = totalId =>{
        findTotals(totalId)
        setModal3(true)
    }
    /// bill dettail

    const {
        findBills
    } = useContext(BillContext)
    const findMember = billId=>{
        findBills(billId)
        setModal(true)
    }
    return (
        <>
        {
            isService? 
            <>
                <div style={{display: "flex"}}>
                <Button variant="info"onClick={chooseServices.bind(this, _id)} style={{height: "30px", width:"100px", alignItems:"center" , marginRight:"3%"}}>
                    <div style={{fontSize: "12px"}}>
                        Sửa
                    </div>
                </Button>
                    <ServiceEdit _id={_id} modal={modal1} setModal={setModal1}/>
                <Button  variant="danger"  onClick={deleteServices.bind(this,_id)} style={{height: "30px", width:"100px", alignItems:"center"}}>
                         <div style={{fontSize: "12px"}}>
                             Xóa
                        </div>
                </Button>
        </div>
            </>
            : isCustomer? 
            <div style={{display: "flex"}}>
             <Button variant="info" onClick={chooseCustomers.bind(this,_id)} style={{height: "30px", width:"100px", alignItems:"center" , marginRight:"3%"}}>
                                    <div style={{fontSize: "12px"}}>
                                        Sửa
                                    </div>
                            </Button>
                            <UserEdit modal={modal} setModal={setModal}/>
                            <Button  variant="danger" onClick={deleteCustomers.bind(this,_id)} style={{height: "30px", width:"100px", alignItems:"center"}}>
                                    <div style={{fontSize: "12px"}}>
                                        Xóa
                                    </div>
                </Button>
            </div>
            : isReceipt?
            <div style={{display: "flex"}}>
                <Button  variant="secondary" onClick={HandleDetail.bind(this,_id)}  style={{height: "30px", width:"80px",marginRight:"3%",alignItems:"center"}}>
                                    <div style={{fontSize: "12px"}}>
                                        Chi tiết
                                    </div>
                </Button>
             <Button variant="info" onClick={HandleEdit.bind(this,_id)} style={{height: "30px", width:"50px", alignItems:"center" , marginRight:"3%"}}>
                                    <div style={{fontSize: "12px"}}>
                                        Sửa
                                    </div>
                            </Button>
                            <ReceiptEdit modal={modal1} setModal={setModal1}/>
                            <Button  variant="danger" onClick={deleteReceipts.bind(this,_id)} style={{height: "30px", width:"50px", alignItems:"center"}}>
                                    <div style={{fontSize: "12px"}}>
                                        Xóa
                                    </div>
                </Button>
                <ReceiptDetail modal={modal} setModal={setModal}/>
            </div>
            : isTotal?
            <div style={{display: "flex"}}>
                <Paymoney modal={modal} setModal={setModal}/>
                <Totalmoney modal={modal1} setModal={setModal1}/>
                <Deletemoney modal={modal2} setModal={setModal2}/>
                <Bill modal={modal3} setModal={setModal3}/>
                  <Button variant="info" onClick={SumMoney.bind(this,_id)}  style={{height: "30px", width:"80px", alignItems:"center" , marginRight:"3%"}}>
                                <div style={{fontSize: "12px"}}>
                                    Tính tiền
                                </div>
                        </Button>
            <Button  variant="secondary"  onClick={Bills.bind(this,_id)} style={{height: "30px", width:"80px",marginRight:"3%",alignItems:"center"}}>
                                <div style={{fontSize: "12px"}}>
                                    Hóa đơn
                                </div>
            </Button>   
         <Button variant="success" onClick={Pay} style={{height: "30px", width:"80px", alignItems:"center" , marginRight:"3%"}}>
                                <div style={{fontSize: "12px"}}>
                                    Thu tiền
                                </div>
                        </Button>
                        <Button  variant="danger" onClick={deleteMoney.bind(this,_id)}  style={{height: "30px", width:"50px", alignItems:"center"}}>
                                <div style={{fontSize: "12px"}}>
                                    Xóa
                                </div>
            </Button>
            
            </div>
            : isValueE?
            <div style={{display: "flex"}}>
            <ElectricEdit _id={_id} modal={modal} setModal={setModal}/>
            <ElectricDelete _id={_id} modal={modal1} setModal={setModal1}/>
            <WaterEdit _id={_id} modal={modal2} setModal={setModal2} />
            <WaterDelete _id={_id} modal={modal3} setModal={setModal3} />
            <Button variant="info" onClick={chooseRoomValue}  style={{height: "30px", width:"100px", alignItems:"center" , marginRight:"3%"}}>
                                   <div style={{fontSize: "12px"}}>
                                       Cập nhật
                                   </div>
                           </Button>
                           <Button onClick={deleteRoomValue}  variant="danger" style={{height: "30px", width:"100px", alignItems:"center"}}>
                                   <div style={{fontSize: "12px"}}>
                                       Xóa
                                   </div>
               </Button>
           </div>
            : isValueW?
            <div style={{display: "flex"}}>
            <WaterEdit _id={_id} modal={modal} setModal={setModal} />
            <WaterDelete _id={_id} modal={modal1} setModal={setModal1} />
            <Button variant="info" onClick={chooseRoomValue}  style={{height: "30px", width:"100px", alignItems:"center" , marginRight:"3%"}}>
                                   <div style={{fontSize: "12px"}}>
                                       Cập nhật
                                   </div>
                           </Button>
                           <Button onClick={deleteRoomValue}  variant="danger" style={{height: "30px", width:"100px", alignItems:"center"}}>
                                   <div style={{fontSize: "12px"}}>
                                       Xóa
                                   </div>
               </Button>
           </div>
            : isBill?
            <div style={{display: "flex"}}>
                <DetailBill modal={modal} setModal={setModal}/>
            <Button  variant="secondary" onClick={findMember.bind(this,_id)}  style={{height: "30px", width:"80px",marginRight:"3%",alignItems:"center"}}>
                                <div style={{fontSize: "12px"}}>
                                    Chi tiết
                                </div>
            </Button>
        </div>
            :
             <div style={{display: "flex"}}>
             <Button variant="info" onClick={chooseRooms.bind(this, _id)} style={{height: "30px", width:"100px", alignItems:"center" , marginRight:"3%"}}>
                                    <div style={{fontSize: "12px"}}>
                                        Sửa
                                    </div>
                            </Button>
                            <RoomEdit _id={_id} modal={modal} setModal={setModal} />
                            <Button  variant="danger"  onClick={Deleterooms.bind(this,_id)} style={{height: "30px", width:"100px", alignItems:"center"}}>
                                    <div style={{fontSize: "12px"}}>
                                        Xóa
                                    </div>
                </Button>
        </div>
}
        </>
    );
}

export default Actionbuttonbottom;

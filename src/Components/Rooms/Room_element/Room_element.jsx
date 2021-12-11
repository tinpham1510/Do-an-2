import React from 'react';
import './Room_element.css'
import { Button } from 'react-bootstrap'
const RoomElement = () => {
    return (
        <div className="Element__page">
            <div className="Element__page_top">
                <div className="Element__page__top_left">
                <div>
                    Trống: 0 |
                </div>
                <div>
                    Đã thuê: 0 |
                 </div>
                <div>
                    Chưa trả phí: 0 |
                </div>
                </div>
                <div className="Element__page__top_right">
                <Button variant="dark">
                    Chi tiết phòng
                </Button>
                <Button variant="success">
                    Thêm phòng
                </Button>
                <Button>
                    Sửa phòng
                </Button>                                
                <Button variant= "danger">
                    Xóa phòng
                </Button>
                </div>
            </div>
            <div className="Element__page_bottom">
                <div className="Element__page__container">
                    <div className="Element__container_content">
                        <div className="Element__container__con">
                            <i class='bx bxs-home' ></i>
                            <div style={{fontWeight:"bold" ,fontSize: "18px"}}> 
                                2
                            </div>
                        </div>
                        
                        <div className="Element__container__button">
                            <Button variant="primary" style={{height: "30px", width:"100px", alignItems:"center"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Add customer
                                    </div>
                            </Button>
                        </div>
                        <div className="Element__container__con">
                            <i class='bx bxs-user' ></i>
                        </div>
                        <div className="Element__container__details">
                            <i class='bx bx-money' ></i>
                                <div style={{fontSize: "10px", color:"red"}}>
                                    3.000.000 VNĐ
                                </div>
                        </div>
                        <div className="Element__container__con">
                            <Button variant="info" style={{height: "30px", width:"100px", alignItems:"center" , marginRight:"3%"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Edit
                                    </div>
                            </Button>
                            <Button variant="danger" style={{height: "30px", width:"100px", alignItems:"center"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Delete
                                    </div>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="Element__page__container">
                    <div className="Element__container_content">
                        <div className="Element__container__con">
                            <i class='bx bxs-home' ></i>
                            <div style={{fontWeight:"bold" ,fontSize: "18px"}}> 
                                3
                            </div>
                        </div>
                        
                        <div className="Element__container__button">
                            <Button variant="primary" style={{height: "30px", width:"100px", alignItems:"center"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Add customer
                                    </div>
                            </Button>
                        </div>
                        <div className="Element__container__con">
                            <i class='bx bxs-user' ></i>
                        </div>
                        <div className="Element__container__details">
                            <i class='bx bx-money' ></i>
                                <div style={{fontSize: "10px", color:"red"}}>
                                    3.000.000 VNĐ
                                </div>
                        </div>
                        <div className="Element__container__con">
                            <Button variant="info" style={{height: "30px", width:"100px", alignItems:"center" , marginRight:"3%"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Edit
                                    </div>
                            </Button>
                            <Button variant="danger" style={{height: "30px", width:"100px", alignItems:"center"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Delete
                                    </div>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="Element__page__container">
                    <div className="Element__container_content">
                        <div className="Element__container__con">
                            <i class='bx bxs-home' ></i>
                            <div style={{fontWeight:"bold" ,fontSize: "18px"}}> 
                                4
                            </div>
                        </div>
                        
                        <div className="Element__container__button">
                            <Button variant="primary" style={{height: "30px", width:"100px", alignItems:"center"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Add customer
                                    </div>
                            </Button>
                        </div>
                        <div className="Element__container__con">
                            <i class='bx bxs-user' ></i>
                        </div>
                        <div className="Element__container__details">
                            <i class='bx bx-money' ></i>
                                <div style={{fontSize: "10px", color:"red"}}>
                                    3.000.000 VNĐ
                                </div>
                        </div>
                        <div className="Element__container__con">
                            <Button variant="info" style={{height: "30px", width:"100px", alignItems:"center" , marginRight:"3%"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Edit
                                    </div>
                            </Button>
                            <Button variant="danger" style={{height: "30px", width:"100px", alignItems:"center"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Delete
                                    </div>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="Element__page__container">
                    <div className="Element__container_content">
                        <div className="Element__container__con">
                            <i class='bx bxs-home' ></i>
                            <div style={{fontWeight:"bold" ,fontSize: "18px"}}> 
                                5
                            </div>
                        </div>
                        
                        <div className="Element__container__button">
                            <Button variant="primary" style={{height: "30px", width:"100px", alignItems:"center"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Add customer
                                    </div>
                            </Button>
                        </div>
                        <div className="Element__container__con">
                            <i class='bx bxs-user' ></i>
                        </div>
                        <div className="Element__container__details">
                            <i class='bx bx-money' ></i>
                                <div style={{fontSize: "10px", color:"red"}}>
                                    3.000.000 VNĐ
                                </div>
                        </div>
                        <div className="Element__container__con">
                            <Button variant="info" style={{height: "30px", width:"100px", alignItems:"center" , marginRight:"3%"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Edit
                                    </div>
                            </Button>
                            <Button variant="danger" style={{height: "30px", width:"100px", alignItems:"center"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Delete
                                    </div>
                            </Button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default RoomElement;

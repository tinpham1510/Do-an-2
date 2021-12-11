import React from 'react';
import './Room.css'
import Element from '../Rooms/Room_element/Room_element';
import { Row, Form, Col, Button, Tabs, Tab   } from 'react-bootstrap';
const Room = () => {
    return (
        <div>
            <div className="room_page">
                <div className="room_content">
                    Phòng
                </div>
                <div className="room_page_container">
                    
                    <div className="room__container_top">
                    <Form style={{paddingBottom:"1%"}}>
                    <Row className="align-items-center">
                    <Col sm={3}>
                        <Form.Group controlId="formGridState">
                                <Form.Select defaultValue="Choose..." >
                                    <option>-Tình trạng phòng-</option>
                                    <option>Trống</option>
                                    <option>Đã thuê</option>
                                </Form.Select>
                                
                            
                            </Form.Group>
                            </Col>
                            <Col sm={3}>
                            <Form.Group controlId="formGridState">
                            <Form.Select defaultValue="Choose..." >
                                <option>-Tình trạng phí-</option>
                                <option>Chưa trả phí</option>
                            </Form.Select>
                            </Form.Group>
                            </Col>
                            <Col sm={3}>
                            <Form.Group controlId="formGridZip">
                            <Form.Control placeholder="Phòng..." />
                            </Form.Group>
                            </Col>
                            <Col xs="auto">
                            
                            <Button variant="primary" type="submit" >
                                Tìm kiếm
                            </Button>
                            </Col>
                        </Row>
                        </Form>
                        <div className="room_page__text">
                                <div className="room__text_left">
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
                                <div className="room__text_right">
                                <Button variant="warning">
                                    Chi tiết phòng
                                </Button>
                                 <Button>
                                    Phòng
                                </Button>
                                <Button variant="info">
                                    Khách hàng
                                </Button>
                                
                                <Button variant= "success">
                                    Thêm tầng
                                </Button>
                                </div>
                                
                        </div>

                        
                    </div>
                    <div className="room__container_bottom">
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                        >
                        <Tab eventKey="home" title="Tầng 1">
                            <div>
                                <Element/>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Tầng 2">
                            <div>
                                <Element/>
                            </div>
                        </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Room;

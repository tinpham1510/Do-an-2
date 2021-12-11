import Button from  'react-bootstrap/Button';
import React from 'react';
import './Service.css'
import Table from './Table'
const Service = () => {
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
                        <Button variant="success">
                            Thêm dịch vụ
                        </Button>
                        <Button variant="danger">
                            Xóa dịch vụ
                        </Button>
                    </div>
                </div>
                <div className="Service__container_bottom">
                   <Table></Table>
                </div>
            </div>
        </div>
    );
}

export default Service;

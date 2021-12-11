import React from 'react';
import './User.css'
const User = () => {
    return (
        <div className="User__page">
            <div className="User__page_content">
                Khách hàng
                </div> 
            <div className="User__page_container">
                 <table className="table table-bordered">
                <thead>
                        <tr>
                            <th>Phòng số</th>
                            <th>Khu vực</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Ngày bắt đầu</th>
                            <th>Tiền phòng</th>
                            <th>Đặt cọc</th>
                            <th>Chi tiết</th>
                        </tr>
                </thead>
                <tbody>
                            <tr>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td>Hello</td>
                                <td><button className="btn btn-info mr-2">
                                                            Xem chi tiết
                                                        </button></td>

                            </tr>
                        </tbody>
            </table>
            </div>
           
        </div>
    );
}

export default User;

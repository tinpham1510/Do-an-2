import React from 'react';
import { Toast, ToastContainer, ToastBody, ToastHeader , Row, Col} from 'react-bootstrap'
const ToastUpdate = ({showToast, setToast}) => {
    return (
        <>
        <div>
       <Row>
      <Col xs={6}>
          <ToastContainer position='top-end' style={{transform: 'translate(calc(35% + 32px), 40%)'}}>
          <Toast animation={true} bg='success'  onClose={() => setToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Thông báo</strong>
          </Toast.Header>
          <Toast.Body style={{color:"white"}}>Đã cập nhật thành công</Toast.Body>
        </Toast>
          </ToastContainer>
      </Col>
    </Row>
      </div>
        </>
    );
}

export default ToastUpdate;

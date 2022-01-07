
import React, { useContext, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { postContext } from '../../contexts/PostContext';

const Listposts = ({show, setShow, detail, setDetail}) => {


    const {
        postState: {posts},
        getPosts,
        findPosts,
    } = useContext(postContext)

    useEffect(()=>{
        getPosts()
    },[posts])

    const HandleClose = () =>{
        setShow(false)
    }

    const choosePost = async postId =>{
        findPosts(postId)
        setDetail(true)
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
    size='lg'
    centered
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
                                <th>Phòng</th>
                                <th>Tầng</th>
                                <th>Chi tiết</th>
                            </tr>
                    </thead>
                    {posts!=null&&posts.map((info)=>(
                    <tbody>
                        { info.room!=null&&info.customer!=null?
                                <tr>
                                    <td>{info.customer.name}</td>
                                    <td>{info.room.name}</td>
                                    <td>{info.room.area}</td>
                                    <td>
                                        <Button onClick={choosePost.bind(this,info._id)} variant='info'>
                                            Chọn
                                        </Button>
                                    </td>
                                </tr>
                                :null
}
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

export default Listposts;

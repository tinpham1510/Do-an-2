import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { createTrue } from 'typescript';
import { RoomContext } from '../../../contexts/RoomsContext';
import Addrent from '../../AddRent/AddRent';
import RoomDetail from './Room__detail/Room__detail';
import axios from 'axios'
import { apiUrl } from '../../../contexts/constant';
import Loading from '../../Loading/Loading';
import { postContext } from '../../../contexts/PostContext';
import { TotalContext } from '../../../contexts/TotalContext';

const Actionbutton = ({_id, needButton, name}) => {
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] =useState(false);     
    const {
        roomState: {room},
        findRooms
    } = useContext(RoomContext)
    const {
        deletePosts
    } = useContext(postContext)
    
    const {
        deleteTotals
    } = useContext(TotalContext)
    const handleClick = async roomId =>{
       findRooms(roomId)
       setModal(true)
    }

    const ChooseRoom = async roomId =>{
        findRooms(roomId)
        setModal1(true)
    }
    
    const [loading, setLoading] = useState(false)
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

    useEffect(()=>{
        if(loading)
        {
            setTimeout(()=>{
                setLoading(false);
            },500)
        }
    })

    const PayBackRoom = async roomId =>{
        let update = {
            name: name,
            status: 'còn trống',
            valueElectric: 0,
            valueWater: 0
        }
        axios({
            method: "PUT",
            url: `${apiUrl}/rooms/${roomId}`,
            data: update,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
        })
        // find room id to get posts

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

        // update room
        axios({
            method: "GET",
            url: `${apiUrl}/totals/room${roomId}`,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
            withCredentials: true
        })
        .then(resp=>{
            deleteTotals(resp.data.totals[0]._id)
        })
        
        setLoading(true)
    }
    return (
        <>
        { loading? <Loading/>:
        <>
        {
            needButton&&info!=null&&info[0].status === 'còn trống'?
         <div style={{display: "flex"}}>
            <Button variant="primary" onClick={ChooseRoom.bind(this, _id)} style={{height: "30px", width:"100px", marginRight: "6px", alignItems:"center"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Thêm khách          
                                    </div>
                            </Button>
            <Button onClick={handleClick.bind(this, _id)} variant="dark" style={{height: "30px",fontSize: "12px", width:"100px", alignItems:"center"}}>
                Chi tiết
            </Button>
            <RoomDetail _id={_id} modal={modal} setModal={setModal} />
        </div>
        : info!=null&&info[0].status === 'Đang thuê'?
        <div style={{display: "flex"}}>
            <Button variant="secondary" onClick={PayBackRoom.bind(this,_id)} style={{height: "30px", width:"100px", marginRight: "6px", alignItems:"center"}}>
                                    <div style={{fontSize: "10px"}}>
                                        Trả phòng        
                                    </div>
                            </Button>
            <Button onClick={handleClick.bind(this, _id)} variant="dark" style={{height: "30px",fontSize: "12px", width:"100px", alignItems:"center"}}>
                Chi tiết
            </Button>
            <RoomDetail _id={_id} modal={modal} setModal={setModal} />
        </div>
        
        :
        <> 
        <button onClick={handleClick} className="btn btn-primary mr-2" style={{color: "white"}}>
                 Xem chi tiết
            </button>
            </>
             
}
        <Addrent _id={_id} modal={modal1} setModal={setModal1}/>
        </>
}
        </>
        
       
    );
}

export default Actionbutton;

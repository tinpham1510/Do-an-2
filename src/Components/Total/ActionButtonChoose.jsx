import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { TotalContext } from '../../contexts/TotalContext';
import Addbill from '../Bill/Addbill';

const Actionbuttonchoose = ({_id}) => {
   const [modal, setModal] = useState(false)
   const {
       findTotals
   } = useContext(TotalContext)

   const HandleChoose = totalId =>{
       findTotals(totalId)
       setModal(true)
   }
    return (
        <div>
            <Addbill modal={modal} setModal={setModal}/>
            <Button  variant="warning" onClick={HandleChoose.bind(this,_id)}  style={{height: "30px", width:"50px",marginRight:"3%",alignItems:"center"}}>
                                <div style={{fontSize: "14px", color: 'white'}}>
                                    Thu
                                </div>
            </Button>   
        </div>
    );
}

export default Actionbuttonchoose;

import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const AlertTip = ({message, modal, setModal}) => {
    const HandleClose = ()=>{
        setModal(false)
    }

    useEffect(()=>{
        if(modal)
        {
            setTimeout(()=>{
                setModal(false);
            },3000)
         }
    })
    return (
        
        <div>
            { modal?
            <Alert variant='success' onClose={HandleClose} dismissible>
                <div style={{color: '#275E66', fontSize: '18px', fontWeight: 'bold'}}>
                    {message}
                </div>
            </Alert>:null
        }
        </div>
    );
}

export default AlertTip;

import React,{useState} from 'react';
import {Button,Modal} from 'react-bootstrap'
import Form from './form'




export default function Example(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
        <Button variant="warning text-white" onClick={handleShow}>
          Add a new transaction
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
            <div className="container"><Form id={props.id}/></div>
       </Modal>
      </>
    );
  }
  
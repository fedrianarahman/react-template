import React from 'react'
import { Modal, Button, Row, Form } from 'react-bootstrap';
import { CInputGroupText,CInputGroup,CFormInput } from '@coreui/react';
import CurrencyInput from 'react-currency-input-field';
const ModalProfile = (props) => {
  return (
  <>
    
    <Modal show={props.show} onHide={props.onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
         <Modal.Header closeButton>
            <Modal.Title >{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Row>
                    <>
                    <Form.Group className='col col-md-6'>
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type='text' name='nama' required  defaultValue={props.nama} readOnly/>
                    </Form.Group>
                    <div className='col col-md-6 mt-4'>
                    <CInputGroup className='mt-2'>
                    <CInputGroupText>Rp.</CInputGroupText>
                    <CurrencyInput
                        
                        id="input-example"
                        name="input-name"
                        placeholder="Please enter a number"
                        defaultValue={props.saldo}
                        decimalsLimit={2}
                       readOnly
                       style={{textAlign: "right", border : '1px solid grey'}}
                        />
                    <CInputGroupText>.00</CInputGroupText>
                    </CInputGroup>
                    </div>
                    <Form.Group className='col col-md-6'>
                        <Form.Label>Nomor Wa</Form.Label>
                        <Form.Control type='text' name='noWa' required  defaultValue={props.nomorWa} readOnly/>
                    </Form.Group>
                    </>
                </Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                   
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default ModalProfile
import React from 'react'
import { Modal, Form, Row, Button } from 'react-bootstrap';
const ModalTopUp = ({ show, onHide, modalTitle, noWhatsApp}) => {
  return (
    <Modal size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered show={show} onHide={onHide}>
        <Modal.Header closeButton>
                {modalTitle}
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <>
                        
                        <Form.Group className='col col-md-12'>
                            <Form.Label>Nominal</Form.Label>
                            <Form.Control  name="nominal" placeholder="Nominal saldo"  required  />
                        </Form.Group>
                        <Form.Group className='col col-md-12'>
                        <Form.Label>Keterangan</Form.Label>
                            <Form.Control  name="keterangan" placeholder="keterangan"  required  />
                        </Form.Group>
                        <Form.Group className='col col-md-12'>
                        <Form.Label>No WhatsApp</Form.Label>
                            <Form.Control  name="noWhatsApp" placeholder="Leave a comment here"  required   readOnly defaultValue={noWhatsApp}/>
                        </Form.Group>
                        </>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" type="submit" onClick={onHide}>
                    close
                </Button>
                <Button  style={{ marginTop: "5px", background: "#379237", border: "none" }}>Top up</Button>
            </Modal.Footer>     
    </Modal>
  )
}

export default ModalTopUp
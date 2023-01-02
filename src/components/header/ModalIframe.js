import React from 'react'
import { Modal, Form, Row, Button } from 'react-bootstrap';
import Iframe from 'react-iframe';
const ModalIframe = ({show, onHide}) => {
  return (
    <Modal size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered show={show} onHide={onHide}>
        <Modal.Header closeButton>
                Cek IFrame
        </Modal.Header>
        <Modal.Body>
        <Iframe url="https://i.pinimg.com/564x/2a/e2/c6/2ae2c6dcc91d9057f5e05e2114237a78.jpg"
        width="100%"
        height="500px"
        id=""
        frameBorder={3}
        className=""
        display="inline"
        scrolling='no'
        position="relative"
        styles={{border : "1px solid green"}}/>
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

export default ModalIframe
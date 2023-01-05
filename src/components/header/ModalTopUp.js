import React, { useState } from 'react'
import { Modal, Form, Row, Button } from 'react-bootstrap';

const ModalTopUp = (props) => {
    
    const [data, setData] = useState({
        nominal : "",
        keterangan : "",
        nomorWa : "",
        uid_Sekolah : 25,
        show : false
    })

   const  handleChange = (event) =>{
        event.preventDefault();
        let nama = event.target.name
        let value = event.target.value;
        let form = { ...this.state.form }
        form[nama] = value
        this.setState({ form })
    }
    
    const handleSubmit2 = ()=>{
        // e.preventDefault();
        // alert("cek");
        props.handleSubmit()
    }
  return (
    <>
    <Modal size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
                {props.modalTitle}
            </Modal.Header>
            <Modal.Body>
                <Form >
                {/* <ModalIframe show={data.show} onHide={handleClose} /> */}
                    <Row>
                        <>
                        
                        <Form.Group className='col col-md-12'>
                            <Form.Label>Nominal</Form.Label>
                            <Form.Control  name="nominal" placeholder="Nominal saldo"   required  value={props.nominal}/>
                        </Form.Group>
                        {/* <Form.Group className='col col-md-12'>
                        <Form.Label>Keterangan</Form.Label>
                            <Form.Control  name="keterangan" placeholder="keterangan"  required  />
                        </Form.Group> */}
                        <Form.Group className='col col-md-12'>
                        <Form.Label>No WhatsApp</Form.Label>
                            <Form.Control  name="noWhatsApp" placeholder="Leave a comment here"  required   readOnly value={props.nomorWa} />
                        </Form.Group>
                        </>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" type="submit" onClick={props.onHide}>
                    close
                </Button>
                <Button onClick={handleSubmit2} style={{ marginTop: "5px", background: "#379237", border: "none" }}>Top up</Button>
            </Modal.Footer>     
    </Modal>

    </>
  )
}

export default ModalTopUp
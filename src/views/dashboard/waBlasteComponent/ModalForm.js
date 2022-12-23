import React, { useState } from 'react'
import { Modal, Form, Row, Button } from 'react-bootstrap';
const ModalForm = ({ show, onHide, modalTitle, }) => {

    const [inputText, setInputTex] = useState({
        input : "",
        
    })

    const handleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        setInputTex({...inputText, [name] : value});
    }

    // console.log("line 16", inputText.input);

    // let string = "/* ANIMATION START */ new string should be added here /* ANIMATION END */";
    let string = "";
    string = "_"+ inputText.input+"_"
    let regex = /(\/\*[\w\s]+\*\/)([\w\s]+)(\/\*[\w\s]+\*\/)/g; 
    regex = /(_)([\w\s]+)(_)/i
    string = string.replace(regex, "<b>$2</b>");
    // console.log("line 23",string);
    // console.log("%c" + "Line 24 !", "color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");
    // console.log("%c" +  inputText.input, "color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");
    // var string = "assslamu'alaikum {namaSiswa} {namaSiswa}";
    // regex = /{namaSiswa}/g
    // string = string.replace(regex, "Rahman Fedriana");
    // console.log("line 28",string);

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
                        
                        <Form.Group className='col col-md-8'>
                            <Form.Label>Input</Form.Label>
                            <Form.Control as="textarea" name="input" placeholder="Leave a comment here" style={{ height: '100px', fontSize: '12px' }} required onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className='col col-md-4'>
                            <Form.Label>Data</Form.Label>
                            <Form.Control as="textarea" defaultValue={"${namaSiswa}\n${tagihan}"}
                                        style={{ height: '100px', fontSize: '12px' }}
                                        required readOnly/>
                        </Form.Group>
                        <Form.Group className='col col-md-12'>
                            <Form.Label>Output</Form.Label>
                            <Form.Control as="textarea" defaultValue={inputText.input} placeholder="Leave a comment here"
                                        style={{ height: '100px', fontSize: '12px' }}
                                        required readOnly/>
                        </Form.Group>
                        </>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" >Save</Button>
                <Button variant="warning" type="submit" onClick={onHide}>
                    close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalForm
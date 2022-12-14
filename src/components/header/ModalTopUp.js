import React, { Component, useState } from 'react'
import { Modal, Form, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode';
// class ModalTopUp extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             form: { ...this.props.data}
//         }
//     }

//     handleChange = (event) =>{
//     let name = event.target.name;
//     let value = event.target.value;
//     let form = {...this.state.form}
//     form[name] = value
//         this.setState({ form })
//     }

//     handleSubmit2 = () =>{
//         // console.log("line 24", this.state.form);
//         // this.props.handleSubmit()
//         const param = [
//             "key=abahKadabra",
//             `nominal=${params.nominal}`,
//             'keterangan=TopUp Saldo',
//             `nomor=${whatsAppInfo.whatsappNumber}`,
//             `uid_sekolah=${25}`]
//     }
//     render() {
//         return (
//             <Modal size="md"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered show={this.props.show} onHide={this.props.onHide}>
//                 <Modal.Header closeButton>
//                     {this.props.modalTitle}
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form >
//                         <Row>
//                             <>

//                                 <Form.Group className='col col-md-12'>
//                                     <Form.Label>Nominal</Form.Label>
//                                     <Form.Control name="nominal" placeholder="Nominal saldo" required onChange={this.handleChange} defaultValue={this.state.form.nominal}/>
//                                 </Form.Group>
//                             </>
//                         </Row>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="warning" type="submit" onClick={this.props.onHide}>
//                         close
//                     </Button>
//                     <Button onClick={this.handleSubmit2} style={{ marginTop: "5px", background: "#379237", border: "none" }}>Top up</Button>
//                 </Modal.Footer>
//             </Modal>

//         )
//     }
// }

const ModalTopUp = (props) => {

    const [params, setParams] = useState({
        nominal: "",
    });

    const whatsAppInfo = useSelector((state) => state.whatsAppInfo)
    const token = jwtDecode(useSelector((state => state.token)));

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setParams({ ...params, [name]: value })
    }

    const handleSubmit2 = () => {
        // console.log("line 80", param);
        if (!params.nominal || params.nominal <=25000) {
            alert("silahkan masukan nilai")
            return false
        }
        
        const param = [
            "key=abahKadabra",
            `nominal=${params.nominal}`,
            'keterangan=TopUp Saldo',
            `nomor=${whatsAppInfo.whatsappNumber}`,
            `uid_sekolah=${25}`,
            `clientID=${token.id}`
        ]

        const url =  `https://siswa.smartsystem.co.id/#/paymentv2?`+param.join('&');

        console.log("line 96", url);
        props.handleSubmit(url)
    }
    return (
        <Modal size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                {props.modalTitle}
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Row>
                        <>

                            <Form.Group className='col col-md-12'>
                                <Form.Label>Nominal</Form.Label>
                                <Form.Control name="nominal" placeholder="Nominal saldo" required={true} onChange={handleChange} autoComplete="off" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}/>
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
    )
}

export default ModalTopUp
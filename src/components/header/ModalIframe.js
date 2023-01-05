import React, { useEffect } from 'react'
import { Modal, Form, Row, Button } from 'react-bootstrap';
import Iframe from 'react-iframe';
const ModalIframe = ({ show, onHide }) => {
  // const url  = `https://siswa.smartsystem.co.id/#/paymentv2?key=abahKadabra&nominal=300,000&keterangan=TopUp Saldo&nomor=082112531997&uid_sekolah=25`
  useEffect(() => {
    let myIframe = document.getElementById("myIframe");
    let url_string = "https://siswa.smartsystem.co.id/#/paymentv2?key=abahKadabra&nominal=300,000&keterangan=TopUp Saldo&nomor=082112531997&uid_sekolah=25";
    let width = "728";
    let height = "90";
    let geo = "uk";

    let adsURL = url_string + "?geo=" + geo + "&size=" + width + "x" + height;
    console.log(adsURL);
    myIframe.src = adsURL;
  })
  return (
    <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        Cek IFrame
      </Modal.Header>
      <Modal.Body>
        <Iframe url=""
          width="100%"
          height="500px"
          id="myIframe"
          frameBorder={3}
          className=""
          display="inline"
          scrolling='no'
          position="relative"
          styles={{ border: "1px solid green" }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" type="submit" onClick={onHide}>
          close
        </Button>
        <Button style={{ marginTop: "5px", background: "#379237", border: "none" }}>Top up</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalIframe
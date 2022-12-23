import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell,
} from '@coreui/react'
import Checkbox from './waBlasteComponent/Checkbox';
import { Catalogues } from './waBlasteComponent/MockName';
import { ApiService } from '../../ApiService/ApiService';
import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';
import ModalForm from './waBlasteComponent/ModalForm';
const WaBlaste = () => {
  
  const [params, setParams] = useState({
    tahunAjaranSekolah: "",
    kelas: "",
    nama: "",
  });

  const [dataTabel,setDataTabel] = useState([])
  const [tahunAjaran, setTahunAjaran] = useState([]);
  const [dataKelas, setDataKelas] = useState([]);
  // form checked
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  // const [list, setList] = useState([]);
  //  end form checked

  const [modal, setModal] = useState({
    show : false,
    modalTitle : "Pesan"
  });

  useEffect(() => {
    setDataTabel(dataTabel),
    fetchDataTahunAjaran(),
    fetchDataKelas()
  }, [dataTabel],[],[]);


  const handleSelectAll = (e,data) => {
    setIsCheckAll(!isCheckAll)
    for(let row of data){
      row.isChecked = !isCheckAll
    }
  };
  const ambilDataCheked = () => {
    let datatable = [ ...dataTabel].filter(o => o.isChecked)
    console.log("dat checked",datatable)
  }
  const handleClick = (e,data) => {
    data.isChecked = !data.isChecked
    console.log("dataSemua",dataTabel)
    let newData = [ ...dataTabel ]
    // setDataTabel([])
    setDataTabel(newData);
  };

  const fetchDataTahunAjaran = async ()=>{
    const tokenSS = window.sessionStorage.getItem("tokenSS");
    // const token = useSelector((token) => token.token)
    const tokenData = jwtDecode(tokenSS)
    // console.log("line 81", tokenData.user.uid_sekolah);
    

    
    const Localparams = {
      where : {"sekolah" : tokenData.user.uid_sekolah},
      limit : 1000,
      sort : "tahun_ajaran desc",
    }
    const getDataTahunAjaran = await ApiService.get('/tahunajaran', Localparams, tokenData.user.uid_sekolah);
    
    setTahunAjaran(getDataTahunAjaran.data.data)
  }

  const fetchDataKelas = async ()=>{
    const tokenSS = window.sessionStorage.getItem("tokenSS");
    // const token = useSelector((token) => token.token)
    const tokenData = jwtDecode(tokenSS)
    const Localparams = {
      sort : "nama_kelas asc",
      uid_sekolah : tokenData.id,
    }
    const getDataKelas =   await ApiService.get(`/kelas`,Localparams, tokenData.id);
    setDataKelas(getDataKelas.data.data);
  }

  const handleChange = (event) => {
    let nama = event.target.name;
    let value = event.target.value;
    
    setParams({...params, [nama] : value});
    // console.log("line 106", value);
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const tokenSS = window.sessionStorage.getItem("tokenSS");
    // const token = useSelector((token) => token.token)
    const tokenData = jwtDecode(tokenSS)

    // let tahun = params.tahunAjaranSekolah;
    // let fullname = params.nama;
    // let id_kelas = params.kelas;
    let where = {
      'a.tahun' : params.tahunAjaranSekolah
    }
    if(params.nama) where["b.fullname"] = {contains : params.nama}
    if(params.kelas) where["a.id_kelas"] = params.kelas

    let Params =  {where}
  

    const getDataSiswa = await ApiService.get(`/siswadss/kelastahunajaran`, Params,tokenData.user.uid_sekolah );
    console.log("line 103 wbalste", getDataSiswa.data.data);
    setDataTabel(getDataSiswa.data.data);
    dataTabel.isChecked = false
  }
  // console.log("line 97 wablaste", dataKelas);
  
  const handlePesan = ()=>{
    setModal({...modal, show : true });
  }
  const handleClose = ()=>{
    setModal({...modal, show : false});
  }
  return (
    <>
    <div>{(modal.show) ? <div><ModalForm show={modal.show} onHide={handleClose} modalTitle={modal.modalTitle}/></div>: ''}</div>
    <CCard style={{ border: "1px solid #FD841F" }}>
      <CCardHeader style={{ background: "#FD841F", color: "#fff", fontWeight: "bold", textAlign: "center" }}>
        Pilih Siswa
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit} id='wa-blaste-form'>
          <CRow>
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom04">Tahun Ajaran</CFormLabel>
              <CFormSelect id="validationCustom04" name='tahunAjaranSekolah' onChange={handleChange}>
                <option >Pilih...</option>
                {tahunAjaran.map((dataTahunAjaran)=><option value={dataTahunAjaran.tahun_ajaran}>{dataTahunAjaran.tahun_ajaran}</option>)}
              </CFormSelect>
              <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom04">Kelas</CFormLabel>
              <CFormSelect id="validationCustom04" name='kelas' onChange={handleChange}>
              <option >Pilih...</option>
                {dataKelas.map((satuDataKelas)=> <option value={satuDataKelas.id}>{satuDataKelas.nama_kelas}</option>)}
              </CFormSelect>
              <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="validationCustom05">Nama</CFormLabel>
              <CFormInput type="text" id="validationCustom05"  name='nama' onChange={handleChange} autoComplete="off" />
              <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
            </CCol>
          <CCol md={3}>
            <CButton color="primary" style={{ marginTop: "30px" }} type="submit">
              Submit form
            </CButton>
            {/* <CButton onClick={ambilDataCheked} >Tes checked</CButton> */}
            <CButton style={{marginTop : "30px", marginLeft : "10px", background : "#F6F54D", color : "#000", border : "none"}} onClick={handlePesan}>Pesan</CButton>
          </CCol>
          </CRow>
        </CForm>
        <CTable style={{ marginTop: "30px" }} className='table-stripped'>
          <CTableHead style={{ background: "#FFBF00", }}>
            <CTableRow>
            <CTableHeaderCell scope="col">No</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
              <CTableHeaderCell scope="col">Kelas</CTableHeaderCell>
              <CTableHeaderCell scope="col"><Checkbox type="checkbox"
                name="selectAll"
                id="selectAll"
                handleClick={handleSelectAll}
                data={dataTabel}
                isChecked={isCheckAll} /></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {/* <CTableRow>
              <CTableDataCell>Dumy</CTableDataCell>
              <CTableDataCell>Dumy</CTableDataCell>
              <CTableDataCell>{catalog}</CTableDataCell>
              <Checkbox key={data.id} type="checkbox"  id={data.id} handleClick={handleClick} isChecked={isCheck.includes(data.id)}/>
            </CTableRow> */}
            {dataTabel.map((data, index)=>{
              return(
                <>
                <CTableRow key={data.id}>
                <CTableDataCell>{index +1}</CTableDataCell>
                <CTableDataCell>{data.fullname}</CTableDataCell>
                <CTableDataCell>{data.nama_kelas}</CTableDataCell>
                <CTableDataCell>
                  <Checkbox key={data.id} type="checkbox" 
                    name={data.fullname}  
                    id={data.id} 
                    handleClick={handleClick} 
                    data={data}
                    isChecked={data.isChecked} />
                  </CTableDataCell>
              </CTableRow>
              </>
              )
            } )}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
    </>
  )
}

export default WaBlaste
import React, { Component } from 'react'
import '../App.css'
import { CFormControl,CForm,CFormSelect,CButton,CFormLabel,CCol,CRow} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
// import DatePicker from "react-datepicker";
import { Redirect } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class AboutPage extends Component {
  constructor(){
    super();
    
    this.state={
      
      date: new Date(),
  
      selectfile: null,
      stud_id:"",
      stud_firstname: "",
      stud_lastname: "",
      stud_grade: "",
      stud_gender: "",
      stud_email: "",
      stud_mobile: "",
      stud_address: "",
      studentlist: [],
      buttonlicked: false,
      upload_status: false,
      dob :''
    
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);

    this.handleGrade = this.handleGrade.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleid = this.handleid.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleDate=this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
   
  handleDate =(e)=> {
    this.setState({dob:e.target.value})
    console.log(this.state.dob)
    // const data = value;

    // const d = data.getDate();
    // const m = data.getMonth();
    // const y = data.getFullYear();
    // const dob = [d,m,y].join('/');
    // console.log(data, typeof dob)
    // this.setState({date: {...date} })
    // console.log(this.state.date)
  } 
  handleid = (e) => {
    this.setState({ stud_id: e.target.value });
  };
  handleFirstName = (e) => { 
    this.setState({ stud_firstname: e.target.value }); 
  };
  handleSurnameChange = (e) => {
    this.setState({ stud_lastname: e.target.value });
  };
  handleGrade = (e) => {
    this.setState({ stud_grade: e.target.value });
  };
  handleGender = (e) => {
    this.setState({ stud_gender: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ stud_email: e.target.value });
  };
  handleMobile = (e) => {
    this.setState({ stud_mobile: e.target.value });
    
    console.log(this.state.stud_mobile)
  };
  handleAddress = (e) => {
    this.setState({ stud_address: e.target.value });
  };

  fileSelect = (e) => {
    this.setState({ selectfile: e.target.files[0] });
    console.log(e.target.files[0]);
  };
  handleSubmit = () => {
    // alert('button clickeked');
    if(this.state.stud_firstname == ''){
      alert('Enter Valid FirstName');
      this.setState({stud_firstname:''})
    }
    if(this.state.stud_lastname == ''){
      alert('Enter Valid SurName')
      this.setState({stud_lastname:''})

    }
    if(this.state.stud_mobile.length > 10 || this.state.stud_mobile.length < 10){
      alert('Enter Valid Mobile number');
      this.setState({stud_mobile:''})
    }
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    if(this.state.stud_email.match(regex)){
      // alert(' Valid email');
      console.log(this.state.stud_email)
    }else{
      alert('enter valid email');
      this.setState({stud_email:''})
    }
    if (this.state.selectfile === null) {
      alert('Image Not Selected')
      this.setState({selectfile:null})
    }
    
    const data = new FormData();
    data.append("file", this.state.selectfile);

    const studid = new FormData();
    data.append("stud_firstname", this.state.stud_firstname);
    data.append("stud_lastname", this.state.stud_lastname);
    data.append("stud_grade", this.state.stud_grade);
    data.append("stud_DOB", this.state.dob);
    data.append("stud_gender", this.state.stud_gender);
    data.append("stud_mobile", this.state.stud_mobile);
    data.append("stud_email", this.state.stud_email);
    data.append("stud_address", this.state.stud_address);

    if(data !== null && studid !== ''){
    axios
      .post("http://localhost:5000/adddata",data,studid)
      .then((res) => {
        console.log(res.statusText);
      }).catch(err=> console.log(err))
      this.setState({ upload_status: true });

    }
    else{
      alert('All field must be filled inpu cannot be null')
    }  


  }
    render() {
      const {date} =this.state
      if (this.state.upload_status === true) {
        return <Redirect to="/" />;
      }
        return (
            <div>
                <div className='box2'>
                <CRow>
                {/* <CCol xs>
    <label>studid :</label>
    <CFormControl type='text' onChange={this.handleid} name='stud_id' placeholder="First name" aria-label="First name" />
  </CCol> */}
  <CCol xs>
    <label>First Name :</label>
    <CFormControl type='text' onChange={this.handleFirstName} name='stud_firstname' placeholder="First name" aria-label="First name" />
  </CCol>
  <CCol xs>
    <label>Last Name :</label>
    <CFormControl type='text' onChange={this.handleSurnameChange} name='stud_lastname' placeholder="Last name" aria-label="Last name" />
  </CCol>
</CRow>
<br/>

<CForm className="row g-3">
<CCol md="6">
    <CFormLabel htmlFor="inputState">Grade</CFormLabel>
    <CFormSelect name='stud_grade' id="inputState" onChange={this.handleGrade} >
      <option>Choose...</option>
      <option>A+</option>
      <option>A</option>
      <option>B+</option>
      <option>B</option>


    </CFormSelect>
  </CCol>
  <CCol md="6">
    <CFormLabel htmlFor="inputState">Gender</CFormLabel>
    <CFormSelect name='stud_gender' id="inputState" onChange={this.handleGender}>
      <option>Choose...</option>
      <option>Male</option>
      <option>Female</option>
      <option>Transgender</option>

    </CFormSelect>
  </CCol>
  <CCol md="6">
    <CFormLabel htmlFor="mobile">Mobile No:</CFormLabel>
  <CFormControl type='text' name='stud_mobile' onChange={this.handleMobile} id="mobile" />
  </CCol>  
  <br/>
  <br/>
  <CCol md="6">
    <CFormLabel htmlFor="inputEmail4">Date Of Birth :</CFormLabel><br/>
    <CFormControl type='text' name='stud_dob' onChange={this.handleDate} id="dob" />

    {/* <DatePicker 
    selected={date} 
    onChange={this.handleDate} 
    // value={date} 
    dateFormat='dd/MM/yyyy'
    showMonthDropdown
    showYearDropdown
    name='stud_dob'
    /> */}
  </CCol>
  <CCol xs="12">
    <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
    <CFormControl type='text' name='stud_address' onChange={this.handleAddress} placeholder="1234 Main St" />
  </CCol>
  
  <CCol md="6">
    <CFormLabel htmlFor="inputEmail4">Email</CFormLabel>
    <CFormControl type="text" name='stud_email' onChange={this.handleEmail} id="inputEmail4" />
  </CCol><br/>
 <CCol xs="6">
 <CFormControl type='file' name='file' id="file" onChange={this.fileSelect} />
  </CCol>
  <CCol xs="12">
    <CButton  onClick={this.handleSubmit}>Submit</CButton>
  </CCol>
</CForm>
                </div>
            </div>
        )
    }
}

export default AboutPage
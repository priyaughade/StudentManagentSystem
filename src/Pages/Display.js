import React, { Component } from "react";
import "../App.css";
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class View extends Component {
  constructor() {
    super();
    this.state={studentlist:[],back:false}
    this.handleClick=this.handleClick.bind(this)
  }
  componentDidMount() {
    axios.get("http://localhost:5000/manage_stud").then(res=>{
      console.log(res.data)
      this.setState({ studentlist: [...res.data] }); //here we used rest operator which stored mysql data into stuent list
      this.setState({});
    })
  }
  handleClick = () =>{
    this.setState({back:true})
  }

  render() {
    const { studentlist} = this.state
    console.log(this.props.location.state,studentlist)

    // if (this.state.back === true) {
    //   return <Redirect to="/"  />;
    // }
    return (
      <div>
        <p className="box">
        <Link connect to="/" ><button>Back</button></Link>
        <br/>
        <br/>
          <ul>
            {studentlist.map((student)=>
            student.stud_id === this.props.location.state.viewProps  
            ?<li> <b>Student Information</b><br/>
                  <br/>
                  <strong> First Name :</strong>{student.stud_firstname}<br/>
                  <br/>
                  <strong> Last Name :</strong>{student.stud_lastname}<br/>
                  <br/>
                  <strong>Grade :</strong>{student.stud_grade}<br/>
                  <br/>
                  <strong>Gender :</strong>{student.stud_gender}<br/>
                  <br/>
                  <strong>Mobile :</strong>{student.stud_mobile}<br/>
                  <br/>
                  <strong>Email:</strong>{student.stud_email}<br/>
                  <br/>
                  <strong>Dob :</strong>{student.stud_DOB}<br/>
                  <br/>
                  <strong>Profile Photo:</strong><br/>
                  <img style={{width:'100px',height:'100px'}} src={`data:image/Jpeg;base64,${ new Buffer.from(student.stud_image.data).toString("ascii")}`} />
                
                  <br/>
            </li>
              
              
            :''
            )}
          </ul>
          {/* <ul>
            {}
            <li>
              <strong>Id: {this.props.location.state.stud_id}</strong>
            </li>
            <li>
              <strong>FirstName: {this.props.location.state.firstname}</strong>
            </li>
            <li>
              <strong>
                lastname: {this.props.location.state.stud_lastname}
              </strong>
            </li>
            <li>
              <strong>Grade: {this.props.location.state.stud_grade}</strong>
            </li>
            <li>
              <strong>DOB: {this.props.location.state.stud_DOB}</strong>
            </li>
            <li>
              <strong>Gender: {this.props.location.state.stud_gender}</strong>
            </li>
            <li>
              <strong>email: {this.props.location.state.stud_email}</strong>
            </li>
            <li>
              <strong>Mobile: {this.props.location.state.stud_mobile}</strong>
            </li>
            <li>
              <strong>Address: {this.props.location.state.stud_address}</strong>
            </li>
             <li><img style={{width:'100px',height:'100px'}} src={`data:image/Jpeg;base64,${ new Buffer.from(this.props.location.state.stud_image.data).toString("ascii")}`} /></li> 
          </ul> */}
        </p>
      </div>
    );
  }
}

export default View;

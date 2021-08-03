import React, { Component } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Link } from "react-router-dom";
// import Manage from './Manage';
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studId: "",
      stud_id: "",
      stud_firstname: "",
      stud_lastname: "",
      stud_grade: "",
      stud_dob: "",
      stud_gender: "",
      stud_email: "",
      stud_mobile: "",
      stud_address: "",
      view: false,
      studentlist: [],
      stud_image: null,
      stud_imageURL: null,
      file: false,
      // image :{},action : false,EditData : false,stud_status:'',
      buttonlicked: false,
      deactivate: false,
    };

    this.handleid = this.handleid.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleGrade = this.handleGrade.bind(this);
    this.handleDOB = this.handleDOB.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);

    // this.handleEditSubmit = this.handleEditSubmit.bind(this)
    // this.handleManage= this.handleManage.bind(this)
    // this.handleRoute = this.handleRoute.bind(this)
    // this.handleDeactivate = this.handleDeactivate.bind(this)
  }
  // ****************************** Add Section **********************************************
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
  handleDOB = (e) => {
    this.setState({ stud_dob: e.target.value });
  };
  handleGender = (e) => {
    this.setState({ stud_gender: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ stud_email: e.target.value });
  };
  handleMobile = (e) => {
    this.setState({ stud_mobile: e.target.value });
  };
  handleAddress = (e) => {
    this.setState({ stud_address: e.target.value });
  };
  handleFile = (e) => {
    if (e.target.files[0])
      // this.setState({ stud_image: e.target.files[0].buffer});
      this.setState({ stud_image: e.target.files[0] });
  };
  handleAddStudent = () => {
    this.setState({ action: true });
  };
  handleFileSelect = () => {
    this.setState({ file: true });
  };

  // ************************************** Get data from database ***************************************

  componentDidMount() {
    axios.get("http://localhost:5000/").then((res) => {
      console.log("inside component did mount");
      console.log(res.data);
      // console.log(this.state.studentlist= [...res.data]);
      this.setState({ studentlist: [...res.data] }); //here we used rest operator which stored mysql data into stuent list
      console.log(this.state.studentlist);
    });
    this.setState({});
    // window.location.reload()
  }

  handleView(student) {
    axios
      .post("http://localhost:5000/view", {
        studid: student.stud_id,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    // console.log(student.stud_id);

    this.setState({ View: true });
    this.setState({
      stud_id: student.stud_id,
      stud_firstname: student.stud_firstname,
      stud_lastname: student.stud_lastname,
      stud_grade: student.stud_grade,
      stud_dob: student.stud_DOB,
      stud_gender: student.stud_gender,
      stud_email: student.stud_email,
      stud_mobile: student.stud_mobile,
      stud_address: student.stud_address,
      // stud_image: student.stud_image
    });
  }

  //  **********************************************Edit section *******************************************

  handleEdit(student) {
    // console.log(student.stud_image);
    this.setState({
      stud_id: student.stud_id,
      stud_firstname: student.stud_firstname,
      stud_lastname: student.stud_lastname,
      stud_grade: student.stud_grade,
      stud_dob: student.stud_DOB,
      stud_gender: student.stud_gender,
      stud_email: student.stud_email,
      stud_mobile: student.stud_mobile,
      stud_address: student.stud_address,
      stud_image: student.stud_image
    });
    this.setState({ EditData: true });
  }
  handleEditSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", this.state.stud_image);

    const studid = new FormData();
    data.append("stud_id", this.state.stud_id);
    data.append("stud_firstname", this.state.stud_firstname);
    data.append("stud_lastname", this.state.stud_lastname);
    data.append("stud_grade", this.state.stud_grade);
    data.append("stud_DOB", this.state.stud_dob);
    data.append("stud_gender", this.state.stud_gender);
    data.append("stud_mobile", this.state.stud_mobile);
    data.append("stud_email", this.state.stud_email);
    data.append("stud_address", this.state.stud_address);

    axios.post("http://localhost:5000/editdata", data, studid).then((res) => {
      console.log(res.statusText);
    });
    this.setState({ upload_status: true });
  };

  handleDeactivate(student) {
    axios
      .post("http://localhost:5000/deactivate", {
        studid: student.stud_id,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    this.setState({ deactivate: true });
  }

  render() {
    const {
      file,
      stud_imageURL,
      stud_image,
      studentlist,
      stud_id,
      stud_firstname,
      stud_lastname,
      stud_grade,
      stud_gender,
      stud_mobile,
      stud_status,
      stud_dob,
      stud_email,
      stud_address,
      EditData,
    } = this.state;
    if (this.state.action === true) {
      return <Redirect to="/manage" />;
    }
    if (this.state.upload_status === true) {
      return <Redirect to="/" />;
    }
    if (this.state.deactivate === true) {
      return <Redirect to="/" />;
    }
    if (this.state.View === true) {
      return (
        <Redirect
          to={{
            pathname: "/view",
            state: {
              stud_id: this.state.stud_id,
              // stud_firstname: this.state.stud_firstname,
              // stud_lastname: this.state.stud_lastname,
              // stud_grade: this.state.stud_grade,
              // stud_DOB: this.state.stud_dob,
              // stud_gender: this.state.stud_gender,
              // stud_email: this.state.stud_email,
              // stud_mobile: this.state.stud_mobile,
              // stud_address: this.state.stud_address,
              //  stud_image: this.state.image
            },
          }}
        />
      );
    }
    return (
      <div>
        <div>
          <h3 className="text-center">Student management system</h3>
          <Table classname="stripped borderd hover ">
            <thead>
              <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>lastname</th>
                {/* <th>grade</th>
                   <th>dob</th>
                   <th>gender</th>
                   <th >mail</th>
                   <th>phone</th>
                   <th >address</th>  */}
                <th>Image</th>
                <th>operation</th>
              </tr>
            </thead>
            <tbody>
              {studentlist.map(
                (student) =>
                  student.stud_status === "active" ? ( // here we checked the status from database if it is active the only below table work
                    <tr key={student.stud_id}>
                      <td>{student.stud_id}</td>
                      <td>{student.stud_firstname}</td>
                      <td>{student.stud_lastname}</td>
                      {/* <td>{student.stud_grade}</td>
                        <td>{student.stud_DOB}</td>
                        <td>{student.stud_gender}</td>
                        <td>{student.stud_email}</td>
                        <td>{student.stud_mobile}</td>
                        <td>{student.stud_address}</td> */}
                      {/* <td>{ new Buffer.from(student.stud_image.data).toString('base64')} </td> */}

                      <td>
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={`data:image/Jpeg;base64,${new Buffer.from(
                            student.stud_image.data
                          ).toString("ascii")}`}
                          alt="Profile photo"
                        />
                      </td>

                      <td>
                        <Button
                          variant="warning"
                          onClick={() => this.handleEdit(student)}
                        >
                          Edit
                        </Button>
                        &emsp;
                        {/* <Link connect to="/ed" ><Button>Back</Button></Link> */}
                        {/* <td><Button variant='warning' onClick={()=> this.handleEditData(student) } > Edit </Button>&emsp; */}
                        &emsp;
                        {/* <Button variant='success' > Save </Button> &emsp; */}
                        <Button
                          variant="danger"
                          onClick={() => this.handleDeactivate(student)}
                        >
                          {" "}
                          Deactivate
                        </Button>
                        &emsp;
                        <Button
                          variant="success"
                          onClick={() => this.handleView(student)}
                        >
                          View{" "}
                        </Button>
                        &emsp;
                      </td>
                    </tr>
                  ) : (
                    ""
                  ) // else nothing will print
              )}
            </tbody>
          </Table>
          <br />
          {EditData ? ( // using action flage we are complate te action
            <div>
              <label>stud id : </label>
              <input
                type="text"
                placeholder="Enter id"
                value={stud_id}
                onChange={this.handleid}
              />{" "}
              &emsp;
              <label>First Name : </label>
              <input
                type="text"
                placeholder="Enter name"
                value={stud_firstname}
                name="stud_firstname"
                onChange={this.handleFirstName}
              />{" "}
              &emsp;
              <label>Last Name :</label>
              <input
                type="text"
                placeholder="Enter lastname"
                value={stud_lastname}
                name="stud_lastname"
                onChange={this.handleSurnameChange}
              />{" "}
              &emsp;
              <label>Grade: </label>
              <input
                type="text"
                placeholder="Enter Grade"
                value={stud_grade}
                name="stud_grade"
                onChange={this.handleGrade}
              />{" "}
              &emsp;
              <br />
              <br />
              <label> DOB :</label>
              <input
                type="text"
                placeholder="yyyy-mm-dd"
                value={stud_dob}
                name="stud_DOB"
                onChange={this.handleDOB}
              />{" "}
              &emsp;
              <label> Gender : </label>
              <input
                type="text"
                placeholder="enter gender"
                value={stud_gender}
                name="stud_gender"
                onChange={this.handleGender}
              />{" "}
              &emsp;
              <label> Email : </label>
              <input
                type="text"
                placeholder="adcd@gmail.com"
                value={stud_email}
                name="stud_email"
                onChange={this.handleEmail}
              />{" "}
              &emsp;
              <label>Mobile: </label>
              <input
                type="text"
                placeholder="Enter Mobile no"
                value={stud_mobile}
                name="stud_mobile"
                onChange={this.handleMobile}
              />{" "}
              &emsp;
              <br />
              <br />
              <label>Address :</label>
              <input
                type="text"
                placeholder="Enter address"
                value={stud_address}
                name="stud_address"
                onChange={this.handleAddress}
              />{" "}
              &emsp;
              <img  src={`data:image/Jpeg;base64,${new Buffer.from(stud_image.data).toString("ascii")}`} style={{ width: "100px", height: "100px" }} alt="Profile photo" />
              {/* [{ file 
    ? <div>    <input type='file' onChange= {this.handleFile} />
    </div>: (<div>
    <input type="image" placeholder='satus' src={`data:image/Jpeg;base64,${new Buffer.from(stud_image.data).toString("ascii")}`} style={{ width: "100px", height: "100px" }} name='stud_imageURL'  /> <br/> </div> )}]
      
    <br/>
    <br/>
    <Button onClick={this.handleFileSelect} >Change</Button> <br/>

    <br/> */}
              {/* <label>Change</label> */}
              <input type="file" onChange={this.handleFile} />
              &emsp;
              <Button onClick={this.handleEditSubmit}>Save</Button> <br />
              <br />
              {/* <button onClick={this.handleView} >View</button> */}
            </div>
          ) : (
            ""
          )}

          <Button onClick={this.handleAddStudent}> Add</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

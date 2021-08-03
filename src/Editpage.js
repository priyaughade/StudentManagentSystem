import React, { Component } from "react";
import { CButton } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import axios from "axios";
import "./App.css";

import { Redirect} from "react-router-dom";

class Editpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectfile: null,
      stud_id: "",
      stud_firstname: "",
      stud_lastname: "",
      stud_grade: "",
      stud_dob: "",
      stud_gender: "",
      stud_email: "",
      stud_mobile: "",
      stud_address: "",
      upload_status: false,
      studentlist: [],
      action: false,
      EditData: false,
      buttonlicked: false,
      value: this.props.location.state.stud_id,
    };
    this.fileSelect = this.fileSelect.bind(this);
    this.handleid = this.handleid.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);

    this.handleGrade = this.handleGrade.bind(this);
    this.handleDOB = this.handleDOB.bind(this);
    this.handleGender = this.handleGender.bind(this);

    this.handleEmail = this.handleEmail.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
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

  fileSelect = (e) => {
    this.setState({ selectfile: e.target.files[0] });
    console.log(e.target.files[0]);
  };
  handleClick = (e) => {
    const data = new FormData();
    data.append("file", this.state.selectfile);

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
  render() {
    console.log(this.props.location.state.stud_grade);
    if (this.state.upload_status === true) {
      return <Redirect to="/app" />;
    }
    return (
      <div>
        <div class="shadow  div1 text">
          <form>
            <div class="row">
              <div class="col">
                <label>Sr.no:</label>
                <input
                  type="text"
                  name="stud_id"
                  onChange={this.handleid}
                  placeholder={this.state.value}
                  class="form-control"
                />
              </div>
              <br />
              <br />
              <div class="col">
                <label>FirstName</label>
                <input
                  type="text"
                  placeholder={this.props.location.state.stud_firstname}
                  name="stud_firstname"
                  onChange={this.handleFirstName}
                  class="form-control"
                  // placeholder="First name"
                />
              </div>
              <div class="col">
                <label>LastName:</label>
                <input
                  type="text"
                  placeholder={this.props.location.state.stud_lastname}
                  name="stud_lastname"
                  onChange={this.handleSurnameChange}
                  class="form-control"
                  // placeholder="Last name"
                />
              </div>
            </div>{" "}
            <br />
            <br />
            <div class="row">
              <div class="col">
                <label>Grade</label>
                <input
                  type="text"
                  placeholder={this.props.location.state.stud_grade}
                  name="stud_grade"
                  onChange={this.handleGrade}
                  class="form-control"
                />
              </div>
              <div class="col">
                <label>Date</label>
                <input
                  type="text"
                  placeholder={this.props.location.state.stud_DOB}
                  name="stud_DOB"
                  onChange={this.handleDOB}
                  class="form-control"
                />
              </div>
            </div>
            <br />
            <br />
            <div class="row">
              <div class="col">
                <label>Gender</label>
                <input
                  type="text"
                  placeholder={this.props.location.state.stud_gender}
                  name="stud_gender"
                  onChange={this.handleGender}
                  class="form-control"
                />
              </div>
              <div class="col">
                <label>Mobile</label>
                <input
                  type="text"
                  placeholder={this.props.location.state.stud_mobile}
                  name="stud_mobile"
                  onChange={this.handleMobile}
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-xs-6">
                {" "}
                <br />
                <label for="inputEmail4">Email</label>
                <input
                  type="text"
                  placeholder={this.props.location.state.stud_email}
                  name="stud_email"
                  onChange={this.handleEmail}
                  class="form-control"
                  id="inputEmail4"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-xs-6">
                <label for="inputCity">Address</label>
                <input
                  type="text"
                  placeholder={this.props.location.state.stud_address}
                  name="stud_address"
                  onChange={this.handleAddress}
                  class="form-control"
                  id="inputCity"
                />
              </div>
            </div>
            <input type="file" name="file" onChange={this.fileSelect} />
            <br />
            <br />
            <CButton classname="btn btn-primary" onClick={this.handleClick}>
              Upload
            </CButton>
          </form>
          <br />
          <br /> <br />
        </div>
      </div>
    );
  }
}

export default Editpage;

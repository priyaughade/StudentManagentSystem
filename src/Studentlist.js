import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class Studentlist extends Component {
  constructor() {
    super();
    this.state = {
      studentlist: [],
    };
  }

  componentDidMount() {
    this.setState({});

    axios.get("http://localhost:5000/").then((res) => {
      console.log("inside component did mount");
      console.log(res.data);
      this.setState({ studentlist: [...res.data] }); //here we used rest operator which stored mysql data into stuent list
      // console.log(this.state.studentlist)
    });
  }

  render() {
    const { studentlist } = this.state;
    return (
      <div>
        <hr />
        <p
          style={{
            border: "1px solid black",
            width: "50%",
            height: "auto",
            marginLeft: "20%",
            boxShadow: "10px 10px 5px gray",
            marginTop: "2%",
            padding: "20px",
          }}
        >
          <h4>Total Student</h4>
          <ul>
            {studentlist.map((student) => (
              <li key={student.stud_id}>
                {student.stud_id} &emsp;
                {student.stud_firstname}&emsp;
                {student.stud_lastname}&emsp;
                {student.stud_status}
              </li>
            ))}
          </ul>
        </p>

        {/* <Table  >
      <thead>
        <tr>
          <th>ID</th>
          <th>FirstName</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {studentlist.map((student) => (
            student.stud_status == 'active' // here we checked the status from database if it is active the only below table work
              ?
              <tr key={student.stud_id}>
              <td>{student.stud_id}</td>
              <td>{student.stud_firstname}</td>
              <td><Button variant='success' onClick={()=> this.handleClick(student)} >View</Button> &emsp;
              </td>
            </tr>
          
          : '' // else nothing will print 
            ))}
      </tbody>
    </Table> */}
      </div>
    );
  }
}

export default Studentlist;

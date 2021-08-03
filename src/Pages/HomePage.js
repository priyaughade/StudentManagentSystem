import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CModalBody,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Button, Table } from "react-bootstrap";
import "../App.css";

function HomePage() {
  const [studentlist, setStudentlist] = useState([]);
  const [firstname, setStudFirstname] = useState("");
  const [lastname, setStudLastname] = useState("");
  const [gender, setStudGender] = useState("");
  const [grade, setStudGrade] = useState("");
  const [mobile, setStudMobile] = useState("");
  const [dob, setStudDob] = useState("");
  const [email, setStudEmail] = useState("");
  const [image, setStudImage] = useState(null);
  const [file, setFile] = useState(null);
  const [edit, setEdit] = useState(false);
  const [address, setAddress] = useState("");
  const [visible, setVisible] = useState(false);
  const [flage, setFlage] = useState(false);
  const [id, setStudId] = useState("");

  //Get data from source page
  useEffect(() => {
    axios
      .get("http://localhost:5000/manage_stud")
      .then((res) => {
        // console.log(res.data)
        setStudentlist(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },);

  const handleClick = (student) => {
    console.log(student);
    setVisible(true);
    setStudId(student.stud_id);
    setStudFirstname(student.stud_firstname);
    setStudLastname(student.stud_lastname);
    setStudGender(student.stud_gender);
    setStudGrade(student.stud_grade);
    setStudMobile(student.stud_mobile);
    setStudDob(student.stud_DOB);
    setStudEmail(student.stud_email);
    setStudImage(student.stud_image);
    setAddress(student.stud_address);
    setEdit(true);
    console.log(student);
  };
  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    setFlage(true);
    console.log(file);
  };
  //Post Data to server
  const handleClose = () => {
    if (flage == true) {
      const data = new FormData();
      data.append("file", file);

      const studid = new FormData();
      data.append("stud_id", id);
      data.append("stud_firstname", firstname);
      data.append("stud_lastname", lastname);
      data.append("stud_grade", grade);
      data.append("stud_DOB", dob);
      data.append("stud_gender", gender);
      data.append("stud_mobile", mobile);
      data.append("stud_email", email);
      data.append("stud_address", address);
      data.append("flage", flage);

      axios
        .post("http://localhost:5000/editstudent", data, studid)
        .then(() => {
          alert("successfully inserted");
        })
        .catch((err) => console.log(err));
      setFlage(false);
    } else {
      axios
        .post("http://localhost:5000/editstudent", {
          stud_id: id,
          stud_firstname: firstname,
          stud_lastname: lastname,
          stud_grade: grade,
          stud_gender: gender,
          stud_DOB: dob,
          stud_mobile: mobile,
          stud_email: email,
          stud_address: address,
        })
        .then(() => {
          alert("successfully inserted");
        })
        .catch((err) => console.log(err));
    }
    setVisible(false);
  };
  //Delete data of selected id
  const handleDelete = (student) => {
    console.log(student.stud_id);
    axios
      .post("http://localhost:5000/deletestudent", {
        stud_id: student.stud_id,
      })
      .then(() => {
        alert("successfully Deleted");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3 className="text-center">Student management system</h3>
      <CTable striped hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Id </CTableHeaderCell>
            <CTableHeaderCell scope="col">FirstName</CTableHeaderCell>
            <CTableHeaderCell scope="col">LastName</CTableHeaderCell>
            <CTableHeaderCell scope="col">Photo</CTableHeaderCell>
            <CTableHeaderCell scope="col">Operation</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {studentlist.map((student) =>
            student.stud_status === "active" ? (
              <CTableRow key={student.stud_id}>
                <CTableHeaderCell scope="row">
                  {student.stud_id}
                </CTableHeaderCell>
                <CTableDataCell>{student.stud_firstname} </CTableDataCell>
                <CTableDataCell>{student.stud_lastname} </CTableDataCell>
                <CTableDataCell>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={`data:image/Jpeg;base64,${new Buffer.from(
                      student.stud_image.data
                    ).toString("ascii")}`}
                  />
                </CTableDataCell>
                {/* <CTableDataCell><Link to={{pathname:`/edit:${student.stud_id}`,state:{editProps:student.stud_id}}}><CButton color='warning' >Edit</CButton></Link>&emsp; */}
                <CTableDataCell>
                  <CButton onClick={(e) => handleClick(student, e)}>
                    Edit
                  </CButton>
                  &emsp;
                  <Link
                    to={{
                      pathname: `/view:${student.stud_id}`,
                      state: { viewProps: student.stud_id },
                    }}
                  >
                    <CButton color="success">View</CButton>
                  </Link>
                  &emsp;
                  <CButton
                    color="danger"
                    onClick={(e) => handleDelete(student, e)}
                  >
                    Delete
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ) : (
              ""
            )
          )}
        </CTableBody>
      </CTable>
      {edit ? (
        <div>
          <CModal visible={visible} onDismiss={() => setVisible(false)}>
            <CModalHeader onDismiss={() => setVisible(false)}>
              <CModalTitle>EditDate</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div className="input">
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setStudFirstname(e.target.value)}
                  className="input"
                />
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setStudLastname(e.target.value)}
                  className="input"
                />
                <input
                  type="text"
                  value={gender}
                  onChange={(e) => setStudGender(e.target.value)}
                  className="input"
                />
                <input
                  type="text"
                  value={grade}
                  onChange={(e) => setStudGrade(e.target.value)}
                  className="input"
                />
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setStudDob(e.target.value)}
                  className="input"
                />
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setStudMobile(e.target.value)}
                  className="input"
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setStudEmail(e.target.value)}
                  className="input"
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="input"
                />

                <br />
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={`data:image/Jpeg;base64,${new Buffer.from(
                    image.data
                  ).toString("ascii")}`}
                />
                <br />
                <br />
                <input
                  type="file"
                  placeholder="select photo..."
                  onChange={handleUpload}
                />
              </div>
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
              <CButton color="primary" onClick={handleClose}>
                Save changes
              </CButton>
            </CModalFooter>
          </CModal>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default HomePage;

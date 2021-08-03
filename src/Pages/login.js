
import React, { Component } from 'react'

export class login extends Component {
    render() {
        return (
            <div>
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
        </div>
            
        )
    }
}

export default login



    
    
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { CNavbar,CContainer,
//   CNavLink,CNavbarBrand,
//   CNavItem,CNavbarNav} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
           
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <Link className="nav-link" to="/home"  >
                 Home
                </Link>
                <Link className="nav-link active" aria-current="page" to="/" >
                  Manage
                </Link>
                <Link className="nav-link" to="/about"  >
                 Add
                </Link>
                {/* <Link className="nav-link" to="/login"  >
                 Login
                </Link> */}
               
              </div>
            </div>
          </div>
        </nav>
       
      </div>
    );
  }
}

export default Navigation;

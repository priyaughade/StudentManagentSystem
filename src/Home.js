import React, { Component } from "react";
import { CButton } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Studentlist from "./Studentlist";
import Manage from "./Manage";
import Editpage from "./Editpage";
import App from "./App";
import View from "./View";
// import Ed from "./Ed";

import { BrowserRouter as Router, Link, Route ,Switch} from "react-router-dom";

class Home extends Component {

 

  render() {
    return (
      <div>
       
        <Router  >
        {/* <App/> */}
          <br />
          {/* <Link connect to="/listpage">
            <CButton color="success">Student List</CButton>
          </Link>  */}
           &emsp;
          {/* <Link connect to="/" onClick ={()=> window.location.reload() } >
            <CButton color="success">Home</CButton>
          </Link>{" "} */}
          &emsp;
          <Switch>
          <Route path="/listpage" component={Studentlist} />
          <Route path="/manage" component={Manage} />
          <Route path="/editpage" component={Editpage} />
          <Route path="/view" component={View} />
          {/* <Route path="/ed" component={Ed} /> */}

          <Route path="/" component={App}  />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;

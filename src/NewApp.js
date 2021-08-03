import React, { Component } from 'react'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Contact from './Pages/Contact'
import Navigation from './Component/Navigation.js'
import Display from './Pages/Display'
import "bootstrap/dist/css/bootstrap.min.css";
import {Route,Switch} from 'react-router-dom'
import "./App.css";



class NewApp extends Component {
    // constructor(props){
    //     super(props);
       

    // }
   
    render() {
       
        return (
            <div>
                <Navigation />
                <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/about' render={()=> <AboutPage  name='rose'/> } />
                <Route exact path='/home' component={Contact} />
                <Route exact path={`/edit:${this.props.stud_id}`}  component={Contact} />
                <Route exact path={`/view:${this.props.stud_id}`}  component={Display} />

                </Switch>
            </div>
        )
    }
}

export default NewApp

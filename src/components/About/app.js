import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom'
import {hot} from 'react-hot-loader'
/* Layouts*/
import Layout from "./layout"
import ScrollToTop from './scroll-to-top'
import Login from './login'
import Signup from './signup'
/* CSS Files*/
import '../../css/pure-min.css'
import '../../css/lato-web.css'
import '../../css/poppins.css'
import '../../css/app.css'
import '../../css/appStyle.css'
/* JS // JQuery Files*/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'popper.js/dist/umd/popper'


const HomePage = (props) => {
    return(
    <div className="container">
        React App
        <div className="dropdown">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                Dropdown button
            </button>
            <div className="dropdown-menu">
                <Link to="/login">Login</Link>
                <a className="dropdown-item" href="#">Link 2</a>
                <a className="dropdown-item" href="#">Link 3</a>
            </div>
        </div>
    </div>
    )
}

const LoginPage = (props) => (
    <Login/>
)
const SignupPage = (props) => (
    <Signup/>
)


const App = (props) => (
    <Router>
        <ScrollToTop>
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                </Switch>
            </Layout>
        </ScrollToTop>
    </Router>

)


export default hot(module)(App)
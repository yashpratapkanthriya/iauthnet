import React from 'react'
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import {hot} from 'react-hot-loader'


import Layout from "./layout"
import ScrollToTop from './scroll-to-top'
import Login from './login'
import '../../css/pure-min.css'
import '../../css/lato-web.css'
import '../../css/poppins.css'
import '../../css/app.css'

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
                <a className="dropdown-item" href="#">Link 1</a>
                <a className="dropdown-item" href="#">Link 2</a>
                <a className="dropdown-item" href="#">Link 3</a>
            </div>
        </div>
    </div>
    )
}

const LoginPage = () => (
    <Login/>
)

const App = (props) => (
    <Router>
        <ScrollToTop>
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </Layout>
        </ScrollToTop>
    </Router>

)


export default hot(module)(App)
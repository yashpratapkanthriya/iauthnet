import React from 'react'
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'

import {hot} from 'react-hot-loader'


import Layout from "./layout"
import ScrollToTop from './scroll-to-top'

import '../../css/pure-min.css'
import '../../css/lato-web.css'
import '../../css/poppins.css'
import '../../css/app.css'


const HomePage = (props) => {
    return(
    <div className="container">
        React App
    </div>
    )
}


const App = (props) => (
    <Router>
        <ScrollToTop>
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </Layout>
        </ScrollToTop>
    </Router>

)
/*const Ax = () => {
    return (
        <div>React</div>
    )
}
const App = (props) => {
    console.log("Running...")
    return (

        <div><Ax/>hello</div>
    )
}*/

export default hot(module)(App)
import React from 'react'
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import {hot} from 'react-hot-loader'


import 'bootstrap/dist/css/bootstrap.css'
import '../../css/pure-min.css'
import '../../css/lato-web.css'
import '../../css/poppins.css'
import '../../css/app.css'


const HomePage = (props) => (
    <div className="container">
        React
    </div>
)


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


export default hot(module)(App)
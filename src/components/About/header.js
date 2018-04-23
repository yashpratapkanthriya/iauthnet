import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Notification from './notification'
import data from '../../data'
import 'bootstrap/dist/js/bootstrap.min.js';

class NavBar extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.state = { searchQuery: '' }
    }

    handleChange(e) {
        this.setState({ searchQuery: e.target.value })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={require("../../images/menu-icon-light.svg")} alt="Menu" />
                    </button>
                    <Link to="/" className="navbar-brand mr-auto mr-lg-3">
                        <div className="logo-container">
                            <img src={require("../../images/ilogo-low.jpg")}
                                 srcSet="images/origin-logo@2x.png 2x, images/origin-logo@3x.png 3x"
                                 style={{width: 100}}
                                 className="origin-logo" alt="Origin Protocol" />
                        </div>
                    </Link>
                    <div className="collapse navbar-collapse order-2 order-lg-1" id="navbarSupportedContent">

                        <div className="navbar-nav justify-content-end">
                            <Link to="/" className="nav-item nav-link">About</Link>
                            <Link to="/login" className="nav-item nav-link">Login</Link>
                            <Link to="/signup" className="nav-item nav-link">Sign Up</Link>
                        </div>
                    </div>
                    <div className="static navbar-nav order-1 order-lg-2">
                        <div className="nav-item notifications dropdown">
                            <a className="nav-link active dropdown-toggle" id="notificationsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="unread-badge"></div>
                                <img src={require("../../images/alerts-icon.svg")} className="notifications" alt="Notifications" />
                                <img src={require("../../images/alerts-icon-selected.svg")} className="notifications selected" alt="Notifications" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="notificationsDropdown">
                                <div className="triangle-container"><div className="triangle"></div></div>
                                <div className="actual-menu">
                                    <header className="d-flex">
                                        <div className="count"><p>4</p></div>
                                        <h3>Notifications</h3>
                                    </header>
                                    <div className="notifications-list">
                                        <ul className="list-group">

                                            {data.notifications.map(n => <Notification key={`navbar-notification-${n._id}`} notification={n} />)}

                                        </ul>
                                    </div>
                                    <footer>
                                        <Link to="/notifications">View All</Link>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar

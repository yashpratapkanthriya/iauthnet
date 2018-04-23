import React from 'react'

const Footer = (props) => {
    return (
        <footer className="dark-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="logo-container">
                            <img src={require("../../images/ilogo-low.jpg")}
                                 className="origin-logo" alt="iAuthNet"/>
                        </div>
                        <p className="company-mission">
                            We are building the platform by which we can track the authencity of the product by verifying it from our decentralized system and according to our standard security and authentication protocols.
                        </p>
                        <p>
                            &copy; 2018 iAuthnet, Inc.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-6 col-md-4">
                                <div className="footer-header">
                                    Documentation
                                </div>
                                <ul className="footer-links">
                                    <li>
                                        <a href="https://www.iauthnet.com/product-brief">Product Brief</a>
                                    </li>
                                    <li>
                                        <a href="https://www.iauthnet.com/whitepaper">Whitepaper</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/iauthnet" target="_blank">Github</a>
                                    </li>
                                    <li>
                                        <a href="http://docs.iauthnet.com/" target="_blank">Docs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-4">
                                <div className="footer-header">
                                    Community
                                </div>
                                <ul className="footer-links">
                                    <li>
                                        <a href="https://t.me/iauthnet" target="_blank">Telegram</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/jyxpUSe" target="_blank">Discord</a>
                                    </li>
                                    <li>
                                        <a href="https://medium.com/iauthnet" target="_blank">Medium</a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/iauthnet" target="_blank">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/iauthnet" target="_blank">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-4">
                                <div className="footer-header">
                                    Organization
                                </div>
                                <ul className="footer-links">
                                    <li>
                                        <a href="http://www.iauthnet.com/team">Team</a>
                                    </li>
                                    <li>
                                        <a href="http://www.iauthnet.com/presale">Presale</a>
                                    </li>
                                    <li>
                                        <a href="http://www.iauthnet.com/partners">Partners</a>
                                    </li>
                                    <li>
                                        <a href="https://angel.co/iauthnet/jobs">Jobs (We&rsquo;re hiring!)</a>
                                    </li>
                                    <li>
                                        <a href="#">India</a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@iauthnet.com">info@iauthnet.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import sunshineLogo from '../components/logo.svg'

export const Footer = () => (

    <React.Fragment>
            <footer className="page-footer font-small pt-4 mt-5" style={{ backgroundColor: "#ebefff"}}>
                <div className="container text-center text-md-left">
                    <div className="row">

                        <div className="col-md-4 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                                <img
                                    src={sunshineLogo}
                                    width="180"
                                    height="60"
                                    className="d-inline-block"
                                    alt="logo"
                                /></h5>
                        </div>

                        <hr className="clearfix w-100 d-md-none" />

                        <div className="col-md-2 mx-auto">
                            <p className="text-uppercase mt-3 mb-4">TOURS</p>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#link" style={{ color: 'black' }}>
                                        <p><strong>Cultural Tours</strong></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#link" style={{ color: 'black' }}>
                                        <p><strong>Adventure Tours</strong></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#link" style={{ color: 'black' }}>
                                        <p><strong>Snow Tours</strong></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#link" style={{ color: 'black' }}>
                                        <p><strong>Private Tours</strong></p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <hr className="clearfix w-100 d-md-none" />

                        <div className="col-md-2 mx-auto">
                            <p className="text-uppercase mt-3 mb-4">DESTINATIONS</p>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#link" style={{ color: 'black' }}>
                                        <p><strong>Cultural Tours</strong></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#link" style={{ color: 'black' }}>
                                        <p><strong>Adventure Tours</strong></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#link" style={{ color: 'black' }}>
                                        <p><strong>Snow Tours</strong></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#link" style={{ color: 'black' }}>
                                        <p><strong>Private Tours</strong></p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <hr className="clearfix w-100 d-md-none" />

                        <div className="col-md-2 mx-auto">
                            <p className="text-uppercase mt-3 mb-4">CONTACT US</p>
                            <h6><strong>Tel</strong></h6><p>+65 9904 4294</p>
                            <h6><strong>Email</strong></h6><p>info@sunshinetours.com</p>
                            <h6><strong>Address</strong></h6><p>Bakers Ave Office Park Suite 100, 29 Bakers Ave, Singapore</p>
                        </div>

                    </div>
                </div>

                <hr className="clearfix w-100 d-md-none" />

                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <h2><FaFacebook /></h2>
                    </li>
                    <li className="list-inline-item">
                        <h2><FaInstagram /></h2>
                    </li>
                    <li className="list-inline-item">
                        <h2><FaTwitter /></h2>
                    </li>
                    <li className="list-inline-item">
                        <h2><FaLinkedin /></h2>
                    </li>
                </ul>

                <div className="footer-copyright text-center py-3 font-small">© 2020 Copyright: Sunshine Tours
            </div>
            </footer>
    </React.Fragment>
)

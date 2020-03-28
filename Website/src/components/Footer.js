import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import sunshineLogo from '../components/logo.svg'

export const Footer = () => (

    <React.Fragment>
            <footer class="page-footer font-small pt-4 mt-5" style={{ backgroundColor: "#ebefff"}}>
                <div class="container text-center text-md-left">
                    <div class="row">

                        <div class="col-md-4 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
                                <img
                                    src={sunshineLogo}
                                    width="180"
                                    height="60"
                                    className="d-inline-block"
                                    alt="logo"
                                /></h5>
                        </div>

                        <hr class="clearfix w-100 d-md-none" />

                        <div class="col-md-2 mx-auto">
                            <p class="text-uppercase mt-3 mb-4">TOURS</p>
                            <ul class="list-unstyled">
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

                        <hr class="clearfix w-100 d-md-none" />

                        <div class="col-md-2 mx-auto">
                            <p class="text-uppercase mt-3 mb-4">DESTINATIONS</p>
                            <ul class="list-unstyled">
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

                        <hr class="clearfix w-100 d-md-none" />

                        <div class="col-md-2 mx-auto">
                            <p class="text-uppercase mt-3 mb-4">CONTACT US</p>
                            <h6><strong>Tel</strong></h6><p>+65 9904 4294</p>
                            <h6><strong>Email</strong></h6><p>info@sunshinetours.com</p>
                            <h6><strong>Address</strong></h6><p>Bakers Ave Office Park Suite 100, 29 Bakers Ave, Singapore</p>
                        </div>

                    </div>
                </div>

                <hr class="clearfix w-100 d-md-none" />

                <ul class="list-unstyled list-inline text-center">
                    <li class="list-inline-item">
                        <h2><FaFacebook /></h2>
                    </li>
                    <li class="list-inline-item">
                        <h2><FaInstagram /></h2>
                    </li>
                    <li class="list-inline-item">
                        <h2><FaTwitter /></h2>
                    </li>
                    <li class="list-inline-item">
                        <h2><FaLinkedin /></h2>
                    </li>
                </ul>

                <div class="footer-copyright text-center py-3 font-small">© 2020 Copyright: Sunshine Tours
            </div>
            </footer>
    </React.Fragment>
)

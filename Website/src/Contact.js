import React, { Component } from 'react'
import { Card, CardColumns } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import leaf from './assets/leaf.jpg'
import kayak from './assets/kayak.jpg'


class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="text-center">
                    <h1>Contact Us</h1>
                    <p>Feel free to drop us a message!</p>
                    <hr class="my-4"/>
                </div>
                <CardColumns>
                    <Card className="text-center">
                        <Card.Img variant="top" src={leaf} />
                        <Card.Body>
                            <Card.Title>FAQ</Card.Title>
                            <Card.Text>
                                You can check out the frequently asked question here!
                    </Card.Text>
                            {/* <Button variant="primary">Go To FAQ</Button> */}
                            <button type="submit" class="btn btn-primary" style={{ backgroundColor: "white", color: "black", borderColor: "lightgray" }}>Go To FAQ</button>
                        </Card.Body>
                    </Card>

                    <Card className="text-center">
                        <Card.Img variant="top" src={kayak} />
                        <Card.Body>
                            <Card.Title>Send Us An Email</Card.Title>
                            <Card.Text>
                                Send us an email for enquiry or feedback here!
                    </Card.Text>
                            {/* <Button variant="primary">Go To Email</Button> */}
                            <button type="submit" class="btn btn-primary" style={{ backgroundColor: "white", color: "black", borderColor: "lightgray" }}>Go To Email</button>
                        </Card.Body>
                    </Card>

                    <Card className="text-center">
                        <Card.Img variant="top" src={kayak} />
                        <Card.Body>
                            <Card.Title>Live Chat</Card.Title>
                            <Card.Text>
                                If you would like to chat with an agent now, press the button below.
                    </Card.Text>
                            <Link to="/LiveChat">
                                {/* <Button className="is-rounded">Go To Live Chat</Button> */}
                                <button type="submit" class="btn btn-primary" style={{ backgroundColor: "white", color: "black", borderColor: "lightgray" }}>Go To Live Chat</button>
                            </Link>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </React.Fragment>
        )
    }
}

export default Contact;
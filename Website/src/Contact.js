import React, { Component } from 'react'
import { Card, Button, CardColumns } from 'react-bootstrap'
import {Link} from 'react-router-dom';

class Contact extends Component {
    render() {
        return(
            <React.Fragment>
            <CardColumns>
                <Card className = "text-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Title>FAQ</Card.Title>
                    <Card.Text>
                    You can check out the frequently asked question here!
                    </Card.Text>
                    <Button variant="primary">Go To FAQ</Button>
                </Card.Body>
                </Card>

                <Card className = "text-center"  style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Send Us An Email</Card.Title>
                    <Card.Text>
                    Send us an email for enquiry or feedback here!
                    </Card.Text>
                    <Button variant="primary">Go To Email</Button>
                </Card.Body>
                </Card>

                <Card className = "text-center"  style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Live Chat</Card.Title>
                    <Card.Text>
                    If you would like to chat with an agent now, press the button below.
                    </Card.Text>
                    <Link to="/LiveChat">
                        <Button className="is-rounded">Go To Live Chat</Button>
                    </Link>
                </Card.Body>
                </Card>
            </CardColumns>
            </React.Fragment>
        )
    }
}

export default Contact;
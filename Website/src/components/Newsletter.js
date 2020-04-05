import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

export const Newsletter = () => {
    return (
        <React.Fragment>
            <Card 
            border="light"
            bg="dark"
            text="white"
            >
                <Container className="mt=3 mb=3 p-3" 
                // style={{backgroundColor: "#2d3542"}}
                >
                    <Row>
                        <Col sm={8} style={{textAlign: "center"}}>
                            <h3>Sign up for our Newsletter here!</h3> 
                            </Col>
                        <Col sm={4}>
                            <button href="#link" className="btn btn-primary"
                                style={{ backgroundColor: "white", color: "black", borderColor: "lightgray" }}>
                                Connect</button>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </React.Fragment>
    )
}
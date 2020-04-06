import React from 'react'
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'

export const Newsletter = () => {
    return (
        <React.Fragment>
            <Card
                border="light"
                bg="dark"
                text="white"
            >
                <Container className="mt-3">
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={6}>
                                <h5 class="text-right">Sign Up For Our Newsletter Here!</h5>
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control type="email" placeholder="Email" />
                            </Col>
                            <Col sm={2}>
                                <Button variant="light outline-dark" type="submit" href="#link">
                                    Sign Up
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Container>
            </Card>
        </React.Fragment>
    )
}
import React from 'react'
import { Card, CardDeck, Row, Col, Container } from 'react-bootstrap'
import arabst from '../assets/arabst.jpg'
import club from '../assets/club.jpg'
import gbtb from '../assets/gbtb.jpg'
import culture from '../assets/culture.jpg'
import luge from '../assets/luge.jpg'
import chef from '../assets/chef.jpg'

export const Cards = (props) => {
    return (
        <React.Fragment>

            <Container>
                <Row>
                    <Col>
                        <Card
                            border="light"
                            bg="light"
                            text="black">
                            <Card.Header>Editor's Pick</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <h5>
                                        {' '}
                                Get Ready To Be Inspired By The Places You Visit!
                                {' '}
                                    </h5>
                                    <Card.Text>
                                        Experience Singapore's diverse heritage,
                                        displayed in the wide array of cultures, races and religions.....
                            </Card.Text>
                                    <button type="submit" className="btn btn-primary"
                                        style={{ backgroundColor: "white", color: "black", borderColor: "lightgray" }}>
                                        Connect</button>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card
                            border="light"
                            bg="light"
                            text="black">
                            <Card.Header>Editor's Pick</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <h5>
                                        {' '}
                                Get Ready To Be Inspired By The Places You Visit!
                                {' '}
                                    </h5>
                                    <Card.Text>
                                        Experience Singapore's diverse heritage,
                                        displayed in the wide array of cultures, races and religions.....
                            </Card.Text>
                                    <button type="submit" className="btn btn-primary"
                                        style={{ backgroundColor: "white", color: "black", borderColor: "lightgray" }}>
                                        Connect</button>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


            <div className="mt-5">
                <CardDeck>
                    <Card border="light" className="bg-light">
                        <Card.Img src={chef} alt="Card image" />
                        <Card.ImgOverlay></Card.ImgOverlay>
                        <h5 border="light" className="p-2"
                            style={{ textAlign: "center" }}>
                            Taste the many rich cuisines!
                        </h5>
                    </Card>

                    <Card border="light" className="bg-light">
                        <Card.Img src={gbtb} alt="Card image" />
                        <Card.ImgOverlay></Card.ImgOverlay>
                        <h5 border="light" className="p-2"
                            style={{ textAlign: "center" }}>
                            Visit the To-Go destinations!
                        </h5>
                    </Card>

                    <Card border="light" className="bg-light">
                        <Card.Img src={culture} alt="Card image" />
                        <Card.ImgOverlay></Card.ImgOverlay>
                        <h5 border="light" className="p-2"
                            style={{ textAlign: "center" }}>
                            Explore the unique cultures!
                        </h5>
                    </Card>
                </CardDeck>
            </div>

            <div className="mt-3 mb-5">
                <CardDeck>
                    <Card border="light" className="bg-light">
                        <Card.Img src={arabst} alt="Card image" />
                        <Card.ImgOverlay></Card.ImgOverlay>
                        <h5 border="light" className="p-2"
                            style={{ textAlign: "center" }}>
                            Explore!
                        </h5>
                    </Card>

                    <Card border="light" className="bg-light">
                        <Card.Img src={luge} alt="Card image" />
                        <Card.ImgOverlay></Card.ImgOverlay>
                        <h5 border="light" className="p-2"
                            style={{ textAlign: "center" }}>
                            Aventures
                        </h5>
                    </Card>

                    <Card border="light" className="bg-light">
                        <Card.Img src={club} alt="Card image" />
                        <Card.ImgOverlay></Card.ImgOverlay>
                        <h5 border="light" className="p-2"
                            style={{ textAlign: "center" }}>
                            Night Scene
                        </h5>
                    </Card>
                </CardDeck>
            </div>
        </React.Fragment>
    )
}
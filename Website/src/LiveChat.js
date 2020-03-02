import React, { Component } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'



// const alertClicked = () => (alert('You clicked the third ListGroupItem'));


class LiveChat extends Component {

    constructor(props) {
        super(props)
            this.state = {
                myitem: 'Sunshine'
            };
    }

    render() {
        return (
            <React.Fragment padding-bottom="150px">
            <h3 class="text-center">This will be the Live Chat Page</h3>
            {/* <ListGroup variant="flush">
                <ListGroup.Item action href="#link1">
                Bills
                <InputGroupCheckbox type="checkbox" class="custom-control-input" id="defaultUnchecked"></InputGroupCheckbox>
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                Link 2
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                Link 3
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                Link 4
                </ListGroup.Item>
                <ListGroup.Item action onClick={alertClicked}>
                This one is a button
                </ListGroup.Item>
                <Form>
                <select value={this.state.mycar}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
                </Form>
            </ListGroup> */}
            <Container>
                <h3 className="text-center">Category</h3>
                <Row>
                    <Col sm={10}>Delivery</Col>
                    <Col sm={2}>hi</Col>
                </Row>
                <Row>
                    <Col sm={10}>Returns and Refund</Col>
                    <Col sm={2}>hi</Col>
                </Row>
                <Row>
                    <Col sm={10}>Order Issues</Col>
                    <Col sm={2}>hi</Col>
                </Row>
                <Row>
                <Col sm={10}>Payment, Promotions and Discounts</Col>
                <Col sm={2}>hi</Col>
                </Row>
            </Container>


            <Form>
            <div class="form-group row">
                <label for="Salutations" class="col-sm-2 col-form-label">Salutations</label>
                <div class="col-sm-10">
                <select value={this.state.mycar}>
                    <option value="Mr.">Mr</option>
                    <option value="Mrs.">Mrs</option>
                    <option value="Ms.">Ms</option>
                    <option value="Miss">Miss</option>
                </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="firstname" class="col-sm-2 col-form-label">First Name</label>
                <div class="col-sm-10">
                <input type="username" class="form-control" id="inputEmail3" placeholder="First Name"/>
                </div>
            </div>
            <div class="form-group row">
                <label for="lastname" class="col-sm-2 col-form-label">Last Name</label>
                <div class="col-sm-10">
                <input type="username" class="form-control" id="inputPassword3" placeholder="Last Name"/>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" id="inputPassword3" placeholder="Email"/>
                </div>
            </div>
            <fieldset class="form-group">
                <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
                    <label class="form-check-label" for="gridRadios1">
                        First Radio
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                    <label class="form-check-label" for="gridRadios2">
                        Second Radio
                    </label>
                    </div>
                    <div class="form-check disabled">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
                    <label class="form-check-label" for="gridRadios3">
                        Third Radio
                    </label>
                    </div>
                </div>
                </div>
            </fieldset>
            <div class="form-group row">
                <div class="col-sm-2">Checkbox</div>
                <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label class="form-check-label" for="gridCheck1">
                    Example checkbox
                    </label>
                </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </div>
            </Form>
        </React.Fragment>
        )
    }
}

export default LiveChat;

import React, { Component } from 'react'
import { Container, Col, Card, Form } from 'react-bootstrap'
// import styled from 'styled-components';
import {Link} from 'react-router-dom';

class FilterTwo extends Component {

    constructor(props) {
        super(props)
            this.state = {
                myitem: 'Sunshine'
            };
    }
    
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Col>
                        <h2 class="text-center mb-3">Live Chat</h2>
                        <h5 class="text-center mb-5">Chat With A Member Of Our Team!</h5>
                        <h5 class="text-center mb-3">What is your question about?</h5>
                    </Col>
                    <Col>
                    <Link to="/LiveChat" style={{color: 'black'}}>
                        <div class="text-center"><Card>
                            <Card body>Book And Join A Tour(change option)</Card>
                        </Card>
                        </div>
                    </Link>
                    </Col>
                    <h5 class= "text-center mb-3 mt-3"> And more specifically...</h5>
                    <Col>
                    <Link to="/FilterOne" style={{color: 'black'}}>
                        <div class="text-center"><Card>
                            <Card body>Group Bookings(change option)</Card>
                        </Card>
                        </div>
                    </Link>
                    </Col>
                    
                    <div class='mt-3'>
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
                        <div class="col-sm-8">
                        <input type="username" class="form-control" id="inputEmail3" placeholder="First Name"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lastname" class="col-sm-2 col-form-label">Last Name</label>
                        <div class="col-sm-8">
                        <input type="username" class="form-control" id="inputPassword3" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-8">
                        <input type="email" class="form-control" id="inputPassword3" placeholder="Email"/>
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                        <div class="col-sm-8">
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
                        <button type="submit" class="btn btn-primary">Connect</button>
                        </div>
                    </div>
                    </Form>
                    </div>

                    <div class="mt-3">
                    <Col>
                        <Link to="/contact" style={{color: 'black'}}>
                            <p class="text-center">Cancel</p>
                        </Link>
                    </Col>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default FilterTwo;


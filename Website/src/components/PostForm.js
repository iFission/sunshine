import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'

class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstName: '',
             lastName: '',
             email: '',
             info: '',
             skillOne: props.skillOne,
             skillTwo: props.skillTwo
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault() //avoid page refresh

        //create a new form object that contain values from the form
        const newForm = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            info: this.state.info,
            skillOne: this.state.skillOne,
            skillTwo: this.state.skillTwo
        }

        //make the post
        axios.post('http://localhost:4000/forms/add', newForm)
        .then(res => console.log(res.data));

        console.log(this.state)
    }
    

    // const[itemtype, setItemtype] = useState(["Mr.", "Mrs.", "Miss", "Ms."]);
    // const Item = itemtype.map(Item => Item)
    // const handleItemChange = (e) => { return console.clear(), console.log((itemtype[e.target.value])) }

    render() {
        const{firstName,lastName,email,info} = this.state
    return (
        <React.Fragment>
            <div class='mt-3'>
                <Form onSubmit={this.submitHandler}>
                    {/* <div class="form-group col">
                        <label for="Salutations" class="col-sm-6 col-form-label">Salutations</label>
                        <div class="col-sm-2">
                            <select
                                onChange={e => handleItemChange(e)}
                                className="browser-default custom-select" >
                                {
                                    Item.map((address, key) => <option key={key} value={key}>{address}</option>)
                                }
                            </select>
                        </div>
                    </div> */}
                    <div class="form-group col">
                        <label for="firstname" class="col-sm-6 col-form-label">First Name *</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name" 
                            defaultValue={firstName} 
                            onChange={this.changeHandler}
                            required />
                        </div>
                    </div>
                    <div class="form-group col">
                        <label for="lastname" class="col-sm-6 col-form-label">Last Name *</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name" 
                            defaultValue={lastName} 
                            onChange={this.changeHandler}
                            required />
                        </div>
                    </div>
                    <div class="form-group col">
                        <label for="email" class="col-sm-6 col-form-label">Email *</label>
                        <div class="col-sm-6">
                            <input type="email" class="form-control" id="email" name='email' placeholder="Email" 
                            defaultValue={email} 
                            onChange={this.changeHandler}
                            required />
                        </div>
                    </div>
                    <div class="form-group col">
                        <label for="email" class="col-sm-6 col-form-label">Any Further Info You Can Give Us</label>
                        <div class="col-sm-6">
                            <textarea id="info" rows="4" cols="50" placeholder="Information"  name='info'
                            defaultValue={info}
                            onChange={this.changeHandler}
                            ></textarea>
                        </div>
                    </div>

                    <div class="form-group col">
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" 
                                required 
                                // value={agreeTandC}
                                // onChange={this.changeHandler}
                                />
                                <label class="form-check-label" for="gridCheck1">
                                    I agree to the Terms and Conditions. *
                            </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary" 
                            style={{ backgroundColor: "white", color: "black", borderColor: "lightgray" }}>
                            Connect</button>
                        </div>
                    </div>
                </Form>
            </div>
        </React.Fragment>
    )
    }
}

export default PostForm;


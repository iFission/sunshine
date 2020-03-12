import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export const Details = () => {

    const [itemtype, setItemtype] = useState(["Mr.", "Mrs.", "Miss", "Ms."]);
    const Item = itemtype.map(Item => Item)
    const handleItemChange = (e) => { return console.clear(), console.log((itemtype[e.target.value])) }

    return (
        <React.Fragment>
            <div class='mt-3'>
                <Form>
                    <div class="form-group col">
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
                    </div>
                    <div class="form-group col">
                        <label for="firstname" class="col-sm-6 col-form-label">First Name *</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="fname" name="fname" placeholder="First Name" required />
                        </div>
                    </div>
                    <div class="form-group col">
                        <label for="lastname" class="col-sm-6 col-form-label">Last Name *</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="lname" name="lname" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div class="form-group col">
                        <label for="email" class="col-sm-6 col-form-label">Email *</label>
                        <div class="col-sm-6">
                            <input type="email" class="form-control" id="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div class="form-group col">
                        <label for="email" class="col-sm-6 col-form-label">Any Further Info You Can Give Us</label>
                        <div class="col-sm-6">
                            <textarea id="infotext" rows="4" placeholder="Information"></textarea>
                        </div>
                    </div>

                    <div class="form-group col">
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" required />
                                <label class="form-check-label" for="gridCheck1">
                                    I agree to the Terms and Conditions. *
                            </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary" style={{backgroundColor: "white", color: "black", borderColor: "lightgray"}}>Connect</button>
                        </div>
                    </div>
                </Form>
            </div>
        </React.Fragment>
    )
}


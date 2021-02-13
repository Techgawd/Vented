import React from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import ventHere from '../images/ventHere.png';

function Form() {
    return (
        <div className="Form">
            {/* <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup> */}
            <img className='ventHere' alt="" src={ventHere} />
            <p>
                <label></label>
                <textarea> </textarea>
            </p>
            <Button color="primary">primary</Button>{' '}
        </div>
    );
}

export default Form;
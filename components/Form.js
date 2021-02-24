import React from 'react';
import '../App.css';
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
            <a href="www.google.com" class="button5">RELEASE</a>

        </div>
    );
}

export default Form;
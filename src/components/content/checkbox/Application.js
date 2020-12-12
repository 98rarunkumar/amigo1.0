import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Checkbox from './Checkbox';
import './Application.css'

const items = [
  'Clothes',
  'Accommodation',
  'Food',
  'Medicines',
  'Others'
];

class Application extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="cont">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              
              
             <div  className="button" >
               <a href='/main'>
               <div className="btnn">
                  Submit
               </div>
               </a>
             </div>
               {/* <div  className="button" type="submit">Save</div> */}
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Application;
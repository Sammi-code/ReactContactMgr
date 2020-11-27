/* 
Now to think about adding adding contacts dynamically 
Creating a whole seperate component that would house the 
form.

Also, note that when creating a form
each input is going to be a piece of the
state.

We create the forms input fields using a 
bootstrap card.

NB: When you set a value on a component, it becomes
a controlled component, you need to set it to your state
but you need to add an event handler for the Unchange
*/


import React, { Component } from 'react'
import { Consumer } from '../../Context'

class AddContact extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
  

    onSubmit = (e) => {
        e.preventDefault(); //Preventing the form from submitting to a file
        //Accessing the inputed data via the submit function
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,

        }


    }

    //Creating a default props
    static defaultProps = {
        name: "Fred Max",
        email: "fred@gmail.com",
        phone: "333-3333-4444"
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { name, email, phone } = this.props // Destructuring (Also we are no longer destructuring out of state anymore)
        
        
        
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                     <div class="form-group">
                       <label htmlFor="name">Name</label>
                       <input type="text" 
                       name="name" 
                       id="" 
                       class="form-control form-control-lg" 
                       placeholder="Enter Name.." 
                       defaultValue={name}
                       aria-describedby="helpId"
                       ref={this.name.input}/> 
                     </div>   
                     <div class="form-group">
                       <label htmlFor="email">Email</label>
                       <input type="email" 
                       name="email" 
                       id="" 
                       class="form-control form-control-lg" 
                       placeholder="Enter Email.." 
                       defaultValue={email}
                       aria-describedby="helpId"
                       ref={this.email.input}/>
                     </div>   
                     <div class="form-group">
                       <label htmlFor="phone">Phone</label>
                       <input type="text" 
                       name="phone" 
                       id="" 
                       class="form-control form-control-lg" 
                       placeholder="Enter Phone Number.." 
                       defaultValue={phone}
                       aria-describedby="helpId"
                       ref={this.phone.input}/>
                     </div>   
                    <input type="submit" value="Add Contact" 
                    className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;
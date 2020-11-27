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
import TextInputGroup from '../layout/TextInputGroup'
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

class EditContact extends Component {
    state = {
        name: ' ',
        email: ' ',
        phone: ' ',
        errors: {
            
        }
    }


    // We want to be able to call the details of the user
    // that is attached to the "id"  being called, these details 
    // include Name. Email, and Phone.

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);

        // We are going to get back an object, so we can as well as put the 
        // response in a variable

        const contact = response.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }



    onSubmit = async (dispatch, e) => {
        e.preventDefault(); //Preventing the form from submitting to a file
        const { name, email, phone } = this.state;

        //Check For Errors

        if(name === '') {
            this.setState({errors: {name: 'Name is required'}});
            return;
        }

        if(email === '') {
            this.setState({errors: {email: 'Email is required'}});
            return;
        }

        if(phone === '') {
            this.setState({errors: {phone: 'Phone is required'}});
            return;
        }

        // We take out uuid because jsonPlaceholder has
        // it's own ID structure and it auto-increments
        

        //Creating the update element to use in updating
        const updContact = {
            name,
            email,
            phone
        }

        const { id } = this.props.match.params;

        // Sending a put request to the server
        const response =await axios.put(`http://jsonplaceholder.typicode.com/users/${id}`, updContact);

        dispatch({type: 'UPDATE_CONTACT', payload: response.data})



        //Clear State after contact submission
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        // To redirect after we have submitted the form,
        // we use:

        this.props.history.push('/');
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { name, email, phone, errors } = this.state // Destructuring

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return ( 
                        <div className="card mb-3">
                <div className="card-header">Edit Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                        <TextInputGroup 
                        label="Name"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}
                        />
                        <TextInputGroup 
                        label="Email"
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.onChange} 
                        type="email"                       
                        error={errors.email}
                        />
                        <TextInputGroup 
                        label="Phone"
                        name="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={this.onChange}                        
                        error={errors.phone}
                        />


                    
                    <input type="submit" value="Update Contact" 
                    className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
                    )
                }}
            </Consumer>
        )
        
    }
}

export default EditContact;
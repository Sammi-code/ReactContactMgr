import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import axios from 'axios'
import { Link } from "react-router-dom"
// Class components

class Contact extends Component {
    state = {
        showContactInfo:true
    };

onShowClick = () => {
    /* Updating the state, mind you, state is immutable,
    one cannot directly manipulate it.
    You have to use setState method
    */

    this.setState({ showContactInfo: !this.state.showContactInfo}); // Changing the state
    // using the !this.showContactInfo, it creates a toggle
}


// Here we tweak the onDeleteClick to mimic and
// actual Front-End to Back-End relationship, where
// the Front-End would make HTTP calls to request 
// for a Delete


//Using Async
onDeleteClick = async (id, dispatch) => {
   // We don't put it into a variable because you're basically
   // not returning anything, it returns an empty array

    await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
 
    dispatch({type: 'DELETE_CONTACT', payload: id});
   
}


// onDeleteClick = (id, dispatch) => {
//  axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
//  .then(response =>  dispatch({type: 'DELETE_CONTACT', payload: id}));
   
// }

    render() {
        const { id, name, email, phone } = this.props.contact; //Non-Destructuring
        const   { showContactInfo } = this.state



        return (

            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (

                        <div className="card card-body mb-3">
                        <h4>{name}{' '}
                        <i 
                        onClick={this.onShowClick}
                        className="fa fa-sort-down" aria-hidden="true"
                        style = {{cursor: 'pointer'}}
                        />


                        <i class="fa fa-times" aria-hidden="true" style={{cursor : 'pointer', float : 'right', color: 'red'}}
                        onClick={this.onDeleteClick.bind(this, id, dispatch)}
                        />
                        
                        <Link to={`contact/edit/${id}`}>
                            <i 
                            className="fas fa-pencil-alt"
                            style={{
                                cursor: 'pointer',
                                float: 'right',
                                color: 'black',
                                marginRight: '1rem'

                            }}
                            ></i> 
                        </Link>
                        </h4>
                        {showContactInfo ? ( <ul className="list-group">
                            <li className="list-group-item">Email: {email}</li>
                            <li className="list-group-item">Phone: {phone}</li>
                        </ul>) : null}
                       
                    </div>
                    )
                }}
            </Consumer>
           
        )
    }
}

//setting the propTypes
Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;

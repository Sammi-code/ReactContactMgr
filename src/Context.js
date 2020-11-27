import React, { Component } from 'react';
import axios from 'axios'

//Variable Creation
const Context = React.createContext();

//Creating a reducer
const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !==action.payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                /*
                We want to return an object, yet keep the initial
                state, so we want to use the spread operator which is 
                very important when you're dealing with immutable states 
                */
                contacts: [action.payLoad, ...state.contacts]
            }

            case 'UPDATE_CONTACT':
              return {

                /*
                Here we return the state and then we want to use maps to loop through
                and for each contact we check if each contact id matches with the id from 
                the payload, and then if it does, we say the contact equals the entire payload
                else, we want it to just insert the contact                  
                */
                    ...state,
                    contacts: state.contacts.map(contact =>
                        contact.id === action.payload.id ? (contact 
                            = action.payload) : contact)
                }
            default:
                return state;

    }
};



//Creating a component
export class Provider extends Component {
    //Using Destructuring, we want to pull this out of contacts
state =  {
    contacts: [],

    //A way to call our action, so we use dispatch
    dispatch : action => this.setState(state => reducer(state, action))
};



// We use componentDidMount to make calls or ini context, speaking to the backend
async componentDidMount() {
    //Using async and await with axios to get data from our rest API
   const response = await axios.get('http://jsonplaceholder.typicode.com/users');

   this.setState({
       contacts: response.data
   })

}


// // We use componentDidMount to make calls or ini context, speaking to the backend
// componentDidMount() {
//     //Using axios to get data from our rest API
//     axios.get('http://jsonplaceholder.typicode.com/users')
//     .then(response => this.setState({
//         contacts:response.data
//     }))

// }




render() {

    return (        
    <Context.Provider value={this.state}>
        {this.props.children}
    </Context.Provider>
    )
}
}


//Creating a consumer
export const Consumer = Context.Consumer
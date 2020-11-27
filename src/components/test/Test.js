import React, { Component } from 'react';

class Test extends Component {
    //Axios is a small library used to deal with HTTP

    state ={
        title: '',
        body: ''
    }


    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({
          title: data.title,
          body: data.body
      }))
    }

    // componentWillMount() {
    //     console.log('componentWillMount... ')
    // }

    // componentDidUpdate() {
    //     console.log('componentDid Update... ')
    // }

    // componentWillUpdate() {
    //     console.log('componentWillUpdate... ')
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('componentWillReceiveProps... ')
    //     // Used with Redux, like when you component receives
    //     // new props. In Redux you can change a state to a props
    // }


    render() {
        const { title, body } = this.state; 
        return <div>
            <h1>{ title }</h1> 
        </div>
    }
}

export default Test;
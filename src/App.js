import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import multiplyByTwo from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';
import './App.css';

// Dynamic stuff in 
function App() {

  return (
    //Wrapping everything in the provider we created
    <Provider>
      <Router>

    <div className="App">
      <Header branding="Contact Managers"/>
      <div class="container">
    <Switch>
      <Route exact path = "/" component={Contacts} />
      <Route exact path = "/contact/add" component={AddContact} />
      <Route exact path = "/contact/edit/:id" component={EditContact} />
      <Route exact path = "/About" component={About} />
      <Route exact path = "/test" component={Test} />
      {/*No path is needed to specify the not found page, since every misdirected clicking would lead there*/}
      <Route component={NotFound} />

    </Switch>
        
      </div>

      <multiplyByTwo/>


    </div>
      </Router>
    </Provider>
  );
}

export default App;

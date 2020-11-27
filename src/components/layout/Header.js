import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Functional Component

const Header = props =>{
    const { branding } = props; //Destructuring
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
              <a href="/" className="navbar-brand">
                  {branding}
              </a>
              <div>
                    <ul className="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">
                            <i class="fas fa-home"></i> Home
                        </Link>
                    </li>                            
                    <li class="nav-item">
                        <Link to="/contact/add" class="nav-link">
                        <i class="fas fa-plus"></i> Add
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link">
                        <i class="fas fa-question"></i> About
                        </Link>
                    </li>
                    </ul>
              </div>
            </div>
        </nav>
    );
};

//Default Props
Header.defaultProps = {
    branding: "My App"
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'green',
    fontSize: '50px'
}
export default Header;
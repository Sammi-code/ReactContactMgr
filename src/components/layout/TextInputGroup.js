import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Creating the container (so to speak) that handles the business of validation
const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {
    return (
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={type} 
        name={name}
        className={classnames("form-control form-control-lg", {'is-invalid': error 
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange} //This gets the actual value for each field specified
      />
        {error && <div className="invalid-feedback">{error}</div>}
        
      </div> 
    )
}

//Specifying PropTypes
TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

//Saves the default Props of all inputs as Text, with exception of the email input.
TextInputGroup.defaultProps = {
    type: "text"
}
export default TextInputGroup;
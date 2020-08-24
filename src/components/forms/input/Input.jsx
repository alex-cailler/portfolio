import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const types = ['email', 'password', 'text', 'number']

const Input = ({ placeholder, className, type, value }) => {
    const classes = classNames(
        'bg-gray-200 focus:outline-none py-5 w-full pl-10 pr-7 rounded-large placeholder-gray-600',
        className
    );
    return (
        <input type={type} className={classes} placeholder={placeholder} value={value}/>
    );
};


Input.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.oneOf(types),
    value: PropTypes.func.isRequired
};

Input.defaultProps = {
    className: null,
    placeholder: 'Default placeholder',
    type: 'default',
    value: '',
};

export { types }

export default Input;

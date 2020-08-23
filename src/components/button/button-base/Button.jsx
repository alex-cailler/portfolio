import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const types = ['button', 'submit'];

const Button = ({ className, children, onClick, type }) => {
    const classes = classNames(
        'bg-gray-800 text-white focus:outline-none p-3 pl-6 pr-6 rounded-large shadow-custom',
        className,
    );
    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    );
};


Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(types),
};

Button.defaultProps = {
    className: null,
    onClick: () => {},
    type: 'button',
};

export default Button;

export { types };

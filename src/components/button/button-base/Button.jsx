import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const types = ['button', 'submit'];

const defaultClassNames = 'font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline';

const alternativeClassNames =
    'py-2 px-8 text-white border border-white rounded-full focus:outline-none focus:shadow-outline';


const Button = ({ className, children, onClick, primaryBackground, textVariant, type, variant }) => {
    const classes = classNames(
        textVariant,
        `bg-${variant}`,
        primaryBackground ? alternativeClassNames : defaultClassNames,
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
    primaryBackground: PropTypes.bool,
    type: PropTypes.oneOf(types),
    textVariant: PropTypes.string,
    variant: PropTypes.string,
};

Button.defaultProps = {
    className: null,
    onClick: () => {},
    primaryBackground: false,
    textVariant: 'text-white',
    type: 'button',
    variant: 'primary-500',
};

export default Button;

export { types };

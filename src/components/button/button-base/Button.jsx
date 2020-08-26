import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const types = ['button', 'submit'];
const variants = ['lg', 'md' , 'sm', 'xs']

const lgClass = 'p-6 px-12 text-3xl'
const mdClass = 'p-5 px-10 text-2xl'
const smClass = 'p-4 px-8 text-2xl'
const xsClass = 'p-3 px-6'

const Button = ({ className, children, onClick, type, bgColor, color, variant }) => {
    const classes = classNames(
        'focus:outline-none rounded-large shadow-custom',
        color,
        bgColor,
        className,
        variant === 'xs' ? xsClass :
            variant === 'sm' ? smClass :
                variant === 'md' ? mdClass : lgClass
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
    bgColor: PropTypes.string,
    color: PropTypes.string,
    variant: PropTypes.oneOf(variants)
};

Button.defaultProps = {
    className: null,
    onClick: () => {},
    type: 'button',
    bgColor: 'bg-gray-800',
    color: 'text-white',
    variant: 'xs'
};

export default Button;

export { types };

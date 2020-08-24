import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Textarea = ({className, placeholder, onChange, value, cols}) => {

    const classes = classNames(
        'bg-gray-200 focus:outline-none py-5 w-full pl-10 pr-7 rounded-large placeholder-gray-600',
        className
    )

    return (
        <textarea
            placeholder={placeholder}
            className={classes}
            onChange={onChange}
            value={value}
            cols={cols}
        />
    )
}

Textarea.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    cols: PropTypes.number
}

Textarea.defaultProps = {
    placeholder: 'default placeholder',
    className: null,
    value: '',
    cols: 5
}

export default Textarea;

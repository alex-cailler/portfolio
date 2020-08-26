import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Textarea = ({className, placeholder, onChange, value, rows}) => {

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
            rows={rows}
        />
    )
}

Textarea.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    rows: PropTypes.number
}

Textarea.defaultProps = {
    placeholder: 'default placeholder',
    className: null,
    value: '',
    rows: 5
}

export default Textarea;

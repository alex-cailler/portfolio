import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextInformation = ({className, label, describe}) => {

    const classes = classNames(
        '',
        className
    )

    return (
        <div className={classes}>
            <span className="uppercase tracking-wide font-semibold">{label}</span>
            <span className="ml-5 text-gray-600">{describe}</span>
        </div>
    )
}

TextInformation.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    describe: PropTypes.string
}

TextInformation.defaultProps = {
    className: null,
    label: 'Label',
    describe: 'describe'
}

export default  TextInformation

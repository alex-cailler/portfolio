import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeaderSection = ({title, description, className}) => {

    const classes = classNames(
        '',
        className
    )

    return (
        <div className={classes}>
            <h1 className="text-4xl leading-none font-semibold">{title}</h1>
            <p className="pt-5 text-gray-600">{description}</p>
        </div>
    )
}

export default HeaderSection
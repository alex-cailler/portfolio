import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardSocialNetwork = ({logoUrl, name, link, className}) => {

    const classes = classNames(
        '',
        className
    )

    return (
        <div className={classes}>
            <a href={link}>
                <div>
                    <img src={logoUrl} className="mx-auto"/>
                </div>
                <span className="text-gray-600">{name}</span>
            </a>
        </div>
    )
}

CardSocialNetwork.propTypes = {
    logoUrl: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    className: PropTypes.string
}

CardSocialNetwork.defaultTypes = {
    logoUrl: null,
    name: null,
    className: null,
    link: null
}

export default CardSocialNetwork

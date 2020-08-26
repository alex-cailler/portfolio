import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardTechnologie = ({className, urlImg, title}) => {

    const classes = classNames(
        'rounded-large w-48 bg-yellow-100 h-40 p-5 flex-shrink-0',
        className
    )

    return (
        <div className={classes}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" className="w-2/4 h-2/4 mx-auto"/>
            <h4 className="text-center text-yellow-700 mt-5" style={{"fontSize": "18px"}}>{title}</h4>
        </div>
    )
}

CardTechnologie.propTypes = {
    className: PropTypes.string,
    urlImg: PropTypes.string,
    title: PropTypes.string
}

CardTechnologie.defaultProps = {
    className: null,
    bgImage: null,
    btnTitle: PropTypes.string
}

export default CardTechnologie;

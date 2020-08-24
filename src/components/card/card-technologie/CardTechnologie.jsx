import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardTechnologie = ({className, urlImg, title}) => {

    const classes = classNames(
        '',
        className
    )

    return (
        <div className={classes}>
            <img src={urlImg}/>
            <h4 className="text-center ">{title}</h4>
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

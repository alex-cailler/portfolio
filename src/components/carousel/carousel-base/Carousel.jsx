import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Carousel = ({className, children}) => {

    const classes = classNames(
        'flex flex-no-wrap overflow-x-auto',
        className
    )

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

Carousel.propTypes = {
    className: PropTypes.string,
}

Carousel.defaultProps = {
    className: null
}


export default Carousel;

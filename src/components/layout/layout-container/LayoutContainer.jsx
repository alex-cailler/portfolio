import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {NavbarMain} from "../../navigation";

const LayoutContainer = ({children, className}) => {

    const classes = classNames(
        "container mx-auto",
        className
    )

    return (
        <div className={classes}>
            {children}
            <NavbarMain/>
        </div>
    )
}

LayoutContainer.propTypes = {
    className: PropTypes.string,
};

LayoutContainer.defaultProps = {
    className: null,
};

export default LayoutContainer

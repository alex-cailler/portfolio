import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input, {types} from "../../form-object/input/Input";

const LayoutSection = ({children, className}) => {

    const classes = classNames(
        "mt-32 mb-32",
        className
    )

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

LayoutSection.propTypes = {
    className: PropTypes.string,
};

LayoutSection.defaultProps = {
    className: null,
};

export default LayoutSection

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {NavbarMain, NavbarWork} from "../../navigation";

const LayoutContainerWork = ({children, className, match}) => {

    const classes = classNames(
        "w-11/12 mr-auto flex",
        className
    )

    return (
        <div className={classes}>
            <div className="bg-gray-200 relative h-100P w-64">
                <NavbarWork />
            </div>
            <div className="w-full mt-12">
                <div className="w-full ml-16">
                    <React.StrictMode>
                        {children}
                    </React.StrictMode>
                </div>
                <NavbarMain/>
            </div>
        </div>
    )
}

LayoutContainerWork.propTypes = {
    className: PropTypes.string,
};

LayoutContainerWork.defaultProps = {
    className: null,
};

export default LayoutContainerWork

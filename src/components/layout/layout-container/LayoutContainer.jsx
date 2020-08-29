import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {NavbarMain} from "../../navigation";

const LayoutContainer = ({children}) => {
    return (
        <div className="container mx-auto">
            {children}
            <NavbarMain/>
        </div>
    )
}

export default LayoutContainer

import React from "react";
import {LayoutSection} from "../../layout";
import PropTypes from 'prop-types';
import {CardImg} from "../../card";

const DesignSection = ({designs}) => {
    return (
        <div className="pt-20 pb-20">
            <div className="flex flex-wrap">
                {designs.map(design => (
                    <a href={design.link} className="w-4/12 px-12 py-6" key={design.link}>
                        <CardImg item={design}/>
                    </a>
                ))}
            </div>
        </div>
    )
}

DesignSection.propTypes = {
    designs: PropTypes.array
}

DesignSection.defaultProps = {
    designs: []
}

export default DesignSection

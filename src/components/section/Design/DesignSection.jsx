import React from "react";
import {LayoutSection} from "../../layout";
import PropTypes from 'prop-types';

const DesignSection = ({designs}) => {
    return (
        <div className="pt-20 pb-20">
            <div className="flex flex-wrap">
                {designs.map(design => (
                    <a href={design.link} className="w-4/12 px-12 py-6" key={design.link}>
                        <div className="shadow-custom rounded-large">
                            <div className="h-64 relative rounded-large">
                                <div className="bg-cover absolute h-full w-full rounded-large bg-no-repeat bg-center" style={{backgroundImage: `url('${design.imageLink}')`}}></div>
                            </div>
                            <div className="px-5 py-3 flex justify-between">
                                <h3 className="font-bold">{design.title}</h3>
                                <div>
                                    <img src="/utilities/figmaLogo.png" className="h-8 w-8 inline-block" />
                                    <span className="pl-5 inline-block">Figma</span>
                                </div>
                            </div>
                        </div>
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

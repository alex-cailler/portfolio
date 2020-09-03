import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types"

const CardImgTitle = ({item}) => {
    return (
        <div className="shadow-custom hover:shadow-none duration-100 rounded-large">
            <div className="h-64 relative rounded-large">
                <div className="bg-cover absolute h-full w-full rounded-large bg-no-repeat bg-center" style={{backgroundImage: `url('${item.imageLink}')`}}></div>
            </div>
            <div className="px-5 py-3 flex justify-between">
                <h3 className="font-bold">{item.title}</h3>
                <div>
                    <img src="/utilities/figmaLogo.png" className="h-8 w-8 inline-block" />
                    <span className="pl-5 inline-block">Figma</span>
                </div>
            </div>
        </div>
    )
}

CardImgTitle.propTypes = {
    item: PropTypes.object
}

CardImgTitle.propTypes = {
    item: {}
}

export default CardImgTitle

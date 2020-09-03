import React from "react"
import "../../../scss/grid.scss"
import PropTypes from 'prop-types';


const ImageSection = ({images, onClickEvent}) => {
    return (
        <div className="main">
            <div className="gallery" >
                {images.map(image => (
                    <div className="img" key={image.link} onClick={() => {onClickEvent(image)}}>
                        <img src={image.link} />
                    </div>
                ))}
            </div>
        </div>
    )
}

ImageSection.propTypes = {
    images: PropTypes.array,
    onClickEvent: PropTypes.func
}

ImageSection.defaultProps = {
    images: [],
    onClickEvent: () => {},
};

export default ImageSection

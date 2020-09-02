import React, {useState} from 'react';
import {images} from "../../constants/data";
import {ImagePreview, ImagesGallerySection} from "../../components/section";

const GaleryPage = () => {
    const [imagePreview, setImagePreview] = useState(null)
    return (
        <React.StrictMode>
            <h1 className="text-6xl leading-none font-semibold">Image</h1>
            <ImagesGallerySection images={images} onClickEvent={(imageFromChild) => { setImagePreview(imageFromChild); }} />
            <ImagePreview image={imagePreview} closePreview={() => { setImagePreview(null) }} />
        </React.StrictMode>
    );
};

export default GaleryPage;

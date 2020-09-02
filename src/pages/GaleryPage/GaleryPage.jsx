import React, {useState} from 'react';
import {images} from "../../constants/data";
import {ImagesGallerySection} from "../../components/section";

const GaleryPage = () => {
    const [listDataFromChild, setListDataFromChild] = useState('none')
    function test() {
        console.log("hola je suis le plus beau du ")
    }
    return (
        <React.StrictMode>
            <h1 className="text-6xl leading-none font-semibold">Image - {listDataFromChild}</h1>
           <ImagesGallerySection onClick={test} images={images}/>
        </React.StrictMode>
    );
};

export default GaleryPage;

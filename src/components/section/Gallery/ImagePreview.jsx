import React from "react"
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Icon } from '@iconify/react';
import plusOutlined from '@iconify/icons-ant-design/plus-outlined';
import {LayoutSection} from "../../layout";

const activeClss = "visible fixed right-0 left-0 top-0 bottom-0 bg-gray-900 overflow-hidden"
const noActiveClss = "invisible"

const ImagePreview = ({image, closePreview}) => {

    const classes = classNames(
        'transition duration-300',
        image ? activeClss : noActiveClss
    )

    return (
        <div className={classes}>
            {image ? (
                <div className="flex">
                    <div className="w-8/12 h-100P flex flex-col">
                        <div className="m-12 h-full relative text-white">
                            <div className="h-full w-full bg-center bg-no-repeat bg-contain" style={{backgroundImage: `url('${image.link}'`}}/>
                        </div>
                    </div>
                    <div className="w-4/12 h-100P flex flex-col">
                        <div className="m-12 h-full relative text-white">
                            <div className="text-right">
                                <button onClick={closePreview} className="text-white hover:rotate-45 duration-300 delay-75 transform focus:outline-none "><Icon rotate="90" className="text-4xl" icon={plusOutlined}/></button>
                            </div>
                            <LayoutSection>
                                <h3 className="uppercase text-white text-2xl tracking-wide font-semibold">description</h3>
                                <p>{image.description}</p>
                            </LayoutSection>
                            <LayoutSection>
                                <h3 className="uppercase text-white text-2xl tracking-wide font-semibold">spécifique</h3>
                                {Object.keys(image).map(key => {
                                    if (image[key] && key !== 'description') {
                                       return (
                                            <div className="text-white">{key} : {key === "link" ? window.location.origin : ""}{image[key]}</div>
                                        )
                                    }
                                }
                                )}
                            </LayoutSection>
                            <LayoutSection>
                                <h3 className="uppercase text-white text-2xl tracking-wide font-semibold">téléchargement</h3>
                            </LayoutSection>
                        </div>
                    </div>
                </div>
            ) : (<div>no data</div>)
            }
        </div>
    )
}

ImagePreview.propTypes = {
    //image: PropTypes.object,
    closePreview: PropTypes.func
}

export default ImagePreview

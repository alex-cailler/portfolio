import React from "react";
import PropTypes from "prop-types"
import {Link} from "react-router-dom";

const linearGradient = 'linear-gradient(270deg, rgba(172, 4, 4, 0.89) 35.3%, rgba(141, 0, 0, 0.35) 100%)';

const CardProject  = ({item}) => {
    return (
        <div className="h-70P mb-10 rounded-large bg-no-repeat bg-cover relative" style={{backgroundImage: `url('${item.imageLink}')`}}>
            <div className="absolute h-full w-full rounded-large opacity-0 duration-75 transition ease-in-out transition-opacity hover:opacity-100" style={{background: linearGradient}}>
                <div className="w-1/3 min-h-full float-right p-3">
                    <div className="overflow-y-auto">
                        <p className="text-white">{item.description}</p>
                    </div>
                    <div>
                        <Link to={`/project/${item.title}`} className="uppercase text-white">voir plus de détails</Link>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0">
                <h2 className="text-white text-5xl m-10">{item.title}</h2>
            </div>
        </div>
    )
}

CardProject.propTypes = {
    item: PropTypes.object
}

CardProject.defaultProps = {
    item: {}
}

export default CardProject

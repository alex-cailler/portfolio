import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {types} from "../../button/button-base/Button";

// const types = ['extend']

const CardThematique = ({className, children, type, bgImage, title, description, btnTitle}) =>  {

    const classes = classNames(
        "relative h-full rounded-large bg-no-repeat bg-cover bg-center",
    )

    return (
        <div className={className}>
            <div className={classes} style={{backgroundImage: `url('${bgImage}')`}}>
                <div className="p-8 absolute w-full h-full">
                    <div className="relative h-full">
                        <h1 className="text-5xl leading-none text-white">{title}</h1>
                        <p className="text-white pt-8">{description}</p>
                        <button className="absolute underline text-white uppercase bottom-0">{btnTitle}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

CardThematique.propTypes = {
    className: PropTypes.string,
    bgImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    btnTitle: PropTypes.string
 //   type: PropTypes.oneOf(types),
}

CardThematique.defaultProps = {
    className: null,
    bgImage: null,
    btnTitle: PropTypes.string,
  //  type: 'extend'
}

export default CardThematique;

// export { types }

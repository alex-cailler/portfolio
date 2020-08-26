import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const variants = ['dark', 'light']

const CardThematique = ({className, children, type, bgImage, title, description, btnTitle, bgColor, variant}) =>  {

    const classes = classNames(
        "relative h-full rounded-large bg-no-repeat bg-cover bg-center",
    )

    const background = bgColor ? {background: bgColor} : {backgroundImage: `url('${bgImage}')`}

    return (
        <div className={className}>
            <div className={classes} style={{...background}}>
                <div className="p-8 absolute w-full h-full">
                    <div className="relative h-full">
                        <h1 className={classNames('text-5xl leading-none', `text-${variant === 'light' ? 'white' : 'gray' }`)}>{title}</h1>
                        <p className={classNames('pt-8', `text-${variant === 'light' ? 'white' : 'gray-700' }`)}>{description}</p>
                        <button className={classNames('absolute underline uppercase bottom-0', `text-${variant === 'light' ? 'white' : 'gray' }`)}>{btnTitle}</button>
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
    btnTitle: PropTypes.string,
    bgColor: PropTypes.string,
    variant: PropTypes.oneOf(variants)
}

CardThematique.defaultProps = {
    className: null,
    bgImage: null,
    btnTitle: PropTypes.string,
    bgColor: null,
    variant: PropTypes
}

export default CardThematique;

export { variants }

import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '@iconify/react';
import editorQuote from '@iconify/icons-dashicons/editor-quote';

const Citation = ({className, author, authorJob, citation}) => {

    const classes = classNames(
        '',
        className
    )

    return (
        <div className={classes}>
            <Icon icon={editorQuote} className="text-5xl text-gray-500"/>
            <p className="font-light text-gray-800 mt-10 mb-10">{citation}</p>
            <h3 className="uppercase font-bold tracking-widest" style={{fontSize: '18px'}}>{author}</h3>
            <p className="text-gray-500">{authorJob}</p>
        </div>
    )
}

Citation.propTypes = {
    author: PropTypes.string,
    className: PropTypes.string,
    authorJob: PropTypes.string,
    citation: PropTypes.string
}

Citation.defaultProps = {
    author: '',
    className: null,
    authorJob: '',
    citation: ''
}

export default Citation

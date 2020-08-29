import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {LayoutContainer, LayoutSection} from "../../layout";
import {Citation} from "../../testimony";

const TestimonySection = () =>  (
    <LayoutSection className="flex flex-wrap">
        <Citation className="w-2/4 p-3 align-middle"
                  author="antoine burgaudeau"
                  authorJob="developeur"
                  citation="Lorem Ipsum est simplement un texte factice de l'industrie de l'impression et de la composition. Lorem Ipsum a été le texte factice standard de l'industrie depuis les années 1500 "/>
        <div className="w-2/4 p-3">
            <img src="/images/citation.svg" className="mx-auto"/>
        </div>
    </LayoutSection>
)

export default TestimonySection

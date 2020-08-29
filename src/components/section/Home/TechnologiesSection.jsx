import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {HeaderSection} from "../../header";
import {Carousel} from "../../carousel";
import {technologies} from "../../../constants/data";
import {CardTechnologie} from "../../card";
import {LayoutSection} from "../../layout";

const TechnologiesSection = ({className}) => {

    const classes = classNames(
        "mt-32 mb-32"
    )

    return (
        <LayoutSection>
            <HeaderSection title={"Les technologie avec lequel je travail"} description="Pour être un bon developpeur, il faut avoir des compétence dans tout les domaine" className="w-1/3"/>
            <Carousel className="mt-16">
                {technologies.map( (item,index) => (
                    <CardTechnologie
                        key={index} title={item.title}
                        className={classNames({'mr-20': index < technologies.length - 1})}
                    />
                ))}
            </Carousel>
        </LayoutSection>
    )
}

export default TechnologiesSection

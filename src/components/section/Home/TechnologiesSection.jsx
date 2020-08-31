import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {HeaderSection} from "../../header";
import {Carousel} from "../../carousel";
import {technologies} from "../../../constants/data";
import {CardTechnologie} from "../../card";
import {LayoutSection} from "../../layout";
import {TextInformation} from "../../content";

const TechnologiesSection = ({className}) => {

    const classes = classNames(
        "mt-32 mb-32"
    )

    return (
        <LayoutSection>
            <HeaderSection title="Les technologies avec lesquelles je travaille" description="Pour être un bon développeur, il faut avoir des compétence dans tous les domaines." className="w-1/3"/>
            <Carousel className="mt-16">
                {technologies.map( (item) => (
                    <CardTechnologie
                        key={item.title} title={item.title}
                        className="mr-20"
                    />
                ))}
            </Carousel>
            <div className="flex mt-16">
                <TextInformation label="24" describe="Technologies" />
                <TextInformation className="ml-24" label="3" describe="Années d'expérience" />
            </div>
        </LayoutSection>
    )
}

export default TechnologiesSection

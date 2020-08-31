import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {HeaderSection} from "../../header";
import {CardThematique} from "../../card";
import {LayoutSection} from "../../layout";

const WhoSection = () => (
    <LayoutSection>
        <HeaderSection title="Qui suis je ?" description="Apprenez qui je suis grace aux deux sections ci dessous." className="w-1/3"/>
        <div className="flex flex-wrap mt-16">
            <CardThematique className="md:w-2/4 w-full h-400 pr-10"
                            bgColor="#E1F8EB"
                            title="Mes Travaux"
                            variant="dark"
                            description="J’effectue de nombreux projet dans différent domaine si bien frontend que backend."
                            btnTitle="Mes travaux" />
            <CardThematique className="md:w-2/4 w-full h-400 pl-10"
                            bgColor="#F8F5E1"
                            variant="dark"
                            title="Mes Travaux"
                            description="J’effectue de nombreux projet dans différent domaine si bien frontend que backend."
                            btnTitle="Mes travaux" />
        </div>
    </LayoutSection>
)

export default WhoSection

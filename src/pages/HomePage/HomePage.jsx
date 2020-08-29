import React from 'react';
import classNames from 'classnames';
import {Button} from "../../components/button";
import { CardThematique, CardTechnologie } from "../../components/card";
import { technologies } from "../../constants/data";
import { Carousel } from '../../components/carousel';
import { HeaderSection } from '../../components/header';
import {Citation} from "../../components/testimony";
import {LayoutContainer, LayoutSection} from "../../components/layout";



const HomePage = () => {
    return (
        <LayoutContainer>
            <LayoutSection className="flex justify-between">
                <div>
                    <h1 className="text-6xl leading-none font-semibold">Alexandre<br />Cailler</h1>
                    <p className="pt-8">Developpeur aux multiples competence</p>
                    <p className="pt-8 text-gray-600">Vous êtes a la recherche d’un developpeur, venez me voir.</p>
                    <Button variant="xs" className="mt-8">Let chats!</Button>
                </div>
            </LayoutSection>
            <LayoutSection>
                <CardThematique className="h-64"
                                bgImage="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                title="Mes Travaux"
                                variant="light"
                                description="J’effectue de nombreux projet dans différent domaine si bien frontend que backend"
                                btnTitle="Mes travaux" />
            </LayoutSection>
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
            <LayoutSection>
                <HeaderSection title="Qui suis je ?" description="Apprenez qui je suis grace aux deux sections ci dessous." className="w-1/3"/>
                <div className="flex flex-wrap mt-16">
                    <CardThematique className="md:w-2/4 w-full h-400 pr-10"
                                    bgColor="#E1F8EB"
                                    title="Mes Travaux"
                                    variant="dark"
                                    description="J’effectue de nombreux projet dans différent domaine si bien frontend que backend"
                                    btnTitle="Mes travaux" />
                    <CardThematique className="md:w-2/4 w-full h-400 pl-10"
                                    bgColor="#F8F5E1"
                                    variant="dark"
                                    title="Mes Travaux"
                                    description="J’effectue de nombreux projet dans différent domaine si bien frontend que backend"
                                    btnTitle="Mes travaux" />
                </div>
            </LayoutSection>
            <LayoutSection className="flex flex-wrap">
                <Citation className="w-2/4 p-3 align-middle"
                          author="antoine burgaudeau"
                          authorJob="developeur"
                          citation="Lorem Ipsum est simplement un texte factice de l'industrie de l'impression et de la composition. Lorem Ipsum a été le texte factice standard de l'industrie depuis les années 1500 "/>
                <div className="w-2/4 p-3">
                   <img src="/images/citation.svg" className="mx-auto"/>
                </div>
            </LayoutSection>
            <LayoutSection>
                <div className="bg-orange-200 flex rounded-large p-12 px-24">
                    <div className="w-1/2">
                        <HeaderSection title="En quête de travail" description="Donc n'hésiter pas à me contacter"/>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <div>
                            <Button variant="sm" bgColor="bg-orange-500">let chats!</Button>
                        </div>
                    </div>
                </div>
            </LayoutSection>
        </LayoutContainer>
    );
};

export default HomePage;

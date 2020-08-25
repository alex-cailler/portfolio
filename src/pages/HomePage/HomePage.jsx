import React from 'react';
import classNames from 'classnames';
import {Button} from "../../components/button";
import { CardThematique } from "../../components/card";
import { technologies } from "../../constants/data";

const HomePage = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-6xl leading-none font-semibold">Alexandre<br />Cailler</h1>
                    <p className="pt-8">Developpeur aux multiples competence</p>
                    <p className="pt-8 text-gray-600">Vous êtes a la recherche d’un developpeur, venez me voir.</p>
                    <Button className="mt-8">Let chats!</Button>
                </div>
            </div>
            <div className="mt-32 mb-32">
                <CardThematique className="h-64"
                                bgImage="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                title="Mes Travaux"
                                description="J’effectue de nombreux projet dans différent domaine si bien frontend que backend"
                                btnTitle="Mes travaux" />
            </div>
            <div>
                <h1 className="text-4xl leading-none font-semibold">Les technologie avec <br /> lequel je travail </h1>
                <p className="pt-5 text-gray-600">Pour être un bon developpeur, il faut avoir des compétence dans tout les domaine</p>
                <div className="flex flex-no-wrap overflow-x-auto">
                    {technologies.map( (item,index) => (
                      <div
                        key={index}
                        className={classNames('rounded-large w-32 bg-yellow-200 h-56 p-5 flex-shrink-0', {'mr-3': index < technologies.length - 1})}>
                        {item.title}
                      </div>
                    ))}
                </div>
            </div>
            <div className="mt-32 mb-32">
                <h1 className="text-4xl leading-none font-semibold">Qui suis je ?</h1>
                <p className="pt-5 text-gray-600">Apprenez qui je suis grace aux deux sections ci dessous.</p>
                <div className="flex flex-wrap">
                    <CardThematique className="md:w-2/4 w-full h-400 p-3"
                                    bgImage="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                    title="Mes Travaux"
                                    description="J’effectue de nombreux projet dans différent domaine si bien frontend que backend"
                                    btnTitle="Mes travaux" />
                    <CardThematique className="md:w-2/4 w-full h-400 p-3"
                                    bgImage="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                    title="Mes Travaux"
                                    description="J’effectue de nombreux projet dans différent domaine si bien frontend que backend"
                                    btnTitle="Mes travaux" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;

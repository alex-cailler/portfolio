import React from 'react';
import {FormContact} from "../../components/forms";
import {TextInformation} from "../../components/content";
import { socialNetworks} from "../../constants/data";
import {CardSocialNetwork} from "../../components/card";

const ContactPage = () => {
    return (
        <div className="container mx-auto flex mt-64">
            <div className="w-1/2">
                <FormContact/>
            </div>
            <div className="w-1/2 pl-32">
                <h1 className="text-6xl leading-none">Contacter moi</h1>
                <div className="mt-16 mb-16">
                    <TextInformation label="email" describe="alex02.cailler@gmail.com"/>
                    <TextInformation label="mobil" className="mt-5" describe="+33 7 81 47 91 70 "/>
                </div>
                <div className="bg-orange-100 flex justify-between rounded-large p-6 px-16">
                    {socialNetworks.map(item =>
                         (
                            <CardSocialNetwork
                                className="p-3"
                                logoUrl={item.logoUrl}
                                name={item.name}
                                key={item.name}
                                link={item.link}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

import React from "react"
import classNames from "classnames";
import {socialNetworks} from "../../../constants/data";
import {TextInformation} from "../../content";
import {CardSocialNetwork} from "../../card";

const RightSection = () => {
    return (
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
    )
}

export default RightSection

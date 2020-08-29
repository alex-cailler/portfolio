import React from "react";
import {Button} from "../../button";
import {LayoutSection} from "../../layout";

const IntroduceSection = () => {
    return (
        <LayoutSection className="flex justify-between">
            <div>
                <h1 className="text-6xl leading-none font-semibold">Alexandre<br />Cailler</h1>
                <p className="pt-8">Developpeur aux multiples competence</p>
                <p className="pt-8 text-gray-600">Vous êtes a la recherche d’un developpeur, venez me voir.</p>
                <Button variant="xs" className="mt-8">Let chats!</Button>
            </div>
        </LayoutSection>
    )
}

export default IntroduceSection

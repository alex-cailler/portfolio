import React from "react";
import {LayoutContainer, LayoutSection} from "../../layout";
import {HeaderSection} from "../../header";
import {Button} from "../../button";

const LetChatSection = () => {
    return (
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
    )
}

export default LetChatSection

import React from 'react';
import {FormContact} from "../../components/forms";
import {LayoutContainer} from "../../components/layout";
import {ContactRightSection} from "../../components/section";

const ContactPage = () => {
    return (
        <LayoutContainer>
            <div className="flex mt-64">
                <div className="w-1/2">
                    <FormContact/>
                </div>
               <ContactRightSection />
            </div>
        </LayoutContainer>
    );
};

export default ContactPage;

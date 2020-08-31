import React from 'react';
import { CardThematique } from "../../components/card";
import {LayoutContainer, LayoutSection} from "../../components/layout";
import {LetChat, ProfileIntroduceSection, Technologies, Testimony, WhoIAm} from "../../components/section";

const HomePage = () => {
    return (
        <LayoutContainer>
            <ProfileIntroduceSection />
            <LayoutSection>
                <CardThematique className="h-64"
                                bgImage="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                title="Mes travaux"
                                variant="light"
                                description="J’effectue de nombreux projets dans différents domaine si bien frontend que backend"
                                btnTitle="Mes travaux" />
            </LayoutSection>
            <Technologies />
            <WhoIAm />
            <Testimony />
            <LetChat />
        </LayoutContainer>
    );
};

export default HomePage;

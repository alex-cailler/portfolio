import React from 'react';
import {DesignSection} from "../../components/section";
import {designs} from "../../constants/data";

const DesignPage = () => {
    return (
        <div>
            <h1 className="text-6xl leading-none font-semibold">Design</h1>
            <DesignSection designs={designs} />
        </div>
    );
};

export default DesignPage;

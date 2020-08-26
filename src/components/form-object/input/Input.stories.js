
import React from 'react';
import Input , { types as inputTypes } from './Input';

export default {
    title: 'Inputs/Input',
    component: Input,
    parameters: {
        componentSubtitle: 'Visual wrapper of an HTML input.',
    },
};

export const Component = () => (
    <div className="p-8 rounded-large">
        <Input>Input</Input>
    </div>
);

export const types = () => (
    <React.Fragment>
        {inputTypes.map((type) => (
            <div className="p-8" key={type}>
                <Input type={type}>{type} Input</Input>
            </div>
        ))}
    </React.Fragment>
);

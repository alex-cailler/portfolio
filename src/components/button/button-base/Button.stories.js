
import React from 'react';
import Button, { types as buttonTypes } from './Button';

export default {
    title: 'Buttons/Button',
    component: Button,
    parameters: {
        componentSubtitle: 'Visual wrapper of an HTML button with built-in variants.',
    },
};

export const Component = () => (
    <div className="p-8 rounded-full">
        <Button>button</Button>
    </div>
);

export const types = () => (
    <React.Fragment>
        {buttonTypes.map((type) => (
            <div className="p-8" key={type}>
                <Button type={type}>{type} button</Button>
            </div>
        ))}
    </React.Fragment>
);

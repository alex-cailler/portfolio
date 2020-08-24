
import React from 'react';
import Textarea from './Textarea';

export default {
    title: 'Inputs/Input',
    component: Textarea,
    parameters: {
        componentSubtitle: 'Visual wrapper of an HTML textarea.',
    },
};

export const Component = () => (
    <div className="p-8 rounded-large">
        <Textarea />
    </div>
);

export const types = () => (
    <React.Fragment>
        <div className="p-8">
            <Textarea cols={5}> Input</Textarea>
        </div>
    </React.Fragment>
);

import React from 'react';
import { addDecorator } from '@storybook/react';
import '../src/scss/tailwind.scss';

// addDecorator(storyFn => <div>{storyFn()}</div>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

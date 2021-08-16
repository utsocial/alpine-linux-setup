import React from 'react';
import { Button } from '@chakra-ui/core';
import {action, actions } from '@storybook/addon-actions';
import {text, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Chackra/Button',
    component: Button,

    // argTypes: { 
    //     variantColor: {control : 'text'},
    //     children: {control : 'text'},
    //     onClick: {action : 'clicked'},
    // } 

}

export const Success = () => 
    <Button 
        onClick={action('Click handler')}
        variantColor='green'>
        Success
    </Button>
export const Danger = () => 
    <Button
        {...actions('onClick','onMouseOver')} 
        variantColor='red'>
        Danger
    </Button>

export const Log = () => 
    <Button
        onClick={() => console.log('Button clicked')}
        variantColor='blue'>
        Log
    </Button>

/*
// Using Args V6
const Template = args => <Button {...args} />
export const Success = Template.bind({})
Success.args = {
    variantColor: 'green',
    children: 'Sucess'
}

export const Damger = Template.bind({})
Damger.args = {
    variantColor: 'red',
    children: 'Danger'
}
*/

export const Knobs = () => (
    <Button 
        variantColor='purple'
        disabled={boolean('Disable',false)}>
        {text('Label XyZ', 'Button Label Knobs')}
    </Button>
    )


/*
export const withAButton = () => (
    <button disabled={boolean('Disabled', false)}>{text('Label', 'Hello Storybook')}</button>
  );
*/

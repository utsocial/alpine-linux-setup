import React from 'react'
import Button from './Button'
// import Center from '../Center/Center' // commented b/c is in preview.js global now

export default {
    title: 'Form/Button',
    component: Button,
    // decorators: [story => <Center> {story()} </Center> ] // instaed to add it in each story component
}

export const Primary = () =>     
    <Button variant='primary'>
        Primary
    </Button>
export const Secondary = () => <Button variant='secundary'>Secundary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = arg => <Button {...arg} />

const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant  : 'primary',
    childern: 'Primary Args'
}

// Extend the props
export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long Primary Args' // Here is the optional propery we could add
}

const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant  : 'secondary',
    childern: 'Secondary Args' // Here is the optional propery we could add
}

import React from 'react'
import Button from './Button'

export default {
    title: 'Form/Button',
    component: Button
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secundary'>Secundary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>
/*
const Template = arg = > <Button {..arg} />

const PrimaryA = Template.bind({})
PrimaryA.arg = {
    variant  : 'primary',
    childern: 'Primary Args'
}

const SecundaryA = Template.bind({})
Secundary.arg = {
    variant  : 'secundary',
    childern: 'Secundary Args'
}
*/
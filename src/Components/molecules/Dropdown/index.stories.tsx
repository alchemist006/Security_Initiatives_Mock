import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DropDown from ".";
import theme from '../../../core-utils/theme';

export default {
    title: "Molecule/DropDown",
    component: DropDown
} as ComponentMeta<typeof DropDown>;

const Template : ComponentStory<typeof DropDown> = args => (
    <DropDown {...args}/>
    );
    export const DropDownStory = Template.bind({});

    DropDownStory.args = {
        style: {width: theme.spacing(32),
            height: theme.spacing(10.5),
            margin: theme.spacing(1.75),
            borderRadius: theme.spacing(2)},
        name: "Categories"
    }
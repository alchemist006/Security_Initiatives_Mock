import * as React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomePage from "."
import { BrowserRouter } from "react-router-dom";

export default {
    title: "Page/HomePage",
    component: HomePage
} as ComponentMeta<typeof HomePage>;

const Template : ComponentStory<typeof HomePage> = () => (
    <BrowserRouter>
    <HomePage/>
    </BrowserRouter>
    );
    export const HomePageStory = Template.bind({});

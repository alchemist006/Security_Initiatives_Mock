import * as React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import HomePageDetail from ".";
import { BrowserRouter } from 'react-router-dom';

export default {
	title: "Organism/HomePageDetail",
	component: HomePageDetail,
} as ComponentMeta<typeof HomePageDetail>;

const Template: ComponentStory<typeof HomePageDetail> = () => (
<BrowserRouter>
<HomePageDetail />
</BrowserRouter>
)

export const HomePageDetailStory = Template.bind({});
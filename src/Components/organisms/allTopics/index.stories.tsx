import * as React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AllTopics from ".";
import { BrowserRouter } from 'react-router-dom';

export default {
	title: "Organism/AllTopics",
	component: AllTopics,
} as ComponentMeta<typeof AllTopics>;

const Template: ComponentStory<typeof AllTopics> = () => (
<BrowserRouter>
<AllTopics />
</BrowserRouter>
)

export const AllTopicStory = Template.bind({});
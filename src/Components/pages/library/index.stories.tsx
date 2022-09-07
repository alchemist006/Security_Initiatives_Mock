import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LibraryPage from '.';

export default {
	title: 'Pages/Library',
	component: LibraryPage,
} as ComponentMeta<typeof LibraryPage>;

const Template: ComponentStory<typeof LibraryPage> = (args) => (
	<BrowserRouter>
	<LibraryPage {...args} />
	</BrowserRouter>
);

export const LibraryPageStory = Template.bind({});

LibraryPageStory.args = {};

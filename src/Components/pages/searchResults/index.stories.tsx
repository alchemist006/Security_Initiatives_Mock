import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import SearchResultsPage from ".";

export default {
    title: 'Page/Search Results Page',
    component: SearchResultsPage
}as ComponentMeta<typeof SearchResultsPage>

const Template: ComponentStory<typeof SearchResultsPage> = (args) => (
    <BrowserRouter>
    <SearchResultsPage {...args} />
    </BrowserRouter>
)

export const SearchResults = Template.bind({});


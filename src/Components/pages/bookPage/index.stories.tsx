import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookPage from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Page/BookPage",
  component: BookPage,
} as ComponentMeta<typeof BookPage>;

const Template: ComponentStory<typeof BookPage> = () => (
<BrowserRouter>
<BookPage id={1} />
</BrowserRouter>
)

export const BookPageStory = Template.bind({});

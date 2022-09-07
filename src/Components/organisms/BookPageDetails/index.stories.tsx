import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookPageDetails from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Organism/BookPageDetails",
  component: BookPageDetails,
} as ComponentMeta<typeof BookPageDetails>;

const Template: ComponentStory<typeof BookPageDetails> = () => (
  <BrowserRouter>
  <BookPageDetails id={5} />
  </BrowserRouter>
);

export const BookPageStory = Template.bind({});

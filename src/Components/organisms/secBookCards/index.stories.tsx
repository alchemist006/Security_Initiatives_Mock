import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardGroup from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Organism/CardGroup",
  component: CardGroup,
} as ComponentMeta<typeof CardGroup>;

const Template: ComponentStory<typeof CardGroup> = () => (
  <BrowserRouter>
<CardGroup filterType={"recommendations"} heading={"Recommendations"}/>
  </BrowserRouter>
)

export const cardGroup = Template.bind({});

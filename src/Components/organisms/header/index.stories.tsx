import { Story } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./index";

export default {
  title: "Organism/Header",
};


const Template: Story = () => (
  <BrowserRouter>
  <HeaderComponent isLibrary={false} />
  </BrowserRouter>
);

export const header = Template.bind({});


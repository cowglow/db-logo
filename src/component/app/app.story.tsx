import React from "react";
import { Meta, Story } from "@storybook/react";
import App from "./app";

export default {
  title: "components",
  component: App,
} as Meta;

export const AppStory: Story = () => <App />;

AppStory.storyName = "app";

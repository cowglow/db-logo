import React from "react";
import { Meta } from "@storybook/react";
import HocDbsLogo from "./hoc-dbs-logo";

export default {
  title: "components",
  component: HocDbsLogo,
  options: { showPanel: false },
} as Meta;

export const HocDbsLogoStory = () => <HocDbsLogo />;

HocDbsLogoStory.storyName = "hoc-dbs-logo";

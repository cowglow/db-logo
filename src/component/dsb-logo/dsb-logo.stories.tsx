import React from "react";
import { Meta } from "@storybook/react";
import DbsLogo from "./dbs-logo";

export default {
  title: "Components/DBS Logo",
  component: DbsLogo,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as Meta;

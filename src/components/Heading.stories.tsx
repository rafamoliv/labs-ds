import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Hello World",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj = {};

export const Small: StoryObj = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj = {
  args: {
    asChild: true,
    children: <h1>Lorem Ipsum</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

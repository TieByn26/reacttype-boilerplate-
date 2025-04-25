import { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./toast";

const meta = {
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

export const Information: Story = {
  args: {
    title: "This is title",
    message: "This is a message",
    type: "info",
    onDismiss: () => {},
  },
};

export const Success: Story = {
  args: {
    title: "This is title",
    message: "This is a message",
    type: "success",
    onDismiss: () => {},
  },
};

export const Warn: Story = {
  args: {
    title: "This is title",
    message: "This is a message",
    type: "warn",
    onDismiss: () => {},
  },
};

export const Error: Story = {
  args: {
    title: "This is title",
    message: "This is a message",
    type: "error",
    onDismiss: () => {},
  },
};

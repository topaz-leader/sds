import type { Meta, StoryObj } from "@storybook/react";
import { MyLandingPage } from "../../examples/MyLandingPage";

const meta: Meta<typeof MyLandingPage> = {
  component: MyLandingPage,
  title: "SDS/Pages/My Landing Page",
  parameters: { layout: "fullscreen" },
};
export default meta;

export const Default: StoryObj<typeof MyLandingPage> = {
  render: () => <MyLandingPage />,
};

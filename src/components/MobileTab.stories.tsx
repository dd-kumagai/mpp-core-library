import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MobileTab } from "./Tab";

const meta: Meta<typeof MobileTab> = {
  title: "Components/Tab/MobileTab",
  component: MobileTab,
  args: {
    items: [
      { label: "タブ1", value: "tab1" },
      { label: "タブ2", value: "tab2" },
    ],
    value: "tab1",
  },
};

export default meta;
type Story = StoryObj<typeof MobileTab>;

export const Tab1Selected: Story = {};

export const Tab2Selected: Story = {
  args: { value: "tab2" },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("tab1");
    return (
      <MobileTab
        items={[
          { label: "おでかけ", value: "tab1" },
          { label: "うちのこ", value: "tab2" },
        ]}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

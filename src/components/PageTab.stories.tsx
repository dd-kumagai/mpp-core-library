import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageTab } from "./Tab";

const meta: Meta<typeof PageTab> = {
  title: "Components/Tab/PageTab",
  component: PageTab,
  args: {
    children: "ラベル",
    selected: false,
  },
};

export default meta;
type Story = StoryObj<typeof PageTab>;

export const Default: Story = {};

export const Selected: Story = {
  args: { selected: true },
};

export const Group: Story = {
  render: () => {
    const [active, setActive] = useState("tab1");
    return (
      <div style={{ display: "flex" }}>
        <PageTab selected={active === "tab1"} onClick={() => setActive("tab1")}>契約者</PageTab>
        <PageTab selected={active === "tab2"} onClick={() => setActive("tab2")}>CA</PageTab>
        <PageTab selected={active === "tab3"} onClick={() => setActive("tab3")}>お問い合わせ</PageTab>
      </div>
    );
  },
};

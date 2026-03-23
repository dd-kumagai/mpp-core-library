import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTab } from "./Tab";

const meta: Meta<typeof DataTab> = {
  title: "Components/Tab/DataTab",
  component: DataTab,
  args: {
    children: "ラベル",
    selected: false,
  },
};

export default meta;
type Story = StoryObj<typeof DataTab>;

export const Default: Story = {};

export const Selected: Story = {
  args: { selected: true },
};

export const Group: Story = {
  render: () => {
    const [active, setActive] = useState("all");
    return (
      <div style={{ display: "flex" }}>
        <DataTab selected={active === "all"} onClick={() => setActive("all")}>すべて</DataTab>
        <DataTab selected={active === "active"} onClick={() => setActive("active")}>有効</DataTab>
        <DataTab selected={active === "inactive"} onClick={() => setActive("inactive")}>無効</DataTab>
      </div>
    );
  },
};

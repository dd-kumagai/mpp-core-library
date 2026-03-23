import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logomark } from "./Logo";

const meta: Meta<typeof Logomark> = {
  title: "Components/Logomark",
  component: Logomark,
  args: {
    size: 80,
  },
};

export default meta;

type Story = StoryObj<typeof Logomark>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Logomark size={24} />
      <Logomark size={40} />
      <Logomark size={64} />
      <Logomark size={96} />
      <Logomark size={128} />
    </div>
  ),
};

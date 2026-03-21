import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge.tsx";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    color: {
      control: "select",
      options: ["neutral", "blue", "green", "yellow", "orange", "red"],
    },
    variant: {
      control: "select",
      options: ["subtle", "strong"],
    },
    label: { control: "text" },
  },
  args: {
    label: "ラベル",
    color: "neutral",
    variant: "subtle",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

const colors = ["neutral", "blue", "green", "yellow", "orange", "red"] as const;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-md p-md font-body">
      <h2 className="font-heading text-h2 font-bold text-text-default">
        Badge — All Variants
      </h2>

      {/* Subtle */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">Subtle</h3>
        <div className="flex flex-wrap items-center gap-xs">
          {colors.map((color) => (
            <Badge key={color} label="ラベル" color={color} variant="subtle" />
          ))}
        </div>
      </div>

      {/* Strong */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">Strong</h3>
        <div className="flex flex-wrap items-center gap-xs">
          {colors.map((color) => (
            <Badge key={color} label="ラベル" color={color} variant="strong" />
          ))}
        </div>
      </div>
    </div>
  ),
};

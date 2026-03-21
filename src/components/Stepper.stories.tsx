import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "./Stepper.tsx";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
  },
  args: {
    defaultValue: 0,
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(3);
    return (
      <div className="flex flex-col gap-xs p-md font-body">
        <Stepper value={value} onChange={setValue} min={0} max={10} />
        <p className="text-sm text-text-subtle">Value: {value}</p>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-md p-md font-body">
      <h2 className="font-heading text-h2 font-bold text-text-default">
        Stepper — All Variants
      </h2>

      <div className="flex flex-col gap-xs">
        <div className="flex items-center gap-sm">
          <span className="text-base text-text-subtle w-[120px]">Default</span>
          <Stepper defaultValue={0} />
        </div>
        <div className="flex items-center gap-sm">
          <span className="text-base text-text-subtle w-[120px]">Min 0, Max 5</span>
          <Stepper defaultValue={3} min={0} max={5} />
        </div>
        <div className="flex items-center gap-sm">
          <span className="text-base text-text-subtle w-[120px]">Disabled</span>
          <Stepper defaultValue={2} disabled />
        </div>
      </div>
    </div>
  ),
};

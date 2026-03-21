import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox.tsx";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: "select",
      options: ["lg", "sm"],
    },
    label: { control: "text" },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
  args: {
    label: "ラベル",
    size: "lg",
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-md p-md font-body">
      <h2 className="font-heading text-h2 font-bold text-text-default">
        Checkbox — All Variants
      </h2>

      {/* Large with label */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Large (with label)
        </h3>
        <div className="flex flex-col">
          <Checkbox label="ラベル" size="lg" />
          <Checkbox label="ラベル" size="lg" defaultChecked />
        </div>
      </div>

      {/* Small with label */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Small (with label)
        </h3>
        <div className="flex flex-col">
          <Checkbox label="ラベル" size="sm" />
          <Checkbox label="ラベル" size="sm" defaultChecked />
        </div>
      </div>

      {/* Without label */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Without Label
        </h3>
        <div className="flex items-center gap-xs">
          <Checkbox size="lg" />
          <Checkbox size="lg" defaultChecked />
          <Checkbox size="sm" />
          <Checkbox size="sm" defaultChecked />
        </div>
      </div>

      {/* Fit */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Fit (shrink-wrap)
        </h3>
        <div className="flex flex-col">
          <Checkbox label="ラベル" size="lg" fit />
          <Checkbox label="ラベル" size="lg" fit defaultChecked />
          <Checkbox label="ラベル" size="sm" fit />
          <Checkbox label="ラベル" size="sm" fit defaultChecked />
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Disabled
        </h3>
        <div className="flex flex-col">
          <Checkbox label="ラベル" size="lg" disabled />
          <Checkbox label="ラベル" size="lg" disabled defaultChecked />
        </div>
      </div>
    </div>
  ),
};

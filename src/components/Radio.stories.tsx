import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio.tsx";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
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
    name: "demo",
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-md p-md font-body">
      <h2 className="font-heading text-h2 font-bold text-text-default">
        Radio — All Variants
      </h2>

      {/* Large with label */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Large (with label)
        </h3>
        <div className="flex flex-col">
          <Radio label="ラベル" name="radio-lg" value="1" size="lg" />
          <Radio
            label="ラベル"
            name="radio-lg"
            value="2"
            size="lg"
            defaultChecked
          />
        </div>
      </div>

      {/* Small with label */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Small (with label)
        </h3>
        <div className="flex flex-col">
          <Radio label="ラベル" name="radio-sm" value="1" size="sm" />
          <Radio
            label="ラベル"
            name="radio-sm"
            value="2"
            size="sm"
            defaultChecked
          />
        </div>
      </div>

      {/* Without label */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Without Label
        </h3>
        <div className="flex items-center gap-xs">
          <Radio name="radio-bare" value="1" size="lg" />
          <Radio name="radio-bare" value="2" size="lg" defaultChecked />
          <Radio name="radio-bare-sm" value="1" size="sm" />
          <Radio name="radio-bare-sm" value="2" size="sm" defaultChecked />
        </div>
      </div>

      {/* Fit */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Fit (shrink-wrap)
        </h3>
        <div className="flex flex-col">
          <Radio label="ラベル" name="radio-fit" value="1" size="lg" fit />
          <Radio
            label="ラベル"
            name="radio-fit"
            value="2"
            size="lg"
            fit
            defaultChecked
          />
          <Radio label="ラベル" name="radio-fit-sm" value="1" size="sm" fit />
          <Radio
            label="ラベル"
            name="radio-fit-sm"
            value="2"
            size="sm"
            fit
            defaultChecked
          />
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Disabled
        </h3>
        <div className="flex flex-col">
          <Radio label="ラベル" name="radio-dis" value="1" size="lg" disabled />
          <Radio
            label="ラベル"
            name="radio-dis"
            value="2"
            size="lg"
            disabled
            defaultChecked
          />
        </div>
      </div>
    </div>
  ),
};

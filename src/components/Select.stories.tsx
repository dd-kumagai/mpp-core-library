import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select.tsx";

const sampleOptions = [
  { value: "option1", label: "オプション 1" },
  { value: "option2", label: "オプション 2" },
  { value: "option3", label: "オプション 3" },
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    layout: {
      control: "select",
      options: ["vertical", "inline"],
    },
    label: { control: "text" },
    helper: { control: "text" },
    placeholder: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "ラベル",
    placeholder: "選択してください",
    layout: "vertical",
    required: true,
    options: sampleOptions,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-md p-md font-body">
      <h2 className="font-heading text-h2 font-bold text-text-default">
        Select — All Variants
      </h2>

      {/* Vertical */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Vertical Layout
        </h3>
        <div className="flex gap-sm flex-wrap">
          <Select
            label="ラベル"
            required
            placeholder="選択してください"
            options={sampleOptions}
            className="w-[335px]"
          />
          <Select
            label="ラベル"
            required
            options={sampleOptions}
            defaultValue="option1"
            className="w-[335px]"
          />
        </div>
      </div>

      {/* Inline */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Inline Layout
        </h3>
        <div className="flex flex-col gap-xs">
          <Select
            label="ラベル"
            layout="inline"
            placeholder="選択してください"
            options={sampleOptions}
            className="w-[220px]"
          />
          <Select
            label="ラベル"
            layout="inline"
            options={sampleOptions}
            defaultValue="option1"
            className="w-[220px]"
          />
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Disabled
        </h3>
        <Select
          label="ラベル"
          required
          options={sampleOptions}
          defaultValue="option1"
          disabled
          className="w-[335px]"
        />
      </div>
    </div>
  ),
};

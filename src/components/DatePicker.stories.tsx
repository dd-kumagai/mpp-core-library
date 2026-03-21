import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "./DatePicker.tsx";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  argTypes: {
    label: { control: "text" },
    range: { control: "boolean" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "ラベル",
    range: false,
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-md p-md font-body">
      <h2 className="font-heading text-h2 font-bold text-text-default">
        DatePicker — All Variants
      </h2>

      {/* Single */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Single Date
        </h3>
        <div className="flex flex-col gap-xs">
          <DatePicker label="ラベル" startPlaceholder="　" />
          <DatePicker
            label="ラベル"
            defaultValue="2026/01/01"
          />
        </div>
      </div>

      {/* Range */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Date Range
        </h3>
        <div className="flex flex-col gap-xs">
          <DatePicker
            label="ラベル"
            range
            startPlaceholder="　"
            endPlaceholder="　"
          />
          <DatePicker
            label="ラベル"
            range
            defaultValue="2026/01/01"
            defaultEndValue="2026/01/01"
          />
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Disabled
        </h3>
        <DatePicker
          label="ラベル"
          defaultValue="2026/01/01"
          disabled
        />
      </div>
    </div>
  ),
};

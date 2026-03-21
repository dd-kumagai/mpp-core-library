import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "./TextField.tsx";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
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
    placeholder: "インプット",
    layout: "vertical",
    required: true,
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-md p-md font-body">
      <h2 className="font-heading text-h2 font-bold text-text-default">
        TextField — All Variants
      </h2>

      {/* Vertical */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Vertical Layout
        </h3>
        <div className="flex gap-sm flex-wrap">
          <TextField
            label="ラベル"
            required
            placeholder="プレースホルダー"
            className="w-[335px]"
          />
          <TextField
            label="ラベル"
            required
            defaultValue="インプット"
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
          <TextField
            label="ラベル"
            layout="inline"
            placeholder="プレースホルダー"
            className="w-[220px]"
          />
          <TextField
            label="ラベル"
            layout="inline"
            defaultValue="インプット"
            className="w-[220px]"
          />
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Disabled
        </h3>
        <TextField
          label="ラベル"
          required
          defaultValue="インプット"
          disabled
          className="w-[335px]"
        />
      </div>
    </div>
  ),
};

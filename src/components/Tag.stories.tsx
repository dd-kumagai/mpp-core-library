import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag.tsx";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    label: { control: "text" },
    leadingIcon: { control: "text" },
    dismissible: { control: "boolean" },
  },
  args: {
    label: "ラベル",
    leadingIcon: "heart",
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-md p-md font-body">
      <h2 className="font-heading text-h2 font-bold text-text-default">
        Tag — All Variants
      </h2>

      {/* With leading icon */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          With Leading Icon
        </h3>
        <div className="flex items-center gap-xs">
          <Tag label="ラベル" leadingIcon="heart" />
        </div>
      </div>

      {/* Without leading icon */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Without Leading Icon
        </h3>
        <div className="flex items-center gap-xs">
          <Tag label="ラベル" />
        </div>
      </div>

      {/* Dismissible with leading icon */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Dismissible + Leading Icon
        </h3>
        <div className="flex items-center gap-xs">
          <Tag label="ラベル" leadingIcon="heart" dismissible />
        </div>
      </div>

      {/* Dismissible without leading icon */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Dismissible (no icon)
        </h3>
        <div className="flex items-center gap-xs">
          <Tag label="ラベル" dismissible />
        </div>
      </div>

      {/* Multiple tags */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Multiple Tags
        </h3>
        <div className="flex flex-wrap items-center gap-xs">
          <Tag label="React" leadingIcon="tag" />
          <Tag label="TypeScript" leadingIcon="tag" dismissible />
          <Tag label="Figma" leadingIcon="pen" />
          <Tag label="Storybook" dismissible />
        </div>
      </div>
    </div>
  ),
};

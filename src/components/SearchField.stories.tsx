import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchField } from "./SearchField.tsx";

const meta: Meta<typeof SearchField> = {
  title: "Components/SearchField",
  component: SearchField,
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    placeholder: "検索",
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-md p-md font-body">
      <h2 className="font-heading text-h2 font-bold text-text-default">
        SearchField — All Variants
      </h2>

      <div className="flex flex-col gap-xs">
        <SearchField placeholder="検索" className="w-[300px]" />
        <SearchField
          placeholder="検索"
          defaultValue="インプット"
          className="w-[300px]"
        />
        <SearchField
          placeholder="検索"
          disabled
          className="w-[300px]"
        />
      </div>
    </div>
  ),
};

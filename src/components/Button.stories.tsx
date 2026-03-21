import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button.tsx";
import { FloatingButton } from "./FloatingButton.tsx";
import { IconButton } from "./IconButton.tsx";

/* ═══════════════════════════════════════════
   Button
   ═══════════════════════════════════════════ */

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["lg", "sm"],
    },
    leadingIcon: {
      control: "select",
      options: [undefined, "heart", "search", "plus", "chevron_right", "star"],
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "ラベル",
    variant: "filled",
    size: "lg",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ─── Interactive playground ─── */

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    leadingIcon: "heart",
  },
};

/* ─── All variants at a glance ─── */

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-md p-md font-body">
      <h2 className="font-heading text-h2 font-bold text-text-default">
        Button — All Variants
      </h2>

      {/* Large */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">Large</h3>
        <div className="flex items-center gap-xs flex-wrap">
          <Button variant="filled" size="lg" leadingIcon="heart">
            Filled
          </Button>
          <Button variant="outline" size="lg" leadingIcon="heart">
            Outline
          </Button>
          <Button variant="ghost" size="lg" leadingIcon="heart">
            Ghost
          </Button>
        </div>
      </div>

      {/* Small */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">Small</h3>
        <div className="flex items-center gap-xs flex-wrap">
          <Button variant="filled" size="sm" leadingIcon="heart">
            Filled
          </Button>
          <Button variant="outline" size="sm" leadingIcon="heart">
            Outline
          </Button>
          <Button variant="ghost" size="sm" leadingIcon="heart">
            Ghost
          </Button>
        </div>
      </div>

      {/* Without icon */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Without Icon
        </h3>
        <div className="flex items-center gap-xs flex-wrap">
          <Button variant="filled" size="lg">
            Filled
          </Button>
          <Button variant="outline" size="lg">
            Outline
          </Button>
          <Button variant="ghost" size="lg">
            Ghost
          </Button>
          <Button variant="filled" size="sm">
            Filled
          </Button>
          <Button variant="outline" size="sm">
            Outline
          </Button>
          <Button variant="ghost" size="sm">
            Ghost
          </Button>
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Disabled
        </h3>
        <div className="flex items-center gap-xs flex-wrap">
          <Button variant="filled" size="lg" leadingIcon="heart" disabled>
            Filled
          </Button>
          <Button variant="outline" size="lg" leadingIcon="heart" disabled>
            Outline
          </Button>
          <Button variant="ghost" size="lg" leadingIcon="heart" disabled>
            Ghost
          </Button>
        </div>
      </div>

      {/* Icon Button */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Icon Button
        </h3>
        <div className="flex items-center gap-xs flex-wrap">
          <IconButton icon="heart" size="lg" aria-label="Favorite" />
          <IconButton icon="heart" size="md" aria-label="Favorite" />
          <IconButton icon="heart" size="sm" aria-label="Favorite" />
          <IconButton icon="heart" size="lg" aria-label="Favorite" disabled />
        </div>
        <p className="text-sm text-text-subtle mt-3xs">
          lg (48×48) · md (40×40) · sm (36×36)
        </p>
      </div>

      {/* Floating Button */}
      <div>
        <h3 className="text-base font-bold text-text-subtle mb-2xs">
          Floating Button
        </h3>
        <div className="flex items-center gap-xs flex-wrap">
          <FloatingButton leadingIcon="heart">ラベル</FloatingButton>
          <FloatingButton leadingIcon="heart" disabled>
            Disabled
          </FloatingButton>
        </div>
      </div>
    </div>
  ),
};

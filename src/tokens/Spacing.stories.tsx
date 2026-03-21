import type { Meta, StoryObj } from "@storybook/react-vite";

function SpacingSample({
  name,
  cssVar,
  value,
}: {
  name: string;
  cssVar: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-xs mb-2xs">
      <code className="font-mono text-sm text-text-default min-w-[80px] font-medium">
        {name}
      </code>
      <code className="font-mono text-xs text-text-subtle min-w-[60px]">
        {value}
      </code>
      <div className="flex-1 flex items-center">
        <div
          className="h-4 bg-blue-45 rounded-sm"
          style={{ width: value }}
        />
      </div>
      <code className="font-mono text-xs text-text-subtler">{cssVar}</code>
    </div>
  );
}

function RadiusSample({
  name,
  cssVar,
  value,
}: {
  name: string;
  cssVar: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-xs mb-2xs">
      <code className="font-mono text-sm text-text-default min-w-[80px] font-medium">
        {name}
      </code>
      <code className="font-mono text-xs text-text-subtle min-w-[60px]">
        {value}
      </code>
      <div
        className="w-16 h-16 bg-blue-95 border-2 border-blue-45"
        style={{ borderRadius: value }}
      />
      <code className="font-mono text-xs text-text-subtler">{cssVar}</code>
    </div>
  );
}

function AllSpacing() {
  return (
    <div className="p-md font-body">
      <h1 className="font-heading text-h1 font-bold text-text-default mb-md">
        Spacing & Radius
      </h1>

      <h2 className="font-heading text-h2 font-bold text-text-default mb-sm">
        Spacing Scale
      </h2>
      <p className="font-body text-base text-text-subtle mb-sm">
        Used for padding, margins, and gaps. Access via Tailwind utilities like{" "}
        <code className="bg-bg-neutral px-2xs py-3xs rounded-sm text-xs">
          p-sm
        </code>
        ,{" "}
        <code className="bg-bg-neutral px-2xs py-3xs rounded-sm text-xs">
          gap-xs
        </code>
        ,{" "}
        <code className="bg-bg-neutral px-2xs py-3xs rounded-sm text-xs">
          mb-md
        </code>
      </p>

      <div className="border border-border-default rounded-md p-sm mb-md">
        <SpacingSample name="3xs" cssVar="--spacing-3xs" value="4px" />
        <SpacingSample name="2xs" cssVar="--spacing-2xs" value="8px" />
        <SpacingSample name="xs" cssVar="--spacing-xs" value="12px" />
        <SpacingSample name="sm" cssVar="--spacing-sm" value="16px" />
        <SpacingSample name="md" cssVar="--spacing-md" value="24px" />
      </div>

      <hr className="my-md border-border-default" />

      <h2 className="font-heading text-h2 font-bold text-text-default mb-sm">
        Border Radius
      </h2>
      <p className="font-body text-base text-text-subtle mb-sm">
        Access via Tailwind utilities like{" "}
        <code className="bg-bg-neutral px-2xs py-3xs rounded-sm text-xs">
          rounded-sm
        </code>
        ,{" "}
        <code className="bg-bg-neutral px-2xs py-3xs rounded-sm text-xs">
          rounded-md
        </code>
        ,{" "}
        <code className="bg-bg-neutral px-2xs py-3xs rounded-sm text-xs">
          rounded-round
        </code>
      </p>

      <div className="border border-border-default rounded-md p-sm">
        <RadiusSample name="sm" cssVar="--radius-sm" value="4px" />
        <RadiusSample name="md" cssVar="--radius-md" value="8px" />
        <RadiusSample name="round" cssVar="--radius-round" value="50%" />
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Spacing & Radius",
  component: AllSpacing,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

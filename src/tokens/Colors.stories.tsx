import type { Meta, StoryObj } from "@storybook/react-vite";

function ColorSwatch({
  name,
  cssVar,
  value,
}: {
  name: string;
  cssVar: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-xs">
      <div
        className="w-12 h-12 rounded-md border border-border-default shrink-0"
        style={{ backgroundColor: value }}
      />
      <div className="flex flex-col">
        <span className="font-body text-base font-medium text-text-default">
          {name}
        </span>
        <code className="font-mono text-xs text-text-subtle">{cssVar}</code>
        <code className="font-mono text-xs text-text-subtler">{value}</code>
      </div>
    </div>
  );
}

function ColorGroup({
  title,
  colors,
}: {
  title: string;
  colors: { name: string; cssVar: string; value: string }[];
}) {
  return (
    <div className="mb-md">
      <h3 className="font-heading text-h3 font-bold text-text-default mb-xs">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-sm">
        {colors.map((color) => (
          <ColorSwatch key={color.cssVar} {...color} />
        ))}
      </div>
    </div>
  );
}

function SemanticColorRow({
  name,
  cssVar,
  mapsTo,
  value,
}: {
  name: string;
  cssVar: string;
  mapsTo: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-xs py-2xs border-b border-border-default">
      <div
        className="w-10 h-10 rounded-md border border-border-default shrink-0"
        style={{ backgroundColor: value }}
      />
      <div className="min-w-[160px]">
        <span className="font-body text-base font-medium text-text-default">
          {name}
        </span>
      </div>
      <code className="font-mono text-xs text-text-subtle min-w-[260px]">
        {cssVar}
      </code>
      <code className="font-mono text-xs text-text-subtler">
        &rarr; {mapsTo}
      </code>
    </div>
  );
}

function AllColors() {
  return (
    <div className="p-md font-body">
      <h1 className="font-heading text-h1 font-bold text-text-default mb-md">
        Colors
      </h1>

      {/* ─── Primitive Palette ─── */}
      <h2 className="font-heading text-h2 font-bold text-text-default mb-sm">
        Primitive Palette
      </h2>

      <ColorGroup
        title="Blue"
        colors={[
          { name: "15", cssVar: "--color-blue-15", value: "#002749" },
          { name: "35", cssVar: "--color-blue-35", value: "#0051a4" },
          { name: "45", cssVar: "--color-blue-45", value: "#0066dd" },
          { name: "55", cssVar: "--color-blue-55", value: "#0a85eb" },
          { name: "60", cssVar: "--color-blue-60", value: "#2c93f9" },
          { name: "65", cssVar: "--color-blue-65", value: "#4fa1f9" },
          { name: "95", cssVar: "--color-blue-95", value: "#eaf1ff" },
        ]}
      />

      <ColorGroup
        title="Blue 15 Alpha"
        colors={[
          {
            name: "10%",
            cssVar: "--color-blue15alpha-10",
            value: "rgba(0, 39, 73, 0.1)",
          },
          {
            name: "20%",
            cssVar: "--color-blue15alpha-20",
            value: "rgba(0, 39, 73, 0.2)",
          },
        ]}
      />

      <ColorGroup
        title="Red"
        colors={[
          { name: "45", cssVar: "--color-red-45", value: "#d3103a" },
          { name: "55", cssVar: "--color-red-55", value: "#ff3a3a" },
          { name: "60", cssVar: "--color-red-60", value: "#f75a67" },
          { name: "95", cssVar: "--color-red-95", value: "#ffedec" },
        ]}
      />

      <ColorGroup
        title="Green"
        colors={[
          { name: "45", cssVar: "--color-green-45", value: "#247a3a" },
          { name: "95", cssVar: "--color-green-95", value: "#dbf8e3" },
        ]}
      />

      <ColorGroup
        title="Yellow"
        colors={[
          { name: "45", cssVar: "--color-yellow-45", value: "#866600" },
          { name: "85", cssVar: "--color-yellow-85", value: "#f9d14b" },
          { name: "95", cssVar: "--color-yellow-95", value: "#f9f1cf" },
        ]}
      />

      <ColorGroup
        title="Orange"
        colors={[
          { name: "45", cssVar: "--color-orange-45", value: "#ba4400" },
          { name: "60", cssVar: "--color-orange-60", value: "#f26500" },
          { name: "95", cssVar: "--color-orange-95", value: "#ffeed8" },
        ]}
      />

      <ColorGroup
        title="Purple"
        colors={[
          { name: "45", cssVar: "--color-purple-45", value: "#8348d9" },
          { name: "95", cssVar: "--color-purple-95", value: "#f5edff" },
        ]}
      />

      <ColorGroup
        title="Neutral"
        colors={[
          { name: "10", cssVar: "--color-neutral-10", value: "#181c1f" },
          { name: "15", cssVar: "--color-neutral-15", value: "#22272b" },
          { name: "20", cssVar: "--color-neutral-20", value: "#2a3138" },
          { name: "25", cssVar: "--color-neutral-25", value: "#333c45" },
          { name: "45", cssVar: "--color-neutral-45", value: "#5e6b78" },
          { name: "55", cssVar: "--color-neutral-55", value: "#768493" },
          { name: "75", cssVar: "--color-neutral-75", value: "#afbac6" },
          { name: "85", cssVar: "--color-neutral-85", value: "#cfd5dc" },
          { name: "97", cssVar: "--color-neutral-97", value: "#f4f5f7" },
          { name: "100", cssVar: "--color-neutral-100", value: "#ffffff" },
        ]}
      />

      <hr className="my-md border-border-default" />

      {/* ─── Semantic Tokens ─── */}
      <h2 className="font-heading text-h2 font-bold text-text-default mb-sm">
        Semantic Tokens
      </h2>
      <p className="font-body text-base text-text-subtle mb-sm">
        Semantic tokens reference primitive palette values. Use these in
        components — never use primitives directly for text, background, or
        border colors.
      </p>

      <h3 className="font-heading text-h3 font-bold text-text-default mb-xs">
        Text
      </h3>
      <div className="mb-md">
        <SemanticColorRow name="Default" cssVar="--color-text-default" mapsTo="blue/15" value="#002749" />
        <SemanticColorRow name="Subtle" cssVar="--color-text-subtle" mapsTo="neutral/45" value="#5e6b78" />
        <SemanticColorRow name="Subtler" cssVar="--color-text-subtler" mapsTo="neutral/75" value="#afbac6" />
        <SemanticColorRow name="Inverse" cssVar="--color-text-inverse" mapsTo="neutral/100" value="#ffffff" />
        <SemanticColorRow name="Link" cssVar="--color-text-link" mapsTo="blue/45" value="#0066dd" />
        <SemanticColorRow name="Primary Stronger" cssVar="--color-text-primary-stronger" mapsTo="blue/45" value="#0066dd" />
        <SemanticColorRow name="Primary Strong" cssVar="--color-text-primary-strong" mapsTo="blue/60" value="#2c93f9" />
        <SemanticColorRow name="Secondary Strong" cssVar="--color-text-secondary-strong" mapsTo="red/60" value="#f75a67" />
      </div>

      <h3 className="font-heading text-h3 font-bold text-text-default mb-xs">
        Background
      </h3>
      <div className="mb-md">
        <SemanticColorRow name="Default" cssVar="--color-bg-default" mapsTo="neutral/100" value="#ffffff" />
        <SemanticColorRow name="Neutral" cssVar="--color-bg-neutral" mapsTo="neutral/97" value="#f4f5f7" />
        <SemanticColorRow name="Backdrop" cssVar="--color-bg-backdrop" mapsTo="blue15alpha/20" value="rgba(0,39,73,0.2)" />
        <SemanticColorRow name="Primary Stronger" cssVar="--color-bg-primary-stronger" mapsTo="blue/45" value="#0066dd" />
        <SemanticColorRow name="Primary Strong" cssVar="--color-bg-primary-strong" mapsTo="blue/60" value="#2c93f9" />
        <SemanticColorRow name="Secondary Stronger" cssVar="--color-bg-secondary-stronger" mapsTo="red/45" value="#d3103a" />
        <SemanticColorRow name="Secondary Strong" cssVar="--color-bg-secondary-strong" mapsTo="red/60" value="#f75a67" />
        <SemanticColorRow name="Input Selected" cssVar="--color-bg-input-selected" mapsTo="blue/15" value="#002749" />
      </div>

      <h3 className="font-heading text-h3 font-bold text-text-default mb-xs">
        Border
      </h3>
      <div className="mb-md">
        <SemanticColorRow name="Default" cssVar="--color-border-default" mapsTo="blue15alpha/10" value="rgba(0,39,73,0.1)" />
        <SemanticColorRow name="Focus" cssVar="--color-border-focus" mapsTo="blue/55" value="#0a85eb" />
        <SemanticColorRow name="Input Default" cssVar="--color-border-input-default" mapsTo="blue15alpha/20" value="rgba(0,39,73,0.2)" />
        <SemanticColorRow name="Input Strong" cssVar="--color-border-input-strong" mapsTo="neutral/45" value="#5e6b78" />
      </div>

      <h3 className="font-heading text-h3 font-bold text-text-default mb-xs">
        Input
      </h3>
      <div className="mb-md">
        <SemanticColorRow name="Subtle" cssVar="--color-input-subtle" mapsTo="neutral/100" value="#ffffff" />
        <SemanticColorRow name="Dark" cssVar="--color-input-dark" mapsTo="neutral/97" value="#f4f5f7" />
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Colors",
  component: AllColors,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

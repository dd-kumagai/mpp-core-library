import type { Meta, StoryObj } from "@storybook/react-vite";

function TypeSample({
  name,
  cssVarFamily,
  cssVarSize,
  family,
  size,
  weight,
  lineHeight,
  className,
}: {
  name: string;
  cssVarFamily: string;
  cssVarSize: string;
  family: string;
  size: string;
  weight: number;
  lineHeight: string;
  className: string;
}) {
  return (
    <div className="flex flex-col gap-3xs border-b border-border-default pb-sm mb-sm">
      <div className="flex items-baseline gap-xs">
        <span className="font-body text-sm font-bold text-text-default min-w-[140px]">
          {name}
        </span>
        <code className="font-mono text-xs text-text-subtle">
          {family} / {size} / {weight} / {lineHeight}
        </code>
      </div>
      <p className={className}>
        あいうえおABCDEあいうえおABCDE
      </p>
      <div className="flex gap-xs flex-wrap">
        <code className="font-mono text-xs text-text-subtler bg-bg-neutral px-2xs py-3xs rounded-sm">
          font-family: var({cssVarFamily})
        </code>
        <code className="font-mono text-xs text-text-subtler bg-bg-neutral px-2xs py-3xs rounded-sm">
          font-size: var({cssVarSize})
        </code>
      </div>
    </div>
  );
}

function AllTypography() {
  return (
    <div className="p-md font-body">
      <h1 className="font-heading text-h1 font-bold text-text-default mb-md">
        Typography
      </h1>

      <div className="mb-md">
        <h2 className="font-heading text-h2 font-bold text-text-default mb-sm">
          Font Families
        </h2>
        <div className="flex gap-md mb-sm">
          <div className="flex-1 border border-border-default rounded-md p-sm">
            <p className="font-heading text-h2 font-bold text-text-default mb-3xs">
              Murecho
            </p>
            <p className="font-body text-sm text-text-subtle">
              Headings (h1, h2, h3)
            </p>
            <p className="font-heading text-lg mt-xs text-text-default">
              あいうえおABCDE 12345
            </p>
          </div>
          <div className="flex-1 border border-border-default rounded-md p-sm">
            <p className="font-body text-h2 font-bold text-text-default mb-3xs">
              Noto Sans JP
            </p>
            <p className="font-body text-sm text-text-subtle">
              Body text (xs, sm, base, lg)
            </p>
            <p className="font-body text-lg mt-xs text-text-default">
              あいうえおABCDE 12345
            </p>
          </div>
        </div>
      </div>

      <hr className="my-md border-border-default" />

      <h2 className="font-heading text-h2 font-bold text-text-default mb-sm">
        Headings
      </h2>

      <TypeSample
        name="heading/h1"
        cssVarFamily="--font-heading"
        cssVarSize="--text-h1"
        family="Murecho"
        size="24px"
        weight={700}
        lineHeight="1.35"
        className="font-heading text-h1 font-bold leading-[1.35] text-text-default"
      />

      <TypeSample
        name="heading/h2"
        cssVarFamily="--font-heading"
        cssVarSize="--text-h2"
        family="Murecho"
        size="20px"
        weight={700}
        lineHeight="1.4"
        className="font-heading text-h2 font-bold leading-[1.4] text-text-default"
      />

      <TypeSample
        name="heading/h3"
        cssVarFamily="--font-heading"
        cssVarSize="--text-h3"
        family="Murecho"
        size="16px"
        weight={700}
        lineHeight="1.5"
        className="font-heading text-h3 font-bold leading-[1.5] text-text-default"
      />

      <hr className="my-md border-border-default" />

      <h2 className="font-heading text-h2 font-bold text-text-default mb-sm">
        Body
      </h2>

      <TypeSample
        name="body/lg"
        cssVarFamily="--font-body"
        cssVarSize="--text-lg"
        family="Noto Sans JP"
        size="16px"
        weight={400}
        lineHeight="1.5"
        className="font-body text-lg font-normal leading-[1.5] text-text-default"
      />

      <TypeSample
        name="body/lg-700"
        cssVarFamily="--font-body"
        cssVarSize="--text-lg"
        family="Noto Sans JP"
        size="16px"
        weight={700}
        lineHeight="1.5"
        className="font-body text-lg font-bold leading-[1.5] text-text-default"
      />

      <TypeSample
        name="body/base"
        cssVarFamily="--font-body"
        cssVarSize="--text-base"
        family="Noto Sans JP"
        size="14px"
        weight={400}
        lineHeight="1.4"
        className="font-body text-base font-normal leading-[1.4] text-text-default"
      />

      <TypeSample
        name="body/base-500"
        cssVarFamily="--font-body"
        cssVarSize="--text-base"
        family="Noto Sans JP"
        size="14px"
        weight={500}
        lineHeight="1.4"
        className="font-body text-base font-medium leading-[1.4] text-text-default"
      />

      <TypeSample
        name="body/base-700"
        cssVarFamily="--font-body"
        cssVarSize="--text-base"
        family="Noto Sans JP"
        size="14px"
        weight={700}
        lineHeight="1.4"
        className="font-body text-base font-bold leading-[1.4] text-text-default"
      />

      <TypeSample
        name="body/sm"
        cssVarFamily="--font-body"
        cssVarSize="--text-sm"
        family="Noto Sans JP"
        size="13px"
        weight={400}
        lineHeight="1.5"
        className="font-body text-sm font-normal leading-[1.5] text-text-default"
      />

      <TypeSample
        name="body/sm-700"
        cssVarFamily="--font-body"
        cssVarSize="--text-sm"
        family="Noto Sans JP"
        size="13px"
        weight={700}
        lineHeight="1.5"
        className="font-body text-sm font-bold leading-[1.5] text-text-default"
      />

      <TypeSample
        name="body/xs"
        cssVarFamily="--font-body"
        cssVarSize="--text-xs"
        family="Noto Sans JP"
        size="12px"
        weight={400}
        lineHeight="1.3"
        className="font-body text-xs font-normal leading-[1.3] text-text-default"
      />

      <TypeSample
        name="body/xs-500"
        cssVarFamily="--font-body"
        cssVarSize="--text-xs"
        family="Noto Sans JP"
        size="12px"
        weight={500}
        lineHeight="1.3"
        className="font-body text-xs font-medium leading-[1.3] text-text-default"
      />

      <TypeSample
        name="body/xs-700"
        cssVarFamily="--font-body"
        cssVarSize="--text-xs"
        family="Noto Sans JP"
        size="12px"
        weight={700}
        lineHeight="1.3"
        className="font-body text-xs font-bold leading-[1.3] text-text-default"
      />
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Typography",
  component: AllTypography,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

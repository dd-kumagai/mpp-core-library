import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Icon } from "../icons/index.ts";
import type { IconName } from "../icons/index.ts";

const allIconNames: IconName[] = [
  "search",
  "heart",
  "heart_paw",
  "chevron_right",
  "star",
  "chevron_left",
  "caret_down",
  "caret_up",
  "chat",
  "paw",
  "pen",
  "success",
  "tag",
  "clear",
  "star_paw",
  "clip_paw",
  "crown",
  "home",
  "home_paw",
  "external",
  "plus",
  "minus",
  "list",
  "chat_bubble",
  "images",
  "image",
  "album",
  "check",
  "list_circle",
  "sort",
  "cart",
  "bone",
  "chevron_down",
  "chevron_up",
  "eye",
  "balloon",
  "bell",
  "crown_outline",
  "cup",
  "bag",
  "scissors",
  "hospital",
  "hospital_night",
  "dogrun",
  "calendar",
  "clock",
  "walk",
  "pill",
  "shot",
  "setting",
  "question",
  "info",
  "change",
  "pin",
  "pin_wanpass",
  "crop",
  "brightness",
  "face",
  "user",
  "menu",
  "mail",
];

function IconGallery() {
  const [search, setSearch] = useState("");
  const [selectedSize, setSelectedSize] = useState(24);

  const filtered = allIconNames.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-md font-body">
      <h1 className="font-heading text-h1 font-bold text-text-default mb-xs">
        Icons
      </h1>
      <p className="text-base text-text-subtle mb-sm">
        {allIconNames.length} icons available. All icons inherit the current
        text color via <code className="bg-bg-neutral px-2xs py-3xs rounded-sm text-xs">currentColor</code>.
      </p>

      <div className="flex items-center gap-sm mb-md">
        <input
          type="text"
          placeholder="Filter icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-border-input-default rounded-md px-xs py-2xs text-base font-body w-[240px] focus:outline-none focus:border-border-focus"
        />
        <div className="flex items-center gap-2xs">
          <span className="text-sm text-text-subtle">Size:</span>
          {[16, 20, 24, 32].map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`px-2xs py-3xs rounded-sm text-sm cursor-pointer border ${
                selectedSize === s
                  ? "bg-bg-primary-stronger text-text-inverse border-bg-primary-stronger"
                  : "bg-bg-default text-text-default border-border-default hover:bg-bg-neutral"
              }`}
            >
              {s}px
            </button>
          ))}
        </div>
        <span className="text-sm text-text-subtler">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3xs">
        {filtered.map((name) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2xs p-xs rounded-md border border-border-default hover:bg-bg-neutral transition-colors"
            title={name}
          >
            <Icon
              name={name}
              size={selectedSize}
              className="text-text-default"
            />
            <span className="text-xs text-text-subtle text-center leading-tight break-all">
              {name}
            </span>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-base text-text-subtler text-center py-md">
          No icons match "{search}"
        </p>
      )}

      <hr className="my-md border-border-default" />

      <h2 className="font-heading text-h2 font-bold text-text-default mb-sm">
        Usage
      </h2>
      <div className="bg-bg-neutral rounded-md p-sm">
        <pre className="font-mono text-sm text-text-default whitespace-pre-wrap">{`import { Icon } from "@mpp/core";

// Basic usage
<Icon name="search" />

// Custom size
<Icon name="heart" size={32} />

// Color via Tailwind
<Icon name="star" className="text-yellow-85" />

// Accessible label
<Icon name="cart" aria-hidden={false} aria-label="Shopping cart" />`}</pre>
      </div>

      <hr className="my-md border-border-default" />

      <h2 className="font-heading text-h2 font-bold text-text-default mb-sm">
        Color Inheritance
      </h2>
      <p className="text-base text-text-subtle mb-sm">
        Icons use <code className="bg-bg-neutral px-2xs py-3xs rounded-sm text-xs">currentColor</code> for
        fill, so they inherit the parent's text color.
      </p>
      <div className="flex items-center gap-md">
        <div className="flex items-center gap-2xs text-text-default">
          <Icon name="heart" size={24} />
          <span className="text-sm">Default</span>
        </div>
        <div className="flex items-center gap-2xs text-text-primary-stronger">
          <Icon name="heart" size={24} />
          <span className="text-sm">Primary</span>
        </div>
        <div className="flex items-center gap-2xs text-text-subtle">
          <Icon name="heart" size={24} />
          <span className="text-sm">Subtle</span>
        </div>
        <div className="flex items-center gap-2xs text-red-55">
          <Icon name="heart" size={24} />
          <span className="text-sm">Red</span>
        </div>
        <div className="flex items-center gap-2xs text-green-45">
          <Icon name="heart" size={24} />
          <span className="text-sm">Green</span>
        </div>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Icons",
  component: IconGallery,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

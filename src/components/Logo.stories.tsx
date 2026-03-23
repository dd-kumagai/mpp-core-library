import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logotype } from "./Logo";

const logotypeMeta: Meta<typeof Logotype> = {
  title: "Components/Logotype",
  component: Logotype,
  args: {
    height: 32,
  },
};

export default logotypeMeta;

type LogotypeStory = StoryObj<typeof Logotype>;

export const Default: LogotypeStory = {};

export const Sizes: LogotypeStory = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
      <Logotype height={20} />
      <Logotype height={32} />
      <Logotype height={48} />
      <Logotype height={64} />
    </div>
  ),
};

export const White: LogotypeStory = {
  render: () => (
    <div style={{ background: "#1a1a2e", padding: 24, borderRadius: 8 }}>
      <Logotype height={40} color="white" />
    </div>
  ),
};

# @mpp/core — MPP Design System

A React + Tailwind CSS 4 component library for MPP products. Built with TypeScript, CVA (class-variance-authority), and design tokens.

## Setup

```bash
# Install (from GitHub)
npm install git+ssh://git@github.com:dd-kumagai/mpp-core-library.git

# Import CSS in your app's entry point
import "@mpp/core/css";
```

## Available Components

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `Button` | Primary action button | `variant`: "primary" \| "secondary" \| "outline" \| "ghost", `size`: "sm" \| "md" \| "lg" |
| `IconButton` | Icon-only button | `icon`: IconName, `aria-label` (required), `variant`, `size` |
| `FloatingButton` | FAB-style button | `icon`: IconName, `label`: string, `variant`, `size` |
| `TextField` | Text input with label | `variant`: "default" \| "dark", `error`: boolean |
| `Select` | Dropdown select | `options`: SelectOption[], `variant`, `error` |
| `SearchField` | Search input with icon | Same as TextField |
| `DatePicker` | Date input with calendar | `mode`: "single" \| "range", `startValue`, `endValue` |
| `Stepper` | Numeric +/- control | `min`, `max`, `step`, `value`, `defaultValue` |
| `Checkbox` | Checkbox with label | `size`: "sm" \| "md", `label`, `checked` |
| `Radio` | Radio button with label | `size`: "sm" \| "md", `label`, `checked` |
| `FormLabel` | Label with optional badge | `label`, `optional`: boolean (shows 任意 badge) |
| `Tag` | Dismissible tag | `label`, `onDismiss` |
| `Badge` | Status badge | `variant`: "default" \| "strong" \| "subtle", `color`: "blue" \| "red" \| "green" \| "yellow" \| "orange" \| "purple" \| "neutral" |
| `Table` | Data table | Subcomponents: `Thead`, `Tbody`, `Tr`, `Th`, `Td` |
| `Icon` | SVG icon renderer | `name`: IconName, `size`: number |

## Design Tokens

All styling uses semantic tokens defined in CSS. Use these Tailwind classes:

**Colors**: `text-text-default`, `text-text-subtle`, `bg-bg-default`, `bg-bg-neutral`, `border-border-default`, `bg-bg-primary-stronger`, etc.

**Spacing**: `gap-3xs` (4px), `gap-2xs` (8px), `gap-xs` (12px), `gap-sm` (16px), `gap-md` (24px) — same for padding/margin.

**Typography**: `font-heading` (Murecho), `font-body` (Noto Sans JP). Sizes: `text-xs` (12px), `text-sm` (13px), `text-base` (14px), `text-lg` (16px), `text-h3` (16px), `text-h2` (20px), `text-h1` (24px).

**Line height**: `leading-tight` (1.3), `leading-normal` (1.4), `leading-relaxed` (1.5).

**Radius**: `rounded-sm` (4px), `rounded-md` (8px), `rounded-round` (1000px).

**Shadows**: `shadow-sm`, `shadow-md`, `shadow-lg`.

## Conventions

- All components use `forwardRef` and export a `displayName`.
- Variants are managed with CVA. Variant objects are exported (e.g., `buttonVariants`).
- Use the `cn()` utility (exported from core) to merge Tailwind classes.
- `IconButton` requires `aria-label` — it's a required prop, not optional.
- Focus rings use `ring-1`/`ring-2` (not `border`) to avoid layout shift.
- Japanese locale: labels, aria-labels, and UI text are in Japanese.

## Building a Product with @mpp/core

```tsx
import "@mpp/core/css";
import { Button, TextField, Table, Thead, Tbody, Tr, Th, Td, Badge } from "@mpp/core";

function MyPage() {
  return (
    <div className="bg-bg-neutral min-h-screen font-body">
      <Button variant="primary" size="md">保存</Button>
      <TextField label="名前" placeholder="入力してください" />
      <Table>
        <Thead>
          <Tr><Th>名前</Th><Th>ステータス</Th></Tr>
        </Thead>
        <Tbody>
          <Tr><Td>田中太郎</Td><Td><Badge variant="strong" color="green">有効</Badge></Td></Tr>
        </Tbody>
      </Table>
    </div>
  );
}
```

import {
  type InputHTMLAttributes,
  type KeyboardEvent,
  forwardRef,
  useId,
  useRef,
  useCallback,
} from "react";
import { cn } from "../lib/utils.ts";
import { IconButton } from "./IconButton.tsx";
import { FormLabel } from "./FormLabel.tsx";

/* ─── Helpers ─── */

/** Only allow digits and slash */
function handleDateKeyDown(e: KeyboardEvent<HTMLInputElement>) {
  // Allow control keys: backspace, delete, tab, arrows, home, end
  if (
    e.key === "Backspace" ||
    e.key === "Delete" ||
    e.key === "Tab" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowRight" ||
    e.key === "Home" ||
    e.key === "End" ||
    e.ctrlKey ||
    e.metaKey
  ) {
    return;
  }
  // Allow digits and slash only
  if (!/^[0-9/]$/.test(e.key)) {
    e.preventDefault();
  }
}

/* ─── Shared styles ─── */

const dateInputClasses = cn(
  "flex-1 min-w-0 bg-transparent pl-[10px] pr-[32px] h-[32px]",
  "font-body font-normal text-base leading-normal text-text-default",
  "placeholder:text-text-subtle",
  "focus:outline-none",
  "disabled:opacity-40 disabled:cursor-not-allowed",
);

const dateWrapperClasses = cn(
  "relative flex items-center w-[120px] shrink-0",
  "bg-input-subtle",
  "ring-1 ring-inset ring-border-input-default",
  "focus-within:ring-2 focus-within:ring-border-focus",
  "overflow-clip transition-shadow",
);

/* ─── Single date input ─── */

function DateInput({
  id,
  inputRef,
  className,
  disabled,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  inputRef?: React.Ref<HTMLInputElement>;
}) {
  const hiddenRef = useRef<HTMLInputElement>(null);

  const openPicker = useCallback(() => {
    hiddenRef.current?.showPicker();
  }, []);

  const handleNativePick = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const native = e.target.value; // yyyy-mm-dd
      if (!native) return;
      const [y, m, d] = native.split("-");
      const formatted = `${y}/${m}/${d}`;

      // Write into the visible text input
      const textInput = id
        ? (document.getElementById(id) as HTMLInputElement)
        : null;
      if (textInput) {
        // Use native setter so React picks up the change
        const setter = Object.getOwnPropertyDescriptor(
          HTMLInputElement.prototype,
          "value",
        )?.set;
        setter?.call(textInput, formatted);
        textInput.dispatchEvent(new Event("input", { bubbles: true }));
        textInput.dispatchEvent(new Event("change", { bubbles: true }));
      }
    },
    [id],
  );

  return (
    <div className={cn(dateWrapperClasses, className)}>
      <input
        ref={inputRef}
        id={id}
        type="text"
        inputMode="numeric"
        className={dateInputClasses}
        onKeyDown={handleDateKeyDown}
        disabled={disabled}
        {...props}
      />
      {/* Hidden native date input for the picker */}
      <input
        ref={hiddenRef}
        type="date"
        className="sr-only"
        tabIndex={-1}
        aria-hidden
        onChange={handleNativePick}
      />
      <IconButton
        icon="calendar"
        size="sm"
        aria-label="カレンダーを開く"
        disabled={disabled}
        onClick={openPicker}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-text-default"
      />
    </div>
  );
}

/* ─── Component ─── */

export interface DatePickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Label text */
  label?: string;
  /** Whether the field is required (shows badge) */
  required?: boolean;
  /** Enable range mode (renders start + end inputs) */
  range?: boolean;
  /** Value for the end date (range mode only) */
  endValue?: string;
  /** Default value for the end date (range mode only) */
  defaultEndValue?: string;
  /** Called when the end date changes (range mode only) */
  onEndChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Placeholder for the start input */
  startPlaceholder?: string;
  /** Placeholder for the end input */
  endPlaceholder?: string;
}

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      className,
      label,
      required = false,
      range = false,
      endValue,
      defaultEndValue,
      onEndChange,
      startPlaceholder,
      endPlaceholder,
      id,
      disabled,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const startId = id ?? autoId;
    const endId = `${startId}-end`;

    if (range) {
      return (
        <div className={cn("flex items-center gap-2xs", className)}>
          {label && (
            <FormLabel
              label={label}
              required={required}
              htmlFor={startId}
              className="shrink-0"
            />
          )}
          <div className="flex items-center">
            <DateInput
              inputRef={ref}
              id={startId}
              placeholder={startPlaceholder}
              required={required}
              disabled={disabled}
              className="rounded-l-sm -mr-px"
              {...props}
            />
            <DateInput
              id={endId}
              placeholder={endPlaceholder}
              value={endValue}
              defaultValue={defaultEndValue}
              onChange={onEndChange}
              disabled={disabled}
              className="rounded-r-sm"
            />
          </div>
        </div>
      );
    }

    return (
      <div className={cn("flex items-center gap-2xs", className)}>
        {label && (
          <FormLabel
            label={label}
            required={required}
            htmlFor={startId}
            className="shrink-0"
          />
        )}
        <DateInput
          inputRef={ref}
          id={startId}
          placeholder={startPlaceholder}
          required={required}
          disabled={disabled}
          className="rounded-sm"
          {...props}
        />
      </div>
    );
  },
);

DatePicker.displayName = "DatePicker";

export { DatePicker };

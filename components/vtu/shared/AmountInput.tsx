import React from "react";
import { Input } from "@/components/ui/input";

interface AmountInputProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  placeholder?: string;
  disabled?: boolean;
}

export const AmountInput = React.forwardRef<HTMLInputElement, AmountInputProps>(
  ({ value, onChange, min, max, placeholder = "0", disabled }, ref) => {
    const [displayValue, setDisplayValue] = React.useState(
      value ? value.toLocaleString() : ""
    );

    React.useEffect(() => {
      setDisplayValue(value ? value.toLocaleString() : "");
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value.replace(/[^\d]/g, "");
      const numericValue = rawValue === "" ? 0 : parseInt(rawValue, 10);

      setDisplayValue(rawValue === "" ? "" : numericValue.toLocaleString());
      onChange?.(numericValue);
    };

    const handleBlur = () => {
      if (value) {
        setDisplayValue(value.toLocaleString());
      }
    };

    return (
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          ₦
        </span>
        <Input
          ref={ref}
          type="text"
          inputMode="numeric"
          placeholder={placeholder}
          value={displayValue}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
          className="pl-8"
        />
      </div>
    );
  }
);

AmountInput.displayName = "AmountInput";

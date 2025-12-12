import React from "react";
import { Input } from "@/components/ui/input";

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue = e.target.value.replace(/\D/g, "");

      // Limit to 11 digits for Nigerian numbers starting with 0
      if (inputValue.startsWith("0")) {
        inputValue = inputValue.slice(0, 11);
      } else if (inputValue.startsWith("234")) {
        inputValue = inputValue.slice(0, 13);
      }

      e.target.value = inputValue;
      onChange?.(e);
    };

    return (
      <Input
        ref={ref}
        type="tel"
        placeholder="08012345678"
        value={value}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";

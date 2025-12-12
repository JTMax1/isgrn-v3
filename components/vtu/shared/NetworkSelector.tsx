import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { NETWORKS } from "@/lib/vtu/constants";
import { NetworkType } from "@/lib/vtu/types";
import { cn } from "@/components/ui/utils";

interface NetworkSelectorProps {
  value?: NetworkType;
  onChange?: (value: NetworkType) => void;
  disabled?: boolean;
}

export const NetworkSelector = React.forwardRef<
  HTMLDivElement,
  NetworkSelectorProps
>(({ value, onChange, disabled }, ref) => {
  return (
    <RadioGroup
      ref={ref}
      value={value}
      onValueChange={onChange as (value: string) => void}
      disabled={disabled}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4"
    >
      {NETWORKS.map((network) => (
        <div key={network.id} className="relative">
          <RadioGroupItem
            value={network.id}
            id={`network-${network.id}`}
            className="peer sr-only"
          />
          <Label
            htmlFor={`network-${network.id}`}
            className={cn(
              "flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 cursor-pointer transition-all",
              "peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-2 text-white font-bold text-lg"
              style={{ backgroundColor: network.color }}
            >
              {network.name.charAt(0)}
            </div>
            <span className="text-sm font-medium text-gray-900">
              {network.name}
            </span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
});

NetworkSelector.displayName = "NetworkSelector";

import { Network } from "lucide-react";

interface LogoProps {
  variant?: "full" | "abbreviated";
  className?: string;
}

export function Logo({ variant = "abbreviated", className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-blue-600 p-2 rounded-lg">
        <Network className="h-6 w-6 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-blue-600 tracking-tight leading-none">
          {variant === "full" ? "Intelligent Solutions Global Resources Nigeria" : "ISGRN"}
        </span>
        {variant === "abbreviated" && (
          <span className="text-gray-500 leading-none">
            Intelligent Solutions
          </span>
        )}
      </div>
    </div>
  );
}

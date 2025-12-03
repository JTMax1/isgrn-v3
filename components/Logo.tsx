interface LogoProps {
  variant?: "icon" | "full" | "branded";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "h-8",
  md: "h-12",
  lg: "h-16",
  xl: "h-20",
};

export function Logo({ 
  variant = "icon", 
  className = "", 
  size = "md" 
}: LogoProps) {
  const sizeClass = sizeMap[size];
  
  if (variant === "branded") {
    return (
      <img 
        src="/logo-with-blue-text.svg" 
        alt="ISGRN - Intelligent Solutions Global Resources Nigeria"
        className={`${sizeClass} w-auto object-contain ${className}`}
        style={{ width: 150, display: 'block' }}
      />
    );
  }
  
  if (variant === "full") {
    return (
      <img 
        src="/logo-with-text.svg" 
        alt="ISGRN - Intelligent Solutions Global Resources Nigeria"
        className={`${sizeClass} w-auto object-contain ${className}`}
        style={{ display: 'block' }}
      />
    );
  }

  return (
    <img 
      src="/logo-only.svg" 
      alt="ISGRN Logo"
      className={`${sizeClass} w-auto object-contain ${className}`}
      style={{ display: 'block' }}
    />
  );
}

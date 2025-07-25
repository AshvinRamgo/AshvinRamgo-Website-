import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border-2 border-deep-teal bg-ivory-white px-4 py-2 text-base text-driftwood-brown ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-driftwood-brown/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-sand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

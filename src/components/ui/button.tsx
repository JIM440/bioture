import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-12 items-center justify-center gap-3 rounded-sm px-5 font-sans text-[11px] font-medium uppercase tracking-[0.15em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-emerald-950 text-white hover:bg-emerald-800 focus-visible:outline-emerald-900",
        outline: "border border-stone-300 bg-transparent text-stone-950 hover:border-emerald-900 hover:text-emerald-900",
        light: "bg-white text-black hover:bg-stone-100 focus-visible:outline-white",
        ghost: "text-stone-900 hover:bg-stone-100",
      },
      size: {
        default: "h-12 px-5",
        sm: "h-10 px-4 text-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  showArrow = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props}>
      <Slottable>{children}</Slottable>
      {showArrow ? <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.8} /> : null}
    </Comp>
  );
}

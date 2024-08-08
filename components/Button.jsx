"use client";

import { cva } from "class-variance-authority";
import cn from "@/utils/lib";

export const buttonVariants = cva(
  "bg-black text-white h-11 px-4 py-2.5 rounded-lg shadow justify-center items-center gap-3 inline-flex",
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-[#f8f9fb] text-black border border-[#cfd4dc]",
      },
      size: {
        default: "px-4 py-2",
        lg: "px-6 py-3",
        sm: "px-2 py-1",
        xs: "px-1 py-1",
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    },
  },
);

export default function Button({ variant, size, className, ...props }) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

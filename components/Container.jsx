import cn from "@/utils/lib";
import { cva } from "class-variance-authority";

export const containerVariants = cva(
  "w-full relative container max-w-screen-2xl mx-auto px-4 lg:px-8",
  {
    variants: {
      variant: {
        default: "",
        row: "flex flex-row",
      },
      size: {
        default: "max-w-screen-2xl",
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
      },
    },
  },
);

export default function Container({ variant, size, className, children }) {
  return (
    <div className={cn(containerVariants({ variant, size }), className)}>
      {children}
    </div>
  );
}

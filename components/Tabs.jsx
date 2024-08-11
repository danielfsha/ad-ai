import cn from "@/utils/lib";
import { cva } from "class-variance-authority";

export const tabItemVariants = cva(
  "flex-1 px-4 py-2.5 bg-[#242323] justify-center items-start inline-flex cursor-pointer",
  {
    variants: {
      variant: {
        default: "",
        active: "bg-[#daf7a6] text-black",
      },
      size: {
        default: "px-4 py-2",
        lg: "px-6 py-4",
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

export function Tabs({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-lg shadow border border-[#585a5e] justify-start items-start inline-flex overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TabItem({ variant, size, className, children, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        tabItemVariants({
          variant,
          size: size,
        }),
        className,
      )}
    >
      {children}
    </div>
  );
}

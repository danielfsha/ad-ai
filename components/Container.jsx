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
    },
  },
);

export default function Container({ variant, className, children }) {
  return (
    <div className={cn(containerVariants({ variant }), className)}>
      {children}
    </div>
  );
}

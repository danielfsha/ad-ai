import cn from "@/utils/lib";
import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "bg-[#f8f9fb] text-black border border-gray-500 bg-[#242323] text-white h-11 px-4 py-2.5 rounded-lg justify-center items-center gap-3 inline-flex outline-none",
  {
    variants: {
      variant: {
        default: "",
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

export default function Input({ className, ...props }) {
  return <input {...props} className={cn(inputVariants(), className)} />;
}

import cn from "@/utils/lib";

export default function TextArea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "w-full bg-[#242323] text-white border-gray-700 border rounded-lg p-2 active:border-[#cfd4dc] focus:border-[#cfd4dc] focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}

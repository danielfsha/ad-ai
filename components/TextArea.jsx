import cn from "@/utils/lib";

export default function TextArea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "w-full bg-[#f8f9fb] text-black border border-[#cfd4dc] rounded-lg p-2 active:border-[#cfd4dc] focus:border-[#cfd4dc] focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}

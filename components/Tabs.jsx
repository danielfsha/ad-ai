import cn from "@/utils/lib";

export function Tabs({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-lg shadow border border-[#cfd4dc] justify-start items-start inline-flex overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TabItem({ className, children, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        "px-4 py-2.5 bg-white justify-start items-start inline-flex",
        className,
      )}
    >
      {children}
    </div>
  );
}

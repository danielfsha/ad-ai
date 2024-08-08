"use client";

import cn from "@/utils/lib";

export function Dropdown({ className, children }) {
  return (
    <div
      className={cn(
        "relative px-2 rounded-lg justify-center items-center gap-3 bg-[#f8f9fb] border",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function DropdownTrigger({ className, isOpen, children, ...props }) {
  return (
    <div
      className={cn(
        "cursor-pointer select-none py-2 px-4 border-b-2 border-transparent flex items-center justify-between",
        className,
      )}
      {...props}
    >
      {children}

      <svg
        className={`w-4 h-4 transition-all ${isOpen ? "rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        id="chevron"
      >
        <path d="M17.418 6.109a.697.697 0 0 1 .979 0 .68.68 0 0 1 0 .969l-7.908 7.83a.697.697 0 0 1-.979 0l-7.908-7.83a.68.68 0 0 1 0-.969.697.697 0 0 1 .979 0L10 13.25l7.418-7.141z"></path>
      </svg>
    </div>
  );
}

export function DropdownBody({ className, children }) {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
}

export function DropdownItem({ className, isActive, children, ...props }) {
  return (
    <div
      className={cn(
        `cursor-pointer select-none py-2 px-4 border-transparent border-b rounded-lg ${
          isActive && "bg-black text-white"
        }`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

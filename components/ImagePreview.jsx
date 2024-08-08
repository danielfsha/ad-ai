import cn from "@/utils/lib";

export default function ImagePreview({ className, ...props }) {
  return (
    <div className="h-[500px] w-[500px] rounded-lg overflow-hidden">
      <img className={cn("h-full w-full object-cover", className)} {...props} />
    </div>
  );
}

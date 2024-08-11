import { cva } from "class-variance-authority"

import cn from "@/utils/lib"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export function Alert ({ className, variant, ...props }) { 
    return (
        <div
            role="alert"
            className={cn(alertVariants({ variant }), className)}
            {...props}
        />
    );
}

export function AlertTitle({ className, ...props }) {
    return(
        <h5
            className={cn("mb-1 font-medium leading-none tracking-tight", className)}
            {...props}
        />
    );
}

export function AlertDescription ({ className, ...props }) {
    return(
        <div
            className={cn("text-sm [&_p]:leading-relaxed", className)}
            {...props}
        />  
    )
}


import { cn } from "cn"
import { ComponentProps } from "react"

type BannerContainerProps = ComponentProps<"div">

export default function BannerContainer({
  className,
  children,
  ...props
}: BannerContainerProps) {
  return (
    <div {...props} className={cn("mx-95.5 pt-30 pb-6", className)}>
      {children}
    </div>
  )
}

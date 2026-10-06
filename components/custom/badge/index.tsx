import { Badge } from "@/components/ui/badge"
import { ReactNode } from "react"

export default function SkillBadge({ children }: { children: ReactNode }) {
  return (
    <Badge className="h-7.5 cursor-default rounded-3xl border p-3 text-xs leading-[1.4] text-accent hover:border-accent">
      {children}
    </Badge>
  )
}

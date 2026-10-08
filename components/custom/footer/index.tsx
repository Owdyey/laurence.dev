"use client"
import { Separator } from "@/components/ui/separator"
import { Copyright } from "lucide-react"

export default function Footer() {
  return (
    <div className="bg-white px-28">
      <Separator />
      <div className="flex justify-between pt-6 pb-10 text-xs text-muted">
        <p className="flex items-center gap-1">
          <Copyright size={12} />
          2026 John Laurence P. Burgos
        </p>
        <p
          onClick={() => window.scrollTo({ top: 0 })}
          className="cursor-pointer"
        >
          Back to top
        </p>
      </div>
    </div>
  )
}

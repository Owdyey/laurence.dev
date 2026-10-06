import Link from "next/link"
import { navigationItems } from "./constants"

export default function Topbar() {
  return (
    <div className="sticky top-0 flex h-18 w-full items-center justify-between border-b bg-white p-8">
      <Link href={"#"} className="uppercase">
        Laurence
      </Link>
      <div className="flex gap-8">
        {navigationItems.map(({ label, url }) => (
          <Link
            href={url}
            key={url}
            className="text-sm text-muted capitalize hover:text-accent"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

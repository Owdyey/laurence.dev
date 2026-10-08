import Link from "next/link"
import { navigationItems } from "./constants"

export default function Topbar() {
  return (
    <div className="sticky top-0 z-100 flex h-18 w-full items-center justify-between border-b bg-white p-8 px-28 text-sm text-muted">
      <Link href={"#"}>Laurence</Link>
      <div className="flex gap-8">
        {navigationItems.map(({ label, url }) => (
          <Link href={url} key={url} className="capitalize hover:text-accent">
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

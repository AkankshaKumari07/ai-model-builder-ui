import { cn } from "@/lib/utils"
import { Database, FileBox, LayoutDashboard, Settings, TestTube2, Users } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 w-60", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Link href="#" className="flex h-10 items-center rounded-lg bg-[#1E1B4B] px-3 text-white font-medium">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Model Library
            </Link>
            <Link href="#" className="flex h-10 items-center rounded-lg px-3 text-neutral-700 hover:bg-neutral-100">
              <Database className="mr-2 h-4 w-4" />
              Label Data
            </Link>
            <Link href="#" className="flex h-10 items-center rounded-lg px-3 text-neutral-700 hover:bg-neutral-100">
              <FileBox className="mr-2 h-4 w-4" />
              Model
            </Link>
            <Link href="#" className="flex h-10 items-center rounded-lg px-3 text-neutral-700 hover:bg-neutral-100">
              <TestTube2 className="mr-2 h-4 w-4" />
              Test
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Help</h2>
          <div className="space-y-1">
            <Link href="#" className="flex h-10 items-center rounded-lg px-3 text-neutral-700 hover:bg-neutral-100">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
            <Link href="#" className="flex h-10 items-center rounded-lg px-3 text-neutral-700 hover:bg-neutral-100">
              <Users className="mr-2 h-4 w-4" />
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


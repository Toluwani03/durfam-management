"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { 
  Home,
  LayoutDashboard, 
  Package, 
  BoxesIcon,
  ClipboardList,
  InfoIcon,
  BookOpen
} from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center space-x-4 lg:space-x-6 w-full justify-between">
      <div className="flex items-center space-x-4">
        <Link
          href="/"
          className="text-2xl font-bold text-green-600 flex items-center"
        >
          <Home className="h-5 w-5 mr-1" />
          DURFAM
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className={cn(
              "text-sm font-medium transition-colors hover:text-green-600 flex items-center",
              pathname === "/dashboard" ? "text-green-600" : "text-muted-foreground"
            )}
          >
            <LayoutDashboard className="h-4 w-4 mr-1" />
            Dashboard
          </Link>
          <Link
            href="/products"
            className={cn(
              "text-sm font-medium transition-colors hover:text-green-600 flex items-center",
              pathname === "/products" ? "text-green-600" : "text-muted-foreground"
            )}
          >
            <Package className="h-4 w-4 mr-1" />
            Products
          </Link>
          <Link
            href="/inventory"
            className={cn(
              "text-sm font-medium transition-colors hover:text-green-600 flex items-center",
              pathname === "/inventory" ? "text-green-600" : "text-muted-foreground"
            )}
          >
            <BoxesIcon className="h-4 w-4 mr-1" />
            Inventory
          </Link>
          <Link
            href="/orders"
            className={cn(
              "text-sm font-medium transition-colors hover:text-green-600 flex items-center",
              pathname === "/orders" ? "text-green-600" : "text-muted-foreground"
            )}
          >
            <ClipboardList className="h-4 w-4 mr-1" />
            Orders
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-green-600 flex items-center",
              pathname === "/about" ? "text-green-600" : "text-muted-foreground"
            )}
          >
            <InfoIcon className="h-4 w-4 mr-1" />
            About
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-sm font-medium transition-colors hover:text-green-600 flex items-center",
              pathname === "/blog" ? "text-green-600" : "text-muted-foreground"
            )}
          >
            <BookOpen className="h-4 w-4 mr-1" />
            Blog
          </Link>
        </div>
      </div>
    </div>
  )
}

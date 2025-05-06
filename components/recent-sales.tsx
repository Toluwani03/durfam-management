"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>FM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Farmer's Market Co-op</p>
          <p className="text-sm text-muted-foreground">farm.market@example.com</p>
        </div>
        <div className="ml-auto font-medium">+₦2,998,500</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>GF</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Green Fields LLC</p>
          <p className="text-sm text-muted-foreground">green.fields@example.com</p>
        </div>
        <div className="ml-auto font-medium">+₦5,833,500</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>OG</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Organic Growers Association</p>
          <p className="text-sm text-muted-foreground">organic@example.com</p>
        </div>
        <div className="ml-auto font-medium">+₦1,873,500</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>HS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Harvest Solutions</p>
          <p className="text-sm text-muted-foreground">harvest@example.com</p>
        </div>
        <div className="ml-auto font-medium">+₦7,498,500</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>AF</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">AgriTech Farms</p>
          <p className="text-sm text-muted-foreground">agritech@example.com</p>
        </div>
        <div className="ml-auto font-medium">+₦3,748,500</div>
      </div>
    </div>
  )
}

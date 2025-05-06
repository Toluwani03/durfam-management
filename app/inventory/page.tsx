'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ArrowUpDown } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function InventoryPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-800">Inventory Management</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,873</div>
            <p className="text-xs text-muted-foreground">Across all categories</p>
          </CardContent>
        </Card>
        <Card className="border-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>
        <Card className="border-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Requires restock</p>
          </CardContent>
        </Card>
        <Card className="border-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stock Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦45.2M</div>
            <p className="text-xs text-muted-foreground">Total inventory value</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-green-100">
        <CardHeader>
          <CardTitle>Inventory Status</CardTitle>
          <CardDescription>Monitor and manage your stock levels</CardDescription>
          <div className="flex space-x-2 pt-2">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search inventory..." className="w-[300px] pl-8 border-green-200" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Quantity</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Total Value</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Organic Fertilizer</TableCell>
                <TableCell>Fertilizers</TableCell>
                <TableCell>250</TableCell>
                <TableCell>₦15,000</TableCell>
                <TableCell>₦3,750,000</TableCell>
                <TableCell><Badge className="bg-green-500">In Stock</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Premium Seeds</TableCell>
                <TableCell>Seeds</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>₦5,000</TableCell>
                <TableCell>₦5,000,000</TableCell>
                <TableCell><Badge className="bg-green-500">In Stock</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pesticide Pro</TableCell>
                <TableCell>Pesticides</TableCell>
                <TableCell>50</TableCell>
                <TableCell>₦8,500</TableCell>
                <TableCell>₦425,000</TableCell>
                <TableCell><Badge variant="outline">Low Stock</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Growth Enhancer</TableCell>
                <TableCell>Supplements</TableCell>
                <TableCell>0</TableCell>
                <TableCell>₦12,000</TableCell>
                <TableCell>₦0</TableCell>
                <TableCell><Badge variant="destructive">Out of Stock</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 
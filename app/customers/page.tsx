'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function CustomersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-green-800">Customers</h2>
        <div className="flex items-center space-x-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> Add Customer
          </Button>
        </div>
      </div>

      <Card className="border-green-100">
        <CardHeader>
          <CardTitle>Customer Directory</CardTitle>
          <CardDescription>Manage your customer relationships</CardDescription>
          <div className="flex space-x-2 pt-2">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search customers..." className="w-[300px] pl-8 border-green-200" />
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
                <TableHead>Customer Name</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Green Fields LLC</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell>john@greenfields.com</TableCell>
                <TableCell>+234 801 234 5678</TableCell>
                <TableCell><Badge className="bg-green-500">Active</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Organic Growers Association</TableCell>
                <TableCell>Sarah Johnson</TableCell>
                <TableCell>sarah@organicgrowers.org</TableCell>
                <TableCell>+234 802 345 6789</TableCell>
                <TableCell><Badge className="bg-green-500">Active</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Farm Fresh Co.</TableCell>
                <TableCell>Michael Brown</TableCell>
                <TableCell>michael@farmfresh.com</TableCell>
                <TableCell>+234 803 456 7890</TableCell>
                <TableCell><Badge variant="outline">Pending</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Harvest Solutions</TableCell>
                <TableCell>Emma Wilson</TableCell>
                <TableCell>emma@harvestsolutions.com</TableCell>
                <TableCell>+234 804 567 8901</TableCell>
                <TableCell><Badge variant="destructive">Inactive</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 
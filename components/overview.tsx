"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    total: 6000000,
  },
  {
    name: "Feb",
    total: 4500000,
  },
  {
    name: "Mar",
    total: 3000000,
  },
  {
    name: "Apr",
    total: 4170000,
  },
  {
    name: "May",
    total: 2835000,
  },
  {
    name: "Jun",
    total: 3585000,
  },
  {
    name: "Jul",
    total: 5235000,
  },
  {
    name: "Aug",
    total: 6000000,
  },
  {
    name: "Sep",
    total: 7500000,
  },
  {
    name: "Oct",
    total: 6750000,
  },
  {
    name: "Nov",
    total: 9000000,
  },
  {
    name: "Dec",
    total: 10500000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `₦${(value / 1000000).toFixed(1)}M`} />
        <Tooltip formatter={(value) => [`₦${value.toLocaleString()}`, "Sales"]} />
        <Legend />
        <Bar dataKey="total" fill="#4ade80" name="Sales (₦)" />
      </BarChart>
    </ResponsiveContainer>
  )
}

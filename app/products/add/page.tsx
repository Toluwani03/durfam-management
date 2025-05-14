'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { createProduct, productCategories } from '@/lib/products'

const applicationMethods = [
  { value: 'indoor', label: 'Indoor Housing' },
  { value: 'outdoor', label: 'Outdoor Grazing' },
  { value: 'mixed', label: 'Mixed System' },
  { value: 'intensive', label: 'Intensive System' }
]

export default function AddProductPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("general")
  const [formData, setFormData] = useState({
    // General Information
    product_name: '',
    product_type: '',
    description: '',
    price: '',
    sku: '',

    // Product Specific
    composition: '',
    weight: '',
    application_method: '',
    is_organic: false,

    // Inventory
    current_stock: '',
    reorder_level: '',
  })

  // Generate SKU when product name or type changes
  useEffect(() => {
    if (formData.product_name && formData.product_type) {
      const prefix = formData.product_type.substring(0, 3).toUpperCase()
      const namePart = formData.product_name.replace(/[^a-zA-Z0-9]/g, '').substring(0, 3).toUpperCase()
      const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
      const sku = `${prefix}-${namePart}-${randomNum}`
      setFormData(prev => ({ ...prev, sku }))
    }
  }, [formData.product_name, formData.product_type])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Format price to have 2 decimal places and convert to number
      const formattedData = {
        ...formData,
        price: Number(parseFloat(formData.price).toFixed(2)),
        weight: formData.weight ? Number(formData.weight) : undefined,
        current_stock: Number(formData.current_stock),
        reorder_level: Number(formData.reorder_level)
      }

      const { data, error } = await createProduct(formattedData)

      if (error) throw error

      toast({
        title: "Success",
        description: "Product added successfully",
      })

      router.push('/products')
      router.refresh()
    } catch (error) {
      console.error('Error adding product:', error)
      toast({
        title: "Error",
        description: "Failed to add product. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-green-800">Add New Product</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General Information</TabsTrigger>
            <TabsTrigger value="specific">Product Specific</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
                <CardDescription>Basic product details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="product_name">Product Name</Label>
                    <Input
                      id="product_name"
                      name="product_name"
                      placeholder="Enter product name"
                      value={formData.product_name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product_type">Product Category</Label>
                    <Select
                      value={formData.product_type}
                      onValueChange={(value) => handleSelectChange(value, 'product_type')}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {productCategories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price (₦)</Label>
                    <Input
                      id="price"
                      name="price"
                      type="text"
                      placeholder="Enter price (e.g. 1000.00)"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU (Auto-generated)</Label>
                    <Input
                      id="sku"
                      name="sku"
                      value={formData.sku}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Enter product description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specific">
            <Card>
              <CardHeader>
                <CardTitle>Product Specific Details</CardTitle>
                <CardDescription>Additional product information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="composition">Composition</Label>
                    <Input
                      id="composition"
                      name="composition"
                      placeholder="Enter composition"
                      value={formData.composition}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      name="weight"
                      type="text"
                      placeholder="Enter weight"
                      value={formData.weight}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="application_method">Application Method</Label>
                    <Select
                      value={formData.application_method}
                      onValueChange={(value) => handleSelectChange(value, 'application_method')}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        {applicationMethods.map((method) => (
                          <SelectItem key={method.value} value={method.value}>
                            {method.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="is_organic"
                      checked={formData.is_organic}
                      onCheckedChange={(checked) => handleSwitchChange('is_organic', checked)}
                    />
                    <Label htmlFor="is_organic">Is Organic</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Information</CardTitle>
                <CardDescription>Stock management details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="current_stock">Current Stock</Label>
                    <Input
                      id="current_stock"
                      name="current_stock"
                      type="text"
                      placeholder="Enter current stock quantity"
                      value={formData.current_stock}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reorder_level">Reorder Level</Label>
                    <Input
                      id="reorder_level"
                      name="reorder_level"
                      type="text"
                      placeholder="Enter reorder level"
                      value={formData.reorder_level}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-2 mt-6">
          <Button
            variant="outline"
            onClick={() => router.back()}
            type="button"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Save Product'}
          </Button>
        </div>
      </form>
    </div>
  )
} 
import { createClient } from '@supabase/supabase-js'
import { supabase } from './supabase'

export interface ProductData {
  id?: string
  // General Information
  product_name: string
  product_type: string
  price: number
  sku: string
  description?: string
  image_url?: string

  // Product Specific
  variety?: string
  growing_period?: number
  seeds_per_pack?: number
  germination_rate?: number
  composition?: string
  weight?: number
  application_method?: string
  is_organic?: boolean
  manufacturer?: string
  model?: string
  warranty_months?: number
  power_source?: string

  // Inventory
  current_stock: number
  reorder_level: number
  warehouse_location?: string
  shelf_life?: number
  batch_number?: string
  expiry_date?: string
}

export async function createProduct(productData: ProductData) {
  try {
    // Log the data being sent
    console.log('Sending product data:', productData)

    // Remove any undefined values and empty strings
    const cleanedData = Object.fromEntries(
      Object.entries(productData).filter(([_, value]) => value !== undefined && value !== '')
    )

    console.log('Cleaned data:', cleanedData)

    const { data, error } = await supabase
      .from('products')
      .insert([cleanedData])
      .select('*')
      .single()

    if (error) {
      console.error('Supabase error details:', error)
      throw new Error(error.message || 'Failed to save product')
    }

    console.log('Successfully saved product:', data)
    return { data, error: null }
  } catch (error: any) {
    console.error('Error adding product:', error)
    return { 
      data: null, 
      error: error.message || 'An unexpected error occurred while saving the product'
    }
  }
}

export async function getProducts() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error getting products:', error)
    return { data: null, error }
  }
}

export async function getProductById(id: string) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      throw error
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error getting product:', error)
    return { data: null, error }
  }
}

export async function updateProduct(id: string, productData: Partial<ProductData>) {
  try {
    const { data, error } = await supabase
      .from('products')
      .update(productData)
      .eq('id', id)
      .select()

    if (error) {
      throw error
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error updating product:', error)
    return { data: null, error }
  }
}

export async function deleteProduct(id: string) {
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)

    if (error) {
      throw error
    }

    return { error: null }
  } catch (error) {
    console.error('Error deleting product:', error)
    return { error }
  }
}

export const productCategories = [
  { value: 'livestock', label: 'Livestock' },
  { value: 'equipment', label: 'Equipment' },
  { value: 'tools', label: 'Tools' },
  { value: 'produce', label: 'Produce' }
] 
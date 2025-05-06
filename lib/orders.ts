import { supabase } from './supabase'

export interface OrderData {
  // Customer Information
  customer_name: string
  email: string
  phone: string
  company?: string
  reference_number?: string
  order_date?: string
  notes?: string

  // Order Details
  subtotal: number
  tax: number
  shipping_fee: number
  total: number
}

export interface OrderItem {
  product_id: string
  quantity: number
  price: number
  total: number
}

export async function createOrder(orderData: OrderData, orderItems: OrderItem[]) {
  try {
    // Start a Supabase transaction
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([orderData])
      .select()
      .single()

    if (orderError) throw orderError

    // Add order ID to each order item
    const itemsWithOrderId = orderItems.map(item => ({
      ...item,
      order_id: order.id
    }))

    // Insert order items
    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(itemsWithOrderId)

    if (itemsError) throw itemsError

    // Update product stock
    for (const item of orderItems) {
      const { error: updateError } = await supabase.rpc('update_product_stock', {
        p_id: item.product_id,
        quantity: item.quantity
      })

      if (updateError) throw updateError
    }

    return { data: order, error: null }
  } catch (error) {
    console.error('Error creating order:', error)
    return { data: null, error }
  }
}

export async function getOrders() {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          product:products (
            product_name,
            product_type
          )
        )
      `)
      .order('created_at', { ascending: false })

    if (error) throw error

    return { data, error: null }
  } catch (error) {
    console.error('Error getting orders:', error)
    return { data: null, error }
  }
}

export async function getOrderById(id: string) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          product:products (
            product_name,
            product_type
          )
        )
      `)
      .eq('id', id)
      .single()

    if (error) throw error

    return { data, error: null }
  } catch (error) {
    console.error('Error getting order:', error)
    return { data: null, error }
  }
}

export async function updateOrderStatus(id: string, status: string) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return { data, error: null }
  } catch (error) {
    console.error('Error updating order status:', error)
    return { data: null, error }
  }
} 
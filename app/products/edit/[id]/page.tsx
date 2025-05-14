import { getProductById } from '@/lib/products'
import EditProductForm from './edit-product-form'
import { notFound } from 'next/navigation'

export default async function EditProductPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  // Ensure params is properly handled
  const id = params?.id
  if (!id) {
    return notFound()
  }

  try {
    const { data, error } = await getProductById(id)
    
    if (error || !data) {
      console.error('Error fetching product:', error)
      return notFound()
    }

    return <EditProductForm initialData={data} />
  } catch (error) {
    console.error('Error in edit page:', error)
    return notFound()
  }
} 
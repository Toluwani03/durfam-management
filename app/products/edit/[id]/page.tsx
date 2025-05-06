import { getProductById } from '@/lib/products'
import EditProductForm from './edit-product-form'
import { notFound } from 'next/navigation'

export default async function EditProductPage({ params }: { params: { id: string } }) {
  if (!params?.id) {
    notFound()
  }

  const { data, error } = await getProductById(params.id)
  
  if (error || !data) {
    notFound()
  }

  return <EditProductForm initialData={data} />
} 
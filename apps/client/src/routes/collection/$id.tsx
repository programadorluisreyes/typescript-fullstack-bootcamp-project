import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { getCollection } from '../../api/Collection'
import ProductCard from '../../components/ProductCard'
import { Product } from '../../models/Product.model'

export const Route = createFileRoute('/collection/$id')({
  component: CollectionComponent,
  loader: async ({ params }) => await getCollection(params.id)
})

function CollectionComponent() {
    const { id } = Route.useParams();
    const collection = Route.useLoaderData();
    console.log('collection: ', collection)
  return (
        <div className="grid grid-cols-3">
          {collection?.products?.map((item: Product) =>
            <ProductCard
              item={item}
            ></ProductCard>
          )}
        </div>
  )
  
}
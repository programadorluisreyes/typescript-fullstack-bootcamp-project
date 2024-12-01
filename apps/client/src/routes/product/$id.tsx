import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { getProduct } from '../../api/Product'
import { Product } from '../../models/Product.model';
import { Variant } from '../../models/variant.model';
import { currencyFormat } from '../../utils/currencyFormat';

export const Route = createFileRoute('/product/$id')({
  component: ProductComponent,
  loader: async ({ params }) => await getProduct(params.id),
})

function ProductComponent() {
  const { id } = Route.useParams();
  const product = Route.useLoaderData();
  
  return (
    <div className="bg-white">
    <section aria-labelledby="features-heading" className="relative">
      <img
        alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
        src={ product.image }
        className="aspect-[3/2] w-full object-cover sm:aspect-[5/2] lg:absolute lg:aspect-auto lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16"
      />

      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
        <div className="lg:col-start-2">
          <h2 id="features-heading" className="font-medium text-gray-500">
            {product.name}
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">{currencyFormat(product.price)}</p>
          <p className="mt-4 text-gray-500">{product.description}
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
            {(product.variants.length > 0) && product.variants.map((feature:Variant) => (
              <div key={feature.id}>
                <dt className="font-medium text-gray-900">{feature.size}</dt>
                <dd className="mt-2 text-gray-500">{feature.stock}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  </div>
  )
}

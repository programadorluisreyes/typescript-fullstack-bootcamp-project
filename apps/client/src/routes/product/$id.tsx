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
    <div className="bg-white flex justify-center flex-row w-full mt-4 rounded-md">
      <div aria-labelledby="features-heading" className="relative flex flex-col w-[50%]">
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
            <button className='p-2 rounded-md bg-blue-400 text-gray-100'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

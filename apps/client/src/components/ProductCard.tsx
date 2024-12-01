import React from 'react'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'
import { Product } from '../models/Product.model'
import { currencyFormat } from '../utils/currencyFormat'

import { Link } from '@tanstack/react-router'



interface CardProps {
    item:Product,
}

const ProductCard = ({ item }: CardProps) => {
  return (
    <Link
    to="/product/$id"
    params={{ id: item.id }}
    //search={(prev) => ({ ...prev, foo: 'bar' })}
  >
    
    <div className='border rounded-md'>
      <img src={item.image} />
      <p className='text-xl'>{item.name}</p>
      <p className='text-md'>{item.description}</p>
      <div className="flex flex-row justify-between px-2">
        <button className='p-2 rounded-md bg-blue-400 text-gray-100'>Add to cart</button>
        <p className='text-xl font-bold my-auto'>{currencyFormat(item.price)}</p>
      </div>
      {item.variants.map((variant: any) =>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <BuildingStorefrontIcon className='text-gray-600 w-7' /><p>{variant.stock}</p>
          </div>
          <div className='flex flex-col'>
            <BuildingStorefrontIcon className='text-gray-600 w-7' /><p>{variant.size}</p>
          </div>
        </div>
        )}
    </div>
        </Link>
  )
}

export default ProductCard
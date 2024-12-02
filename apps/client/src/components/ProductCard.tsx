import React, { useEffect, useRef } from 'react'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'
import { Product } from '../models/Product.model'
import { currencyFormat } from '../utils/currencyFormat'

import { Link } from '@tanstack/react-router'



interface CardProps {
    item:Product,
    index:number
}


const ProductCard = ({ item, index }: CardProps) => {

  const cursoRef = useRef <HTMLDivElement>(null)
  useEffect(() => {
      
  
    const observer = new IntersectionObserver((entries) => {
      
      //if(Object.values(cursoRef.current.classList).includes("oculto")){
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry)
        
        try {
          if(!cursoRef.current.classList.contains("elementFadeIn")){
            cursoRef.current.classList.add("elementFadeIn");
          }
          if(cursoRef.current.classList.contains("oculto")){
            cursoRef.current.classList.remove("oculto");
          }
        } catch (error) {
          
        }
           
      } else {
        
        try {
          if(!cursoRef.current.classList.contains("oculto")){
            cursoRef.current.classList.add("oculto");
          }
          if(cursoRef.current.classList.contains("elementFadeIn")){
            cursoRef.current.classList.remove("elementFadeIn");
          }
        } catch (error) {
          
        }
      
    }
    
   
    });
  });
  
  if (cursoRef.current) {
   observer.observe(cursoRef.current!);
  }
  
  return () => {
    observer.disconnect();
  };
  
  
  }, []);

  return (
    <Link
    to="/product/$id"
    params={{ id: item.id }}
    //search={(prev) => ({ ...prev, foo: 'bar' })}
  >
    
    <div 
      className='border rounded-md p-2'
      ref={cursoRef}
    >
      <img src={item.image} className='rounded-md'/>
      <p className='text-xl'>{item.name}</p>
      <p className='text-md'>{item.description}</p>
      <div className="flex flex-row justify-between">
        <button className='p-1 rounded-md bg-blue-400 text-gray-100'>Add to cart</button>
        <p className='text-xl font-bold my-auto'>{currencyFormat(item.price)}</p>
      </div>
      
    </div>
        </Link>
  )
}

export default ProductCard
import { useQuery } from '@tanstack/react-query'
import { ListProductsRes, ListProductsResponseSchema } from '../dtos/ListProductsResponse'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'
import { currencyFormat } from '../utils/currencyFormat'
import { useState, useEffect } from 'react'
import { Product } from '../models/Product.model'
import ProductCard from './ProductCard'
import Toggle from './Toggle'
import MinMaxPrice from './MinMaxPrice'


const ProductList = (): JSX.Element => {

 const [products, setProducts] = useState<Array<Product>>([])
 const [productsOriginal, setProductsOriginal] = useState<Array<Product>>([])
 const [searchText, setSearchText] = useState<String>('')

 /*
  const { status, data } = useQuery<ListProductsRes>({
    queryKey: ['products'],
    queryFn: () => {
      return fetch('http://localhost:5001/api/products/')
        .then(result => {
        const json = result.json()
        try {  
          const validatedData = ListProductsResponseSchema.parse(json.data.result); // Validar los datos  
          // setData(validatedData); // Guardar los datos en el estado
          console.log('validatedData: ', validatedData)
        } catch (error) {  
          console.log(error)
          // console.error("Error de validación:", error.errors);  
        }  
        })
    }
  })
  console.log(status)
  console.log(data)
  //setProducts(data:<Product>)
  */
 const getData = async () => {
  const response = await fetch('http://localhost:5001/api/products/')
  const json = await response.json()
  console.log(json)
  setProducts(json)
  setProductsOriginal(json)
 }  


 
 // this example is not case sensitive

const searchResults = products.filter(item => {
  const regex = new RegExp(searchText, 'i'); // 'i' makes the search case-insensitive
  return regex.test(item.name); // ready to assign to a state
});

useEffect(() => {
  if(!searchText){
    setProducts(productsOriginal)
  }else{
    setProducts(searchResults)
  }
}, [searchText])

 


    
  useEffect(() => {
    getData()
  }, [])
  
  
  
  return (
    <div className="flex flex-row">
      <div className="flex flex-row w-1/4">
        <div className="flex flex-col">
          
          <div className="flex flex-col justify-start w-full">
            <h1 className='flex font-medium mb-4'>Collections</h1>
            <p className='flex hover:bg-blue-200'>New Arivals</p>
            <p className='flex hover:bg-blue-200'>+18 games</p>
            <p className='flex hover:bg-blue-200'>Christmass</p>
            
          </div>
        </div>
      </div>

      <div className="flex flex-row w-3/4">
      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col justify-end w-full">
            <input 
              className="border border-gray-400 rounded-md w-full" 
              type="text"
              placeholder='Name to search'
              onChange={(e) => setSearchText(e.target.value)} 
              value={searchText}/>
          </div>
          <MinMaxPrice
            array={products}
            setArray={setProducts}
            ></MinMaxPrice>
        </div>
        <div className="grid grid-cols-3">
          {products.map((item: any) =>
            <ProductCard
              item={item}
            ></ProductCard>
          )}
        </div>
      </div>

      </div>
    </div>
    

    )
}

export default ProductList
import { useQuery } from '@tanstack/react-query'
import { ListProductsRes, ListProductsResponseSchema } from '../dtos/ListProductsResponse'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'
import { currencyFormat } from '../utils/currencyFormat'
import { useState, useEffect } from 'react'
import { Product } from '../models/Product.model'
import ProductCard from './ProductCard'
import Toggle from './Toggle'
import { Link } from '@tanstack/react-router'
import MinMaxPrice from './MinMaxPrice'
interface Collection {
  id: number,
  name: string,
}

const ProductList = (): JSX.Element => {

 const [products, setProducts] = useState<Array<Product>>([])
 const [collections, setCollections] = useState<Array<Collection>>([])
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
 const getProducts = async () => {
  const response = await fetch('http://localhost:5001/api/products/')
  const json = await response.json()
  console.log(json)
  setProducts(json)
  setProductsOriginal(json)
 }  

 const getCollections = async () => {
  const response = await fetch('http://localhost:5001/api/collections/')
  const json = await response.json()
  console.log(json)
  setCollections(json)
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
    getProducts()
    getCollections()
  }, [])
  
  
  
  return (
    <div className="flex flex-row">
      <div className="flex flex-row w-1/4">
        <div className="flex flex-col">
          
          <div className="flex flex-col justify-start w-full">
            <h1 className='flex font-medium mb-4'>Collections</h1>
            <div className="flex flex-col">
              {collections.map(item => (
                <Link
                to="/collection/$id"
                params={{ id: item.id }}
                className='flex hover:bg-blue-200'
                //search={(prev) => ({ ...prev, foo: 'bar' })}
                >{item.name}</Link>
              ))}
              </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-3/4">
      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col justify-end w-full mb-4">
            <p className='self-start'>Search a product you want to have</p>
            <input 
              className="border border-gray-400 rounded-md w-full p-1" 
              type="text"
              placeholder='Search by name'
              onChange={(e) => setSearchText(e.target.value)} 
              value={searchText}/>
          </div>
          <div className="flex flex-col">

          <p className='self-start'>Price</p>
          <MinMaxPrice
            array={products}
            setArray={setProducts}
            ></MinMaxPrice>
            </div>
        </div>
        <div className="grid grid-cols-3">
          {products.map((item: any, index:number) =>
            <ProductCard
              item={item}
              index={index}
            ></ProductCard>
          )}
        </div>
      </div>

      </div>
    </div>
    

    )
}

export default ProductList
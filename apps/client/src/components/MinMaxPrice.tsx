import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Toggle from './Toggle'
import { classNames } from '../utils/classNames'
import { Product } from '../models/Product.model'

interface MinMaxProps {
    array: Array<Product>,
    setArray: Dispatch<SetStateAction<Array<Product>>>,
}
const MinMaxPrice = ({ array, setArray }: MinMaxProps): JSX.Element => {
    const [enabled, setEnabled] = useState(false)
    const ordenarMinMax = ():void => {
        const poductsCopia = structuredClone(array);
        const datos:Array<Product> = poductsCopia.sort( (a,b) => a.price - b.price)
        console.log(datos)
        setArray(datos)
    }

    const ordenarMaxMin = ():void => {
        const poductsCopia = structuredClone(array);
        const datos:Array<Product> = poductsCopia.sort( (a,b) => b.price - a.price)
        console.log(datos)
        setArray(datos)
      }

  useEffect(() => {
    if(enabled){
        ordenarMaxMin()
    }else{
        ordenarMinMax()
    }
  }, [enabled]);
  
  return (
    <div className="flex flex-col">

      {/*<p className={classNames('font-medium flex ')}>Price</p>*/}
      <div className='flex flex-row gap-2'>
        <p className={classNames(!enabled?'font-medium': 'font-normal', 'flex')}>Lower</p>
        <Toggle enabled={enabled} setEnabled={setEnabled}/>
        <p className={classNames(enabled?'font-medium': 'font-normal', 'flex')}>Higher</p>
      </div>
</div>
  )
}

export default MinMaxPrice
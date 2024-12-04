import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Toggle from './Toggle'
import { classNames } from '../utils/classNames'
import { Product } from '../models/Product.model'

interface MinMaxProps {
    array: Array<Product>,
    setArray:Dispatch<SetStateAction<Array<Product>>>,
    fn1: () => void,
    fn2: () => void,
}
const MinMaxPrice = ({ array, setArray, fn1, fn2 }: MinMaxProps): JSX.Element => {
    const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if(enabled){
        fn1()
    }else{
        fn2()
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
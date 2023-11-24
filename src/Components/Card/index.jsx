import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShopingCardContext } from '../../Context'

function Card(data) {
    const context = React.useContext(ShopingCardContext)

    const productShow = (item)=>{
        context.setProductToShow(item)
        context.openProductDetail()
    }

    const addProductToCart = (event,item)=>{
        event.stopPropagation()
        context.setCarProduct([...context.carProduct, item]) 
        context.setCount(context.count + 1)
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }
    
  return (
    <div onClick={() => {productShow(data.data)} }
        className="bg-white cursor-pointer w-56 h-60">
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
            <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt='headphones' />
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">
                <PlusIcon  onClick={(event)=>addProductToCart(event,data.data)} className="h-6 w-6 text-black-500"></PlusIcon>
            </div>
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light" >{data.data.title}</span>
            <span className="text-lg font-bold">{data.data.price}</span>
        </p>
    </div>
  )
}

export { Card }
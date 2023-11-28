import { XMarkIcon } from '@heroicons/react/24/solid'
import './checkoutSideMenu.css'
import React from 'react'
import { ShopingCardContext } from "../../Context"
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../Utils'


function CheckoutSideMenu() {

    const context = React.useContext(ShopingCardContext)

    const handleDelete = (id) => {
      const listProducts = context.carProduct.filter(product => product.id !== id)
      context.setCarProduct(listProducts)
    }
    
  return (
    <aside 
    className={`${context.isCheckoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div onClick={()=>context.closeCheckoutSideMenu()}>
                <XMarkIcon  className="h-6 w-6 text-black-500"></XMarkIcon>
            </div>
        </div>
        <div className='px-6 overflow-y-scroll'>
          {
            context.carProduct.map(product => (
              <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
              />
            ))
          }
      </div>
      <div className='px-6'>
      <p className='flex justify-between items-center'>
        <span className='font-light'>Total:</span>
        <span className='font-medium text-2xl'>${totalPrice(context.carProduct)}</span>
      </p>
      </div>
    </aside>
    
  )
}

export { CheckoutSideMenu }
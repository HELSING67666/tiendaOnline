import { XMarkIcon } from '@heroicons/react/24/solid'
import './checkoutSideMenu.css'
import React from 'react'
import { ShopingCardContext } from "../../Context"


function CheckoutSideMenu() {

    const context = React.useContext(ShopingCardContext)
    
  return (
    <aside 
    className={`${context.isCheckoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div onClick={()=>context.closeCheckoutSideMenu()}>
                <XMarkIcon  className="h-6 w-6 text-black-500"></XMarkIcon>
            </div>
        </div>
      
    </aside>
    
  )
}

export { CheckoutSideMenu }
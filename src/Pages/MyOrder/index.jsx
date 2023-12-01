import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Layout } from '../../Components/Layout'
import { ShopingCardContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'
import { Link } from 'react-router-dom'


function MyOrder() {

  const context = React.useContext(ShopingCardContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index==='last'){
    index=context.order?.length-1
  }

    return (
      <Layout>
         <div className='flex w-80 justify-center items-center mb-6'>
          <Link to="/my-orders" className='absolute left-0'>
            <ChevronLeftIcon  className="h-6 w-6 text-black-500 cursor-pointer"></ChevronLeftIcon>
          </Link>
          <h1>My Order</h1>
          
        </div>
                  <div className='flex flex-col w-80'>
          {
            context.order?.[index]?.products?.map(product => (
              <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              
              />
            ))
          }
        </div>

      </Layout>
    )
  }
  
  export { MyOrder}
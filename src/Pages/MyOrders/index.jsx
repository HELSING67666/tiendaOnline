import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'
import { ShopingCardContext } from "../../Context"


function MyOrders() {

  const context = React.useContext(ShopingCardContext);

    return (
      <Layout>
        <div className='flex w-80 justify-center items-center mb-4'>
       
          <h1 className='font-medium text-xl'>My Orders</h1>
          
        </div>
      
      {        
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}/>
          </Link>
        ))
        
        
        }
      </Layout>
    )
  }
  
  export { MyOrders}
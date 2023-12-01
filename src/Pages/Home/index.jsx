import React from "react"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { Layout } from '../../Components/Layout'
import { ShopingCardContext } from "../../Context"

function Home () {
  

 const context = React.useContext(ShopingCardContext)

 const captureInput = (event) => {
  context.setSearchByTitle(event.target.value)
  
  }
  console.log('setFilteredItemsq',context.filteredItems)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We dont have anything 😒</div>
      )
    }
  }


  return (
    <Layout>
        <div className='flex w-80 justify-center items-center mb-4'>
                 <h1 className='font-medium text-xl'>Home</h1>
        </div>
        <input placeholder="Busca tu producto" type="text" 
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
            onChange={(event)=>{captureInput(event)}} ></input>

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          renderView()
        }
        </div>
        <ProductDetail/>
      
    </Layout>

  )
}

export  {Home}
import React from 'react'

const ShopingCardContext = React.createContext()

function ShopingCardProvider({children}) {
    const [count, setCount] = React.useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = React.useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    const [productToShow, setProductToShow] = React.useState({})
    const [carProduct, setCarProduct] = React.useState([])

    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = React.useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false)

    
  return (
    <ShopingCardContext.Provider value={{ count,
                                          setCount,
                                          openProductDetail,
                                          closeProductDetail,
                                          isProductDetailOpen,
                                          setProductToShow,
                                          productToShow,
                                          carProduct,
                                          setCarProduct,
                                          isCheckoutSideMenu,
                                          setIsCheckoutSideMenu,
                                          openCheckoutSideMenu,
                                          closeCheckoutSideMenu}}>
      {children}
    </ShopingCardContext.Provider>
  )
}

export {ShopingCardProvider, ShopingCardContext}
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

    const [order, setOrder] = React.useState([])
    const [items, setItems] = React.useState(null)
    const [searchByTitle, setSearchByTitle] = React.useState(null)
    const [searchByCategory, setSearchByCategory] = React.useState(null)
    const [filteredItems, setFilteredItems] = React.useState(null)

    const filteredItemsByTitle = (items, searchByTitle)=>{ 
      return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, setSearchByCategory)=>{ 
      return items?.filter(item => item.category.name.toLowerCase().includes(setSearchByCategory.toLowerCase()))
    }
    
    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
      if (searchType === 'BY_TITLE') {
        return filteredItemsByTitle(items, searchByTitle)
      }
  
      if (searchType === 'BY_CATEGORY') {
        return filteredItemsByCategory(items, searchByCategory)
      }
  
      if (searchType === 'BY_TITLE_AND_CATEGORY') {
        return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }
  
      if (!searchType) {
        return items
      }
    }

    React.useEffect(()=>{
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[])

    React.useEffect(()=>{
      
      if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))

    },[items, searchByTitle,searchByCategory])
        
        
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
                                          closeCheckoutSideMenu,
                                          order,
                                          setOrder,
                                          items, 
                                          setItems,
                                          searchByTitle,
                                          setSearchByTitle,
                                          searchByCategory,
                                          setSearchByCategory,
                                          filteredItems,
                                          setFilteredItems}}>
      {children}
    </ShopingCardContext.Provider>
  )
}

export {ShopingCardProvider, ShopingCardContext}
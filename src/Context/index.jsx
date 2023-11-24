import React from 'react'

const ShopingCardContext = React.createContext()

function ShopingCardProvider({children}) {
    const [count, setCount] = React.useState(0);
  return (
    <ShopingCardContext.Provider value={{count, setCount}}>
      {children}
    </ShopingCardContext.Provider>
  )
}

export {ShopingCardProvider, ShopingCardContext}
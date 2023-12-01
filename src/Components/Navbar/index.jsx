import React from "react"
import { NavLink } from "react-router-dom"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShopingCardContext } from "../../Context"

function Navbar() {

    const activeStyle = "underline underline-offset-4"
    const context = React.useContext(ShopingCardContext)

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-lg font-light">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-xl">
                <NavLink 
                    to='/'
                    className={({isActive})=> isActive ? activeStyle : undefined}
                  >
                    Home
                </NavLink>
            </li>
            <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
            <li>
                <NavLink to='/clothes'
                onClick={()=>{context.setSearchByCategory('clothes')}}
                 className={({isActive})=> isActive ? activeStyle : undefined}>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink to='/electronics'
                onClick={()=>{context.setSearchByCategory('electronics')}}
                 className={({isActive})=> isActive ? activeStyle : undefined}>
                Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/furnitures'
                onClick={()=>{context.setSearchByCategory('furniture')}}
                 className={({isActive})=> isActive ? activeStyle : undefined}>
                Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink to='/toys'
                onClick={()=>{context.setSearchByCategory('toys')}}
                 className={({isActive})=> isActive ? activeStyle : undefined}>
                Toys
                </NavLink>
            </li>
            <li>
                <NavLink to='/others'
                onClick={()=>{context.setSearchByCategory('others')}}
                 className={({isActive})=> isActive ? activeStyle : undefined}>
                Others
                </NavLink>
            </li>
        </ul>
        <ul className="flex items-center gap-3">
            <li className="text-black/60">
                miCorreo@gmail.com
            </li>
            <li>
                <NavLink to='/my-orders'>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account'>
                My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/sign-in'>
                Sign-in
                </NavLink>
            </li>
            <li className="flex items-center">
            <ShoppingBagIcon className="h-6 w-6 text-black-500"></ShoppingBagIcon> 
            <div>{context.count}</div>
            </li>
           
        </ul>
        
    </nav>
  )
}

export { Navbar}
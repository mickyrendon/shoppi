import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { MdShoppingCart } from 'react-icons/md'

export const NavBar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    
    return (
        <nav 
        className="flex items-center justify-between fixed top-0 z-10 w-full py-5 px-8 text-sm font-light shadow-sm backdrop-blur-sm"
        >
            <ul className='flex gap-3 items-center'>
                <li className="text-lg font-bold ">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/all'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/clothes'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/electronics'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/furnitures'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/toys'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Toys
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/others'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex gap-3 items-center'>
                <li className="text-neutral-500">
                    micky@bensof.com
                </li>
                <li >
                    <NavLink
                        to='/my-orders'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/my-account'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Account
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/sign-in'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        // to='/carrito'
                        // className={({isActive}) => 
                        //     isActive ? activeStyle : undefined
                        // }
                        className="flex items-center gap-1"
                    >
                        <MdShoppingCart className='w-4 h-4'/>
                        {context.count}
                    </NavLink>
                </li>
                
            </ul>
        </nav>
  )
}
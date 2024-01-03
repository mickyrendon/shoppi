import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { MdShoppingCart } from 'react-icons/md'

export const NavBar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    const signOutKey = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOutKey)
    const isUserSignOut = context.signOut || parsedSignOut

    const signOutBtnEvent = () => {
        const status = JSON.stringify(true)
        localStorage.setItem('sign-out', status)
        context.setSignOut(true)
        console.log('click ' + localStorage.getItem('sign-out') + context.signOut)
    }

    const renderView =  () => {
        if(isUserSignOut){
            return (
                <li >
                    <NavLink
                        to='/sign-in'
                        onClick={() =>  signOutBtnEvent()}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign Out
                    </NavLink>
                </li>
            )
        }else{
            return (
                <>
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
                            onClick={() =>  signOutBtnEvent()}
                            className={({isActive}) => 
                                isActive ? activeStyle : undefined
                            }
                        >
                            Sign In
                        </NavLink>
                    </li>
                    {/* <li >
                        <NavLink
                            to='/sign-up'
                            className={({isActive}) => 
                                isActive ? activeStyle : undefined
                            }
                        >
                            Sign Up
                        </NavLink>
                    </li> */}
                </>
            )
        }
    }   
    
    return (
        <nav 
        className="flex items-center justify-between fixed top-0 z-10 w-full py-5 px-8 text-sm font-light shadow-sm backdrop-blur-sm"
        >
            <ul className='flex gap-3 items-center'>
                <li className="text-lg font-bold ">
                    {/* <NavLink to='/'>
                        Bensof
                    </NavLink> */}
                    Shoppi
                </li>
                <li >
                    <NavLink
                        to='/all'
                        onClick={() => context.setSearchByCategory()}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/clothes/man'
                        onClick={() => context.setSearchByCategory(`men's clothing`)}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Man Clothes
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/clothes/woman'
                        onClick={() => context.setSearchByCategory(`women's clothing`)}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Woman Clothes
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/jewelery'
                        onClick={() => context.setSearchByCategory('jewelery')}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Jewelery
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex gap-3 items-center'>
                {renderView()}
                <li >
                    <NavLink
                        // to='/carrito'
                        // className={({isActive}) => 
                        //     isActive ? activeStyle : undefined
                        // }
                        className="flex items-center gap-1"
                    >
                        <MdShoppingCart className='w-4 h-4'/>
                        {context.addToCart.length}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
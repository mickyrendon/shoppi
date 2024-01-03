import axios from "axios"
import { parse } from "postcss"
import {PropTypes} from "prop-types"
import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

// LocalStorage checker(isUserSignUp or not)
export const localStorageStarter = () => {
    // getting user account if already registered
    const userAlreadyRegistered = localStorage.getItem('user-account')
    //getting the localstorage status to toggle if is necesary
    const userSignOut = localStorage.getItem('sign-out')
    let parsedAccount, parsedSignOut
    
    if (!userAlreadyRegistered){
        localStorage.setItem('user-account', JSON.stringify({}))
        parsedAccount = {}
    }else{
        parsedAccount = JSON.parse(userAlreadyRegistered)
    }

    if(!userSignOut){
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false
    }else{
        parsedSignOut = JSON.parse(userSignOut)
        console.log(parsedSignOut)
    }
}


export const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }   

    // user account
    const [userAccount, setUserAccount] = useState({})
    // sign out
    const [signOut, setSignOut] = useState(false)



    // FIXME, encontrar una buena API
    const options = {
    method: 'GET',
    url: 'https://fakestoreapi.com/products'
    }

    // usestate es como una variable que guarda informacion y la controla para mostrarla cuando se requiera
    const [items, setItems] = useState(null)
    
    useEffect(() => {
        async function petition (){
            try {
                const response = await axios.request(options)
                setItems(response.data)
            } catch (error) {
                console.error(error)
            }
            
        }
        petition()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //get Searcher value by title
    const [searchValue, setSearchValue] = useState(null)
    // get by category
    const [searchByCategory, setSearchByCategory] = useState(null)
    // filtered items
    const [filteredItems, setFilteredItems] = useState(null)

    const filteredItemsByTitle = (items, searchValue) => {
        return (
            items?.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        )
    }
    const filteredItemsByCategory = (items, searchByCategory) => {
        return (
            items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
        )
    }

    const filterBy = (type, items, searchValue, searchByCategory) => {
        if(type === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchValue)
        }
        if(type === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if(type === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        }
        if(!type) {
            return items
        }
    }

    useEffect(() => {
        if(searchValue && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchValue, searchByCategory))
        if(searchValue && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchValue, searchByCategory))
        if(!searchValue && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchValue, searchByCategory))
        if(!searchValue && !searchByCategory) setFilteredItems(filterBy(null, items, searchValue, searchByCategory))

        // input cleaner
        // return () => {
        //     setSearchValue(null)
        //   }
        
    }, [items, searchValue, searchByCategory])

    const [count, setCount] = useState(0)

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const toggleProductDetailOpen = () => setIsProductDetailOpen(!isProductDetailOpen)
    
    // open cart order list
    const [isOrderListOpen, setOrderListOpen] = useState(false)

    // product detail ~ show detail
    // estado que permite obtener la informacion de la card clickeada y mostrar en el product detail
    const [productInfo, setProductInfo] = useState({})
    // estado para agregar cards al carrito
    const [addToCart, setAddToCart] = useState([])
    // estado para agregar ordenes de compra al historial de ordenes
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            isProductDetailOpen,
            toggleProductDetailOpen,
            productInfo,
            setProductInfo,
            addToCart,
            setAddToCart,
            isOrderListOpen,
            setOrderListOpen,
            order,
            setOrder, 
            items, 
            setItems,
            searchValue,
            setSearchValue,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
            userAccount,
            setUserAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
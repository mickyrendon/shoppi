import axios from "axios"
import {PropTypes} from "prop-types"
import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }   
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
    }, [])
    //get Searcher value
    const [searchValue, setSearchValue] = useState(null)
    // filtered items
    const [filteredItems, setFilteredItems] = useState(null)

    const filterdItemsByTitle = (items, searchValue) => {
        return (
            items?.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        )
    }

    useEffect(() => {
        searchValue? setFilteredItems(filterdItemsByTitle(items, searchValue)): null
    }, [items, searchValue])

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
            filteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
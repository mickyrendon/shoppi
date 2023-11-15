import {PropTypes} from "prop-types"
import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }   

    const [count, setCount] = useState(0)
    // console.log(`${count} elemento agregado`)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const toggleProductDetailOpen = () => setIsProductDetailOpen(!isProductDetailOpen)

    // product detail ~ show detail
    // estado que permite obtener la informacion de la card clickeada y mostrar en el product detail
    const [productInfo, setProductInfo] = useState({})

    // estado para agregar cards al carrito
    const [addToCart, setAddToCart] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            isProductDetailOpen,
            toggleProductDetailOpen,
            productInfo,
            setProductInfo,
            addToCart,
            setAddToCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
import {PropTypes} from "prop-types"
import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }   


    const [count, setCount] = useState(0)
    console.log(`${count} elemento agregado`);
    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
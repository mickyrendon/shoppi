import {PropTypes} from 'prop-types'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { VscAdd, VscCheck } from 'react-icons/vsc'

export const Card = ( {data} ) => {
    // codigo para que no salga el error '‘children’ is missing inprops validation'
    Card.propTypes = {
        data: PropTypes.node.isRequired,
    }     
    const context = useContext(ShoppingCartContext)

    const addToCartEvent = (cardData) => {
         // guardando las props que quiero mostrar en el aside de detalles
         const productDetailsToShow = {
            id:          cardData.id,
            img:         cardData.image,
            title:       cardData.title,
            price:       cardData.price,
        }

        context.setCount(context.count + 1)
        context.setAddToCart([...context.addToCart, productDetailsToShow])
    }
    
    const openListOrder = () => {
        context.setOrderListOpen(true)
    }
    // product detail info recibe como valor a 'data' que se llama justo al clickear la card y que es la respuesta al fetch o a la api en forma de objeto
    const showProductInfo = (cardData) => {
        // guardando las props que quiero mostrar en el aside de detalles
        const productDetailsToShow = {
            img:         cardData.image,
            title:       cardData.title,
            price:       cardData.price,
            description: cardData.description
        }
        context.toggleProductDetailOpen()
        context.setProductInfo(productDetailsToShow)
    }

    // render icon
    const renderIcon = (id) => {
        const isInCart = context.addToCart.filter(product => product.id === id).length > 0
        if(isInCart) {
            return(
                <button 
                    className="w-4 h-4 grid place-content-center absolute right-4 top-4 rounded-full p-4 shadow-inner  text-white bg-green-400"
                    >
                    <VscCheck className="w-4 h-4 stroke-1"/>
                </button>
            )
        } else {
            return (
               <button 
                    className="w-4 h-4 grid place-content-center absolute right-4 top-4 rounded-full p-4 shadow-inner  text-slate-900 bg-gradient-to-r from-gray-100 to-gray-300"
                    onClick={(e) => {
                        e.stopPropagation()
                        // agregando los valores al estado addToCart
                        addToCartEvent(data)
                        // abriendo la lista de orders
                        openListOrder()
                    }}
                    >
                    <VscAdd className="w-4 h-4 stroke-1"/>
                </button>
            )
        }
    }

    if (data && data.title && data.price) {
    return (
        <div className="w-44 h-auto flex flex-col cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow"
        onClick={ (e) => {
            e.stopPropagation()
            // recibe como parametro a data que viene destructurado del componente Card el cual tiene como valor la respuesta del fetch que es uno bjeto
            showProductInfo(data)
        }}
        >
            <figure className="shrink w-full h-44 relative rounded-t-lg">
                {renderIcon(data.id)}
                <img src={data.image} alt={data.title} className="w-full h-full object-scale-down rounded-t-lg"/>
                <span className="absolute left-4 bottom-4 text-xs font-medium py-0.5 px-2 border-2 rounded-md bg-slate-200 shadow-inner">{data.category}</span>
            </figure>   
            <div className="p-1 flex items-start justify-between gap-1 shadow-inner">
                <span className="p-1 text-sm font-normal truncate">{data.title}</span>
                <span className="p-1 text-lg font-semibold">${data.price}</span>
            </div>
        </div>
    )
    } else {
    return <div className='p-1 text-sm font-normal'>Loading...</div>// or handle the loading state in another way
    }    
}
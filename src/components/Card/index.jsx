import {PropTypes} from 'prop-types'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { VscAdd } from 'react-icons/vsc'

export const Card = ({data}) => {
    // codigo para que no salga el error '‘children’ is missing inprops validation'
    Card.propTypes = {
        data: PropTypes.node.isRequired,
    }     
    console.log(data)

    const context = useContext(ShoppingCartContext)

    // product detail info recibe como valor a 'data' que se llama justo al clickear la card y que es la respuesta al fetch o a la api en forma de objeto
    const showProductInfo = (productDetail) => {
        context.toggleProductDetailOpen()
        context.setProductInfo(productDetail)

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
                <button 
                className="w-4 h-4 grid place-content-center absolute right-4 top-4 rounded-full p-4 shadow-inner bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white"
                onClick={(e) => {
                    e.stopPropagation()
                    context.setCount(context.count + 1)
                }}
                >
                    <VscAdd className="w-4 h-4 stroke-1"/>
                </button>
                <img src={data.images[0]} alt={data.category.name} className="w-full h-full object-cover rounded-t-lg"/>
                <span className="absolute left-4 bottom-4 text-xs font-medium py-0.5 px-2 border-2 rounded-md bg-slate-200 shadow-inner">{data.category.name}</span>
            </figure>   
            <div className="p-1 flex items-start justify-between gap-1 shadow-inner">
                <span className="p-1 text-sm font-normal">{data.title}</span>
                <span className="p-1 text-lg font-semibold">${data.price}</span>
            </div>
        </div>
    )
    } else {
    return <div>Loading...</div>; // or handle the loading state in another way
    }    
}
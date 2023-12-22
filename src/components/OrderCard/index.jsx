import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { VscClose } from 'react-icons/vsc'

export const OrderCard = props => {
// guardando las propiedades del objeto que necesitamos para renderizar el componente, estos valores se pasan por medio de los atributos de cada componente y se reciben como propiedades dentro del componente a renderizar que es 'ordercard'
    const { id, img, title, price, deleteOrderCard} = props
    // usando el contexto
    const context = useContext(ShoppingCartContext)
    
    // FIXME, presonalizar el evento close 
    return (
        <div className="p-2 flex justify-between items-center gap-1 outline-1 outline-gray-300 outline rounded-sm bg-zinc-50 ">
            <div className="flex items-center gap-4">
                <figure className="w-16 h-16 shrink rounded-sm">
                {/* el valor de los atributos que se pasan a los elementos  deben estar escritos tal cual la propiedad del compoenente, en este caso el componente es 'OrderCard' */}
                    <img className="w-full h-full rounded-lg object-scale-down" src={img} alt={title}/>
                </figure>
                <p className="max-h-16 text-xs font-light w-1/2 text-ellipsis overflow-hidden">{title}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
                <span
                className='flex items-center justify-center hover:cursor-pointer hover:shadow-sm'
                onClick={() => deleteOrderCard(id)}
                // onClick={ () => {context.setOrderListOpen(false), console.log('cerrando la lista de order')}}
                >
                    <VscClose/>
                </span>
                <p className="text-base font-medium">{`$${price}`}</p>
            </div>
        </div>
    )
}
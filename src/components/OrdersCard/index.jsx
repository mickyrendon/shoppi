import { getTimeAgo } from '../../utilities/date'
import { VscChevronRight } from 'react-icons/vsc'

export const OrdersCard = props => {
// guardando las propiedades del objeto que necesitamos para renderizar el componente, estos valores se pasan por medio de los atributos de cada componente y se reciben como propiedades dentro del componente a renderizar que es 'ordercard'
    const { totalPrice, totalProducts } = props
    // console.log(props + 'de Orders card' + getTimeAgo())
    // FIXME, no funciona la fecha
    const tiempo = Date.now()
    return (
        <div className="p-2 flex justify-between items-center gap-24 outline-1 outline-gray-300 outline rounded-sm bg-zinc-50 font-normal text-sm">
            <p className='flex flex-col items-center justify-center'>
                <span className='text-xs font-light'>{getTimeAgo(tiempo)}</span>
                <span className='w-full'>
                    {
                        totalProducts > 1? (`${totalProducts} Articulos` ): (`${totalProducts} Articulo`)
                    }
                </span>
            </p>
            <p className='flex-1 flex items-center justify-center gap-4'>
                <span className='font-semibold'>${totalPrice}</span>
                <VscChevronRight/>
            </p>
        </div>
    )
}
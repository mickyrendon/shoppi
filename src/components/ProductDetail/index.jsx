import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { VscClose } from 'react-icons/vsc'

// Open Product detail aside
export const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)
    // accediendo al estado 'productInfo' desde el context, el estado contiene los valores de la tarjeta que quiero mostrar en el aside de detalles
    const details = context.productInfo
    
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[18rem] max-w-sm h-[calc(100vh-68px)] flex-col gap-4 rounded-md shadow-md fixed right-0 top-16 p-6 bg-white`}>
            <nav className='w-full h-auto flex justify-between mb-4'>
                <h1>Detail</h1>
                <span
                className='w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-sm'
                onClick={ () => context.toggleProductDetailOpen()}
                >
                    <VscClose/>
                </span>
            </nav>
            <figure>
                <img src={details.img} alt={details.title} className='w-full max-h-56 object-scale-down'/>
            </figure>
            <div className='flex justify-between gap-2 items-center'>
                <span className='text-base font-semibold'>
                    {details.title}
                </span>
                <span className='text-lg font-semibold'>
                    {`$${details.price}`}
                </span>
            </div>
            <p className='text-sm font-normal text-wrap text-slate-700 h-auto overflow-y-auto max-h-56'>
                {details.description}
            </p>
            {/* TODO evento agregar al carrito */}
            <button className='px-4 py-2 mt-4 bg-green-400 rounded-lg text-white text-base font-semibold'>Agregar al carrito</button>
        </aside>
    )
}
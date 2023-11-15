import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { VscClose } from 'react-icons/vsc'

export const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log(`info del producto ${context.productInfo.title}`)
    const details = context.productInfo
    // console.log(details.category.name);
    
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[18rem] max-w-sm h-[calc(100vh-68px)] flex-col gap-4 rounded-md shadow-md fixed right-0 top-16 p-6 bg-white`}>
            <nav className='w-full h-auto flex justify-between'>
                <h1>Detail</h1>
                <span
                className='w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-sm'
                onClick={ () => context.toggleProductDetailOpen()}
                >
                    <VscClose/>
                </span>
            </nav>
            <figure>
            {/* FIXME, details.category.name is undefined  alt={details.category.name}*/}
                <img src={details.images?.[0]}  className='w-full h-54 rounded-md'/>
            </figure>
            <div className='flex justify-between gap-2 items-center'>
                <span className='text-sm font-normal'>
                    {details.title}
                </span>
                <span className='text-lg font-semibold'>
                    {details.price}
                </span>
            </div>
            <p className='text-sm font-normal'>
                {details.description}
            </p>
            <button className='px-4 py-2 mt-24 bg-green-400 rounded-lg text-white text-base font-semibold'>Agregar al carrito</button>
        </aside>
    )
}
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { VscClose } from 'react-icons/vsc'

export const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log(`info del producto ${context.productInfo.title}`)
    // const details = context.productInfo
    // console.log(details.category.name);

    // const openListOrder = () => {
        // console.log(`abriendo order`);
    // }
    
    return (
        <aside className={`${context.isOrderListOpen ? 'flex' : 'hidden'} w-[18rem] max-w-sm h-[calc(100vh-68px)] flex-col gap-4 rounded-md shadow-md fixed right-0 top-16 p-6 bg-white`}>
            <nav className='w-full h-auto flex justify-between'>
                <h1>My Order</h1>
                <span
                className='w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-sm'
                onClick={ () => context.toggleOrderListOpen()}
                >
                    <VscClose/>
                </span>
            </nav>
            <button className='px-4 py-2 mt-24 bg-green-400 rounded-lg text-white text-base font-semibold'>Agregar al carrito</button>
        </aside>
    )
}
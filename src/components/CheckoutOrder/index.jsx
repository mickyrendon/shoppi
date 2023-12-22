import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { VscClose } from 'react-icons/vsc'

// Adding new element to cart and to order list
export const AddingNewCardToCart = () => {
    const context = useContext(ShoppingCartContext)

    // eliminando la tarjeta agregada a la orden
    const deleteOrderCard = (id) => {
        const filteredProducts = context.addToCart.filter(product =>  product.id !== id)
        context.setAddToCart(filteredProducts)
    }

    return (
        <aside className={`${context.isOrderListOpen ? 'flex' : 'hidden'} w-[18rem] max-w-sm h-[calc(100vh-68px)] flex-col gap-4 rounded-md shadow-md fixed right-0 top-16 p-6 bg-white overflow-y-auto overflow-x-hidden`}>
            <nav className='w-full h-auto flex justify-between'>
                <h1>My Order</h1>
                <span
                className='w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-sm'
                onClick={ () => {context.setOrderListOpen(false), console.log('cerrando la lista de order')}}
                >
                    <VscClose/>
                </span>
            </nav>
            {/* TODO, renderizar el objeto agregado al carrito de compras */}
            {/* context.addToCart mapea los valores que se obtuvieron de la tarjeta agregada al carrito agregandolos como propiedades del componente */}
            {
                context.addToCart.map(product => (
                    <OrderCard 
                        key={product.title}
                        id={product.id}
                        title={product.title}
                        img={product.img}
                        price={product.price}
                        deleteOrderCard={deleteOrderCard}
                    />
                ))
            }
            {/* TODO, usar el btn para agregar al carrito */}
            <button className='px-4 py-2 mt-24 bg-green-400 rounded-lg text-white text-base font-semibold'>Ver carrito</button>
        </aside>
    )
}
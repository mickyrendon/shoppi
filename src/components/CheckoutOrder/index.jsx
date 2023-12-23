import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { VscClose } from 'react-icons/vsc'
import { totalPrice } from '../../utilities/index'

// Adding new element to cart and to order list
export const AddingNewCardToCart = () => {
    const context = useContext(ShoppingCartContext)

    // eliminando la tarjeta agregada a la orden
    const deleteOrderCard = (id) => {
        const filteredProducts = context.addToCart.filter(product =>  product.id !== id)
        context.setAddToCart(filteredProducts)
    }

    // agregando los elementos de 'my order' a un historial de ordenes 'mis ordenes'
    const addOrderToMyOrders = () => {
        const orderToAdd = {
            // TODO, cambiar por una api de fechas
            date: '22.12.23',
            products: context.addToCart,
            totalProducts: context.addToCart.length,
            totalPrice: totalPrice(context.addToCart)
        }

        // setOrder guarda las ordenes para mostrarlas en el historial
        context.setOrder([...context.order, orderToAdd])
        context.setAddToCart([])
        console.log(context.addToCart)
    }

    return (
        <aside className={`${context.isOrderListOpen ? 'flex' : 'hidden'} w-[18rem] max-w-sm h-[calc(100vh-68px)] flex-col gap-4 rounded-md shadow-md fixed right-0 top-16 p-6 bg-white overflow-y-auto overflow-x-hidden`}>
            <nav className='w-full h-auto flex justify-between'>
                <h1>My Order</h1>
                <span
                className='w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-sm'
                onClick={ () => {context.setOrderListOpen(false)}}
                >
                    <VscClose/>
                </span>
            </nav>
            <div className='flex flex-col gap-2 flex-1'>
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
            </div>
            <div className='w-full h-8 px-2 flex items-center'>
                <p className='w-full flex justify-between items-center'>
                    <span className='text-sm'>Total:</span>
                    <span className='font-semibold'>${totalPrice(context.addToCart)}</span>
                </p>
            </div>
            <Link to={'/my-orders/last'}>
                <button className='px-4 py-2 w-full bg-green-400 rounded-lg text-white text-base font-semibold' onClick={() => addOrderToMyOrders()}>Ver carrito</button>
            </Link>
        </aside>
    )
}
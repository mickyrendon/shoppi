import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../components/OrderCard"
import { Layout } from "../../components/Layout"

export const MyOrder = () => {
    const context = useContext(ShoppingCartContext)
    return (
      <Layout>
        My Order
        <div className='mt-8 flex flex-col gap-2 flex-1'>
                {/* context.addToCart mapea los valores que se obtuvieron de la tarjeta agregada al carrito agregandolos como propiedades del componente */}
                {
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard 
                            key={product.title}
                            id={product.id}
                            title={product.title}
                            img={product.img}
                            price={product.price}
                        />
                    ))
                }
            </div>
      </Layout>
    )
  }
  
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
import { OrderCard } from "../../components/OrderCard"
import { Layout } from "../../components/Layout"
import { VscChevronLeft } from "react-icons/vsc"

export const MyOrder = () => {
    const context = useContext(ShoppingCartContext)
    const currentPath = globalThis.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    index === 'last' ? index = context.order?.length-1:null
    return (
      <Layout>
        <div className="max-w-xs relative"> 
          <div className="w-full flex justify-center items-center">
            <Link to={'/my-orders'} className="absolute left-0">
              <VscChevronLeft />
            </Link>
            <h1>My Order</h1>
          </div>
          <div className='mt-8 flex flex-col gap-2 flex-1'>
                  {/* context.addToCart mapea los valores que se obtuvieron de la tarjeta agregada al carrito agregandolos como propiedades del componente */}
                  {
                      context.order?.[index]?.products.map(product => (
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
        </div>
      </Layout>
    )
  }
  
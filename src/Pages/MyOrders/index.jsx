import { useContext } from "react"
import { Layout } from "../../components/Layout"
import { ShoppingCartContext } from "../../Context"
import { OrdersCard } from "../../components/OrdersCard"
import { Link } from "react-router-dom"

export const MyOrders = () => {
    const context =  useContext(ShoppingCartContext)
    return (
      <Layout>
        <h1>My Orders</h1>
        <div className='mt-8 flex flex-col-reverse gap-2 flex-1'>
          {
            context.order?.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
            ))
          }
        </div>
      </Layout>
    )
  }
  
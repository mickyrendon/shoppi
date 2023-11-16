import { useRoutes, BrowserRouter } from 'react-router-dom'
import {Home} from '../Home'
import {MyAccount} from '../MyAccount'
import {MyOrder} from '../MyOrder'
import {MyOrders} from '../MyOrders'
import {SignIn} from '../SignIn'
import {NotFound} from '../NotFound'
import { NavBar } from '../../components/NavBar'
import { ShoppingCartProvider } from '../../Context'
import { Card } from '../../components/Card'
import { ProductDetail } from '../../components/CheckoutOrder'
import './App.css'



const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/*', element: <NotFound/> },
  ])

  return routes
}

export const App = () => {
  return (
    <>
        <ShoppingCartProvider>
          <BrowserRouter>
              <AppRoutes/>
              <NavBar/>
              <Card></Card>
              <ProductDetail/>
          </BrowserRouter>
        </ShoppingCartProvider>
    </>
  )

}

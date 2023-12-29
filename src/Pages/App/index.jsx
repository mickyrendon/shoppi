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
import { AddingNewCardToCart } from '../../components/CheckoutOrder'
import './App.css'



const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/all', element: <Home/> },
    { path: '/electronics', element: <Home/> },
    { path: '/clothes/man', element: <Home/> },
    { path: '/clothes/woman', element: <Home/> },
    { path: '/jewelery', element: <Home/> },
    { path: '/others', element: <Home/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/my-orders/:id', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/*', element: <NotFound/> },
    // { path: '/furnitures', element: <Home/> },
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
              <AddingNewCardToCart/>
          </BrowserRouter>
        </ShoppingCartProvider>
    </>
  )

}

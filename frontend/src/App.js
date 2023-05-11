
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Changepass from './components/PasswordReset/ResetPassword'
import ResetPassword from './components/PasswordReset/Email'
import Notfound404 from './components/notfound400/Notfound'
import Profile from './components/profile/profile'
import Home from './components/Home';
import Dashboard from './components/Dashboard/dashboard'
import Product from './components/product/product'
import Invoice from './components/invoices/invoices'
import Client from './components/clients/Clients'
/** root routes */
const router = createBrowserRouter([
  {
    path: '/*',
    element: <Notfound404/>,
  },
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: `/resetpassword/:token`,
    element: <Changepass/>,
  },
  {
    path: '/resetpassword',
    element: <ResetPassword/>,
  },
  {
    path: '/profile',
    element: <Profile/>,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
  },
  {
    path: '/products',
    element: <Product/>,
  },
  {
    path: '/invoices',
    element: <Invoice/>,
  },
  {
    path: '/clients',
    element: <Client/>,
  },
])


const App = () => {
  return (
  <>
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  </>
  )
}

export default App
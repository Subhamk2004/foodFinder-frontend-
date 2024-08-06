import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Route from './Route.jsx';
import Home from './pages/Home.jsx';
import './App.css'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Cart from './pages/Cart.jsx';
function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Route />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'about',
          element: <h1>About</h1>
        },
        {
          path: 'contact',
          element: <h1>Contact Us</h1>
        },
        {
          path: 'login',
          element: <Login />
        }
        ,
        {
          path: 'signup',
          element: <Signup />
        },
        {
          path: 'cart',
          element: <Cart />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;

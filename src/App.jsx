import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Route from './Route.jsx';
import Home from './pages/Home.jsx';
import './App.css'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Cart from './pages/Cart.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
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
          element: <About/>
        },
        {
          path: 'contact',
          element: <Contact/>
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

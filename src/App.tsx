import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/Home.tsx'
import Login from './pages/Login/Login.tsx'
import RootLayout from './pages/RootLayout/RootLayout.tsx'
import Register from './pages/Register/Register.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/Register', element: <Register /> },
    ],
  },
])

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
